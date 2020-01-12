import React, { useEffect } from "react";

import { Settings } from "../../settings/types";
import { TimeDisplay } from "../../components/TimeDisplay";
import { Link, useLocation } from "react-router-dom";
import { useTime } from "../../hooks/useTime";
import { SetSettings } from "../../settings/useSettings";

export type PlayViewProps = {
    settings: Settings;
    setSettings: SetSettings;
};

export const PlayView: React.FC<PlayViewProps> = ({
    settings,
    setSettings,
}) => {
    const location = useLocation();
    const time = useTime();

    useEffect(() => {
        if (settings.talkTime - time !== settings.talkTimeRemaining) {
            setSettings({
                talkTimeRemaining: settings.talkTime - time,
            });
        }
    }, [setSettings, settings.talkTime, settings.talkTimeRemaining, time]);

    return (
        <main>
            <h1>Play</h1>
            <TimeDisplay
                value={settings.talkTimeRemaining ?? settings.talkTime}
            />
            <Link
                to={{
                    pathname: "/",
                    search: location.search,
                }}
            >
                Back to Settings
            </Link>
        </main>
    );
};
