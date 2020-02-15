import { useCallback, useState } from "react";

import { useQuery } from "./hooks/useQuery";
import { minuteMs } from "./time";
import { stringifySearch } from "./utils/search";
import { Settings } from "./types";

const defaultTime = minuteMs * 5;

export const useSettings = () => {
    const query = useQuery();

    const [settings, setSettings] = useState<Settings>({
        ...query,
        time: query.time ? parseInt(query.time) : defaultTime,
        remaining: query.remaining
            ? parseInt(query.remaining)
            : defaultTime,
    });

    const setSettingsAndHistory = useCallback(
        (overrides: Partial<Settings>) => {
            const newSettings = { ...settings, ...overrides };
            const stringifiedSettings = stringifySearch(newSettings);

            setSettings(newSettings);
            window.history.replaceState("", "", stringifiedSettings);
        },
        [settings],
    );

    return [settings, setSettingsAndHistory] as const;
};

export type SetSettings<SettingsKeys extends keyof Settings = keyof Settings> = (newSettings: Partial<Pick<Settings, SettingsKeys>>) => void;