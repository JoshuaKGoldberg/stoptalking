import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { ShareButton } from "../../components/ShareButton";
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
    const history = useHistory();
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

    const goToSettings = useCallback(() => {
        const newSearch = setSettings({
            remaining: settings.time,
        });

        history.push("/" + newSearch);
    }, [history, setSettings, settings]);

    return (
        <main>
            <h1>Play</h1>
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <OutOfTime remaining={settings.remaining} />
            <input onClick={goToSettings} type="button" value="Settings" />
            <ShareButton settings={settings} />
        </main>
    );
};
