import React from "react";

import { TimeDisplay } from "../../components/TimeDisplay";
import { Settings } from "../types";
import { SetSettings } from "../useSettings";
import { BottomButtons } from "../../components/BottomButtons";

export type SettingsViewProps = {
    audio: boolean;
    settings: Settings;
    setSettings: SetSettings;
    toggleAudio: () => void;
};

export const SettingsView: React.FC<SettingsViewProps> = ({
    audio,
    settings,
    setSettings,
    toggleAudio,
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
                audio={audio}
                toggleAudio={toggleAudio}
                toUri="/play"
                toText="Start"
                settings={settings}
                setSettings={setSettings}
            />
        </main>
    );
};
