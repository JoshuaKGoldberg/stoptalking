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
                value={Math.max(
                    0,
                    settings.talkTimeRemaining ?? settings.talkTime,
                )}
            />
            <Link
                to={{
                    pathname: "/",
                    search: location.search,
                }}
            >
                Back to Settings
            </Link>
            <ShareButton settings={settings} />
            {settings.talkTimeRemaining && settings.talkTimeRemaining < 0 && (
                <OutOfTime over={-Math.min(0, settings.talkTimeRemaining)} />
            )}
        </main>
    );
};
