import { useCallback, useState } from "react";

import { useQuery } from "../hooks/useQuery";
import { Settings } from "./types";

const secondMs = 1000;
const minuteMs = secondMs * 60;

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
