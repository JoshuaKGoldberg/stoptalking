import React from "react";

import { BottomControls } from "../../components/BottomControls";
import { HiddenHeading } from "../../components/HiddenHeading";
import { Layout } from "../../components/Layout";
import { TimeDisplay } from "../../components/TimeDisplay";
import { Settings } from "../types";
import { SetSettings } from "../useSettings";
import styles from "./styles.module.css";

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
        <Layout>
            <HiddenHeading>Settings Page</HiddenHeading>
            <div className={styles.talkNotice}>Your talk will be</div>
            <TimeDisplay
                onChange={time => setSettings({ time, remaining: time })}
                value={settings.time}
            />
            <BottomControls
                audio={audio}
                toggleAudio={toggleAudio}
                toUri="/play"
                toText="Ready?"
                settings={settings}
                setSettings={setSettings}
            />
        </Layout>
    );
};
