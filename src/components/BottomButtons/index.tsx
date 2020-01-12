import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { InputButton } from "../InputButton";
import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { ShareButton } from "../ShareButton";
import styles from "./styles.module.css";

export type BottomButtonsProps = {
    audio: boolean;
    setSettings: SetSettings;
    settings: Settings;
    toggleAudio: () => void;
    toText: string;
    toUri: string;
};

export const BottomButtons: React.FC<BottomButtonsProps> = ({
    audio,
    setSettings,
    settings,
    toggleAudio,
    toText,
    toUri,
}) => {
    const history = useHistory();

    const navigate = useCallback(() => {
        const newSearch = setSettings({
            remaining: settings.time,
        });

        history.push(toUri + newSearch);
    }, [history, setSettings, settings.time, toUri]);

    return (
        <nav className={styles.bottomButtons}>
            <InputButton onClick={navigate} value={toText} />
            <ShareButton settings={settings} />
            <InputButton
                onClick={toggleAudio}
                value={audio ? "Disable beeps" : "Enable beeps"}
            />
        </nav>
    );
};
