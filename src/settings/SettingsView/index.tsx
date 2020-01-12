import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { TimeDisplay } from "../../components/TimeDisplay";
import { ShareButton } from "../../components/ShareButton";
import { Settings } from "../types";
import { SetSettings } from "../useSettings";

export type SettingsViewProps = {
    settings: Settings;
    setSettings: SetSettings;
};

export const SettingsView: React.FC<SettingsViewProps> = ({
    settings,
    setSettings,
}) => {
    const history = useHistory();
    const play = useCallback(() => {
        const newSearch = setSettings({
            remaining: settings.time,
        });

        history.push("/play" + newSearch);
    }, [history, setSettings, settings]);

    return (
        <main>
            <h1>Settings</h1>
            <p>
                Your talk will be
                <TimeDisplay
                    onChange={time => setSettings({ time, remaining: time })}
                    value={settings.time}
                />
            </p>
            <input onClick={play} type="button" value="Start" />
            <ShareButton settings={settings} />
        </main>
    );
};
