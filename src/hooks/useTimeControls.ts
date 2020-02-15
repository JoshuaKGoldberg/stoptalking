import { useState, useCallback } from "react";

import { SetSettings } from "../useSettings";
import { useInterval } from "./useInterval";
import { Settings } from "../types";

export type UseTimeControlsSettings = {
    settings: Pick<Settings, 'remaining' | 'time'>;
    setSettings: SetSettings<'remaining' | 'time'>;
}

export const useTimeControls = ({ settings, setSettings }: UseTimeControlsSettings) => {
    const [paused, setPaused] = useState(true);

    const restart = useCallback(() => {
        setSettings({
            time: settings.time,
            remaining: settings.time,
        });
        setPaused(true);
    }, [setSettings, settings.time]);

    const tick = useCallback((decrease: number) => {
        setSettings({
            remaining: settings.remaining - decrease,
        });
    }, [setSettings, settings.remaining])

    useInterval(tick, !paused);

    return { paused, restart, setPaused };
};
