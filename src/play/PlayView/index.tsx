import React, { useEffect, useState, useCallback } from "react";

import { BottomControls } from "../../components/BottomControls";
import { HiddenHeading } from "../../components/HiddenHeading";
import { Layout } from "../../components/Layout";
import { TimeDisplay } from "../../components/TimeDisplay";
import { useTime } from "../../hooks/useTime";
import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { OutOfTime } from "../OutOfTime";
import { TopControls } from "./TopControls";

export type PlayViewProps = {
    audio?: boolean;
    setSettings: SetSettings;
    settings: Settings;
    toggleAudio: () => void;
};

export const PlayView: React.FC<PlayViewProps> = ({
    audio,
    setSettings,
    settings,
    toggleAudio,
}) => {
    const [startTime, setStartTime] = useState(
        settings.time * 2 - settings.remaining,
    );
    const [paused, setPaused] = useState(false);
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
    }, [resetTime, setSettings, settings.time]);

    return (
        <Layout settings={settings}>
            <HiddenHeading>Play</HiddenHeading>
            <TopControls
                paused={paused}
                restart={restart}
                setPaused={setPaused}
                toggleZen={() => setSettings({ zen: !settings.zen })}
                zen={settings.zen}
            />
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <div>
                <OutOfTime audio={audio} over={-settings.remaining} />
                <BottomControls
                    audio={audio}
                    toggleAudio={toggleAudio}
                    toUri="/"
                    toText="Settings"
                    settings={settings}
                    setSettings={setSettings}
                />
            </div>
        </Layout>
    );
};
