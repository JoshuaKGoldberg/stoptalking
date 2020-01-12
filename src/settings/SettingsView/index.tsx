import React from "react";

import { TimeDisplay } from "../../components/TimeDisplay";
import { Settings } from "../types";
import { SetSettings } from "../useSettings";
import { BottomButtons } from "../../components/BottomButtons";

export type SettingsViewProps = {
    settings: Settings;
    setSettings: SetSettings;
};

export const SettingsView: React.FC<SettingsViewProps> = ({
    settings,
    setSettings,
}) => {
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
            <BottomButtons
                toUri="/play"
                toText="Start"
                settings={settings}
                setSettings={setSettings}
            />
        </main>
    );
};
