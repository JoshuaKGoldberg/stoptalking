import React, { useEffect } from "react";

import { BottomButtons } from "../../components/BottomButtons";
import { TimeDisplay } from "../../components/TimeDisplay";
import { useTime } from "../../hooks/useTime";
import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { OutOfTime } from "../OutOfTime";

export type PlayViewProps = {
    settings: Settings;
    setSettings: SetSettings;
};

export const PlayView: React.FC<PlayViewProps> = ({
    settings,
    setSettings,
}) => {
    const timeMs = useTime({
        startTime: settings.time + (settings.time - settings.remaining),
    });

    useEffect(() => {
        const elapsed = timeMs - settings.time;
        const actualRemaining = settings.time - elapsed;

        if (actualRemaining !== settings.remaining) {
            setSettings({
                remaining: actualRemaining,
            });
        }
    }, [setSettings, settings.time, settings, timeMs]);

    return (
        <main>
            <h1>Play</h1>
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <OutOfTime remaining={settings.remaining} />
            <BottomButtons
                toUri="/"
                toText="Settings"
                settings={settings}
                setSettings={setSettings}
            />
        </main>
    );
};
