import { useCallback, useState } from "react";

import { Settings } from "../types.js";
import { SetSettings } from "../useSettings.js";
import { useInterval } from "./useInterval.js";

export interface UseTimeControlsSettings {
    setSettings: SetSettings<"remaining" | "time">;
    settings: Pick<Settings, "remaining" | "time">;
}

export const useTimeControls = ({
    setSettings,
    settings,
}: UseTimeControlsSettings) => {
    const [paused, setPaused] = useState(true);

    const restart = useCallback(() => {
        setSettings({
            remaining: settings.time,
            time: settings.time,
        });
        setPaused(true);
    }, [setSettings, settings.time]);

    const tick = useCallback(
        (decrease: number) => {
            setSettings({
                remaining: settings.remaining - decrease,
            });
        },
        [setSettings, settings.remaining],
    );

    useInterval(tick, !paused);

    return { paused, restart, setPaused };
};
