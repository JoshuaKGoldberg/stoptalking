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
            talkTimeRemaining: settings.talkTime,
        });

        history.push("/play" + newSearch);
    }, [history, setSettings, settings.talkTime]);

    return (
        <main>
            <h1>Settings</h1>
            <p>
                Your talk will be
                <TimeDisplay
                    onChange={talkTime => setSettings({ talkTime })}
                    value={settings.talkTime}
                />
            </p>
            <input onClick={play} type="button" value="Play" />
            <ShareButton settings={settings} />
        </main>
    );
};
