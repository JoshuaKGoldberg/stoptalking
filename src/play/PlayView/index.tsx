import React, { useEffect, useState, useCallback } from "react";

import { BottomButtons } from "../../components/BottomButtons";
import { TimeDisplay } from "../../components/TimeDisplay";
import { useTime } from "../../hooks/useTime";
import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { OutOfTime } from "../OutOfTime";
import { Controls } from "./Controls";

export type PlayViewProps = {
    audio: boolean;
    settings: Settings;
    setSettings: SetSettings;
    toggleAudio: () => void;
};

export const PlayView: React.FC<PlayViewProps> = ({
    audio,
    toggleAudio,
    settings,
    setSettings,
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
        <main>
            <h1>Play</h1>
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <OutOfTime audio={audio} over={-settings.remaining} />
            <Controls paused={paused} setPaused={setPaused} restart={restart} />
            <BottomButtons
                audio={audio}
                toggleAudio={toggleAudio}
                toUri="/"
                toText="Settings"
                settings={settings}
                setSettings={setSettings}
            />
        </main>
    );
};
