import React, { useEffect, useState, useCallback } from "react";

import { BottomControls } from "../../components/BottomControls";
import { HiddenHeading } from "../../components/HiddenHeading";
import { Layout } from "../../components/Layout";
import { TimeDisplay } from "../../components/TimeDisplay";
import { useTime } from "../../hooks/useTime";
import { Settings } from "../../types";
import { SetSettings } from "../../useSettings";
import { TopControls } from "./TopControls";

export type PlayViewProps = {
    setSettings: SetSettings;
    settings: Settings;
};

export const PlayView: React.FC<PlayViewProps> = ({
    setSettings,
    settings,
}) => {
    const [startTime, setStartTime] = useState(
        settings.time * 2 - settings.remaining,
    );
    const [paused, setPaused] = useState(true);
    const [timeMs, resetTime] = useTime({ paused, startTime });

    useEffect(() => {
        const elapsed = timeMs - settings.time;
        const actualRemaining = settings.time - elapsed;

        if (actualRemaining !== settings.remaining) {
            setSettings({
                remaining: actualRemaining,
            });
        }
    }, [setSettings, settings.time, settings, timeMs]);

    const restart = useCallback(() => {
        setSettings({
            remaining: settings.time,
        });
        setStartTime(settings.time);
        resetTime();
        setPaused(true);
    }, [resetTime, setSettings, settings.time]);

    return (
        <Layout paused={paused} settings={settings}>
            <HiddenHeading>Play</HiddenHeading>
            <TopControls
                paused={paused}
                restart={restart}
                setPaused={setPaused}
                settings={settings}
                toggleZen={() => setSettings({ zen: !settings.zen })}
            />
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <BottomControls
                remaining={settings.remaining}
                settings={settings}
            />
        </Layout>
    );
};
