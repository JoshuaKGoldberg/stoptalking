import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { ButtonsList } from "../ButtonsList";
import { InputButton } from "../InputButton";
import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { ShareButton } from "../ShareButton";
import { ZenZone } from "../ZenZone";

export type BottomControlsProps = {
    audio?: boolean;
    setSettings: SetSettings;
    settings: Settings;
    toggleAudio: () => void;
    toText: string;
    toUri: string;
};

export const BottomControls: React.FC<BottomControlsProps> = ({
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
        <ZenZone zen={settings.zen}>
            <ButtonsList>
                <InputButton onClick={navigate} value={toText} />
                <ShareButton settings={settings} />
                <InputButton
                    onClick={toggleAudio}
                    value={audio ? "Disable beeps" : "Enable beeps"}
                />
            </ButtonsList>
        </ZenZone>
    );
};
