import React from "react";
import { SetSettingsFromQuery } from "../useSettings";
import { Settings } from "../types";
import { TimeInput } from "../TimeInput";

export type SettingsViewProps = {
    settings: Settings;
    setSettings: SetSettingsFromQuery;
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
                <TimeInput
                    onChange={talkTime => setSettings({ talkTime })}
                    value={settings.talkTime}
                />
                .
            </p>
        </main>
    );
};
