import { useCallback, useState } from "react";

import { useQuery } from "./hooks/useQuery.js";
import { minuteMs } from "./time.js";
import { Settings } from "./types.js";
import { stringifySearch } from "./utils/search.js";

const defaultTime = minuteMs * 20;

export const useSettings = () => {
    const query = useQuery();

    const [settings, setSettings] = useState<Settings>({
        ...query,
        remaining: query.remaining ? parseInt(query.remaining) : defaultTime,
        time: query.time ? parseInt(query.time) : defaultTime,
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

export type SetSettings<SettingsKeys extends keyof Settings = keyof Settings> =
    (newSettings: Partial<Pick<Settings, SettingsKeys>>) => void;
