import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation();
    const timeMs = useTime({
        startTime: -settings.remaining,
    });

    useEffect(() => {
        if (settings.time - timeMs !== settings.remaining) {
            setSettings({
                remaining: settings.time - timeMs,
            });
        }
    }, [setSettings, settings.time, settings.remaining, timeMs]);

    return (
        <main>
            <h1>Play</h1>
            <TimeDisplay
                value={Math.max(0, settings.remaining ?? settings.time)}
            />
            <OutOfTime remaining={settings.remaining} />
            <Link
                to={{
                    pathname: "/",
                    search: location.search,
                }}
            >
                Back to Settings
            </Link>
            <ShareButton settings={settings} />
        </main>
    );
};
