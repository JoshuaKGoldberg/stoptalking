import { useCallback, useState } from "react";

import { useQuery } from "./hooks/useQuery";
import { minuteMs } from "./time";
import { stringifySearch } from "./utils/search";
import { Settings } from "./types";

const defaultSettings = {
    time: minuteMs * 5,
    remaining: minuteMs * 5,
};

export const useSettings = () => {
    const query = useQuery();

    const [settings, setSettings] = useState<Settings>({
        ...defaultSettings,
        ...query,
        time: query.time ? parseInt(query.time) : defaultSettings.time,
        remaining: query.remaining
            ? parseInt(query.remaining)
            : defaultSettings.remaining,
    });

    const setSettingsAndHistory = useCallback(
        (overrides: Partial<Settings>) => {
            const newSettings = { ...settings, ...overrides };
            const stringifiedSettings = stringifySearch(newSettings);

            setSettings(newSettings);
            window.history.replaceState("", "", stringifiedSettings);

            return stringifiedSettings;
        },
        [settings],
    );

    return [settings, setSettingsAndHistory] as const;
};

export type SetSettings<SettingsKeys extends keyof Settings = keyof Settings> = (newSettings: Partial<Pick<Settings, SettingsKeys>>) => void;