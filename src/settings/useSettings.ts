import { useCallback, useState } from "react";

import { useQuery } from "../hooks/useQuery";
import { minuteMs } from "../time";
import { Settings } from "./types";

const defaultSettings = {
    talkTime: minuteMs * 5,
};

export const useSettings = () => {
    const query = useQuery();

    const [settings, setSettings] = useState<Settings>({
        ...defaultSettings,
        ...query,
        talkTime: query.talkTime
            ? parseInt(query.talkTime)
            : defaultSettings.talkTime,
    });

    const setSettingsAndHistory = useCallback(
        (overrides: Partial<Settings>) => {
            const newSettings = { ...settings, ...overrides };
            setSettings(newSettings);

            const stringifiedSettings =
                "?" +
                Object.entries(newSettings)
                    .map(([key, value]) => key + "=" + value)
                    .join("&");

            window.history.replaceState("", "", stringifiedSettings);

            return stringifiedSettings;
        },
        [settings],
    );

    return [settings, setSettingsAndHistory] as const;
};

export type SetSettings = ReturnType<typeof useSettings>[1];
