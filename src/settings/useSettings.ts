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

    const setSettingsAndHistory = useCallback((newSettings: Settings) => {
        setSettings(newSettings);

        window.history.replaceState(
            "",
            "",
            "?" +
            Object.entries(newSettings)
                .map(([key, value]) => key + "=" + value)
                .join("&"),
        );
    }, []);

    return [settings, setSettingsAndHistory] as const;
};

export type SetSettingsFromQuery = ReturnType<typeof useSettings>[1];
