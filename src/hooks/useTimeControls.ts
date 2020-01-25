import { useEffect, useState, useCallback } from "react";

import { SetSettings } from "../useSettings";
import { useTime } from "./useTime";
import { Settings } from "../types";

export type UseTimeControlsSettings = {
    settings: Pick<Settings, 'remaining' | 'time'>;
    setSettings: SetSettings<'remaining' | 'time'>;
}

export const useTimeControls = ({ settings, setSettings }: UseTimeControlsSettings) => {
    const [paused, setPaused] = useState(true);
    const [startTime, setStartTime] = useState(
        settings.time * 2 - settings.remaining,
    );
    const [timeMs, resetTime] = useTime({ paused, startTime });

    const restart = useCallback(() => {
        setSettings({
            remaining: settings.time,
        });
        setStartTime(settings.time);
        resetTime();
        setPaused(true);
    }, [resetTime, setSettings, settings.time]);

    useEffect(() => {
        const elapsed = timeMs - settings.time;
        const actualRemaining = settings.time - elapsed;

        if (actualRemaining !== settings.remaining) {
            setSettings({
                remaining: actualRemaining,
            });
        }
    }, [setSettings, settings.time, settings, timeMs]);

    return { paused, restart, setPaused };
};
