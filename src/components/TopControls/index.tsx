import React from "react";

import { Settings } from "../../types.js";
import { ButtonsList } from "../ButtonsList/index.jsx";
import { InputButton } from "../Inputs/InputButton/index.jsx";
import { Notice } from "../Notice/index.jsx";
import { ZenZone } from "../ZenZone/index.jsx";
import { TopMessage } from "./TopMessage/index.jsx";

export interface TopControlsProps {
    paused?: boolean;
    restart: () => void;
    setPaused: (newPaused: boolean) => void;
    settings: Settings;
    toggleZen: () => void;
}

export const TopControls = ({
    paused,
    restart,
    setPaused,
    settings,
    toggleZen,
}: TopControlsProps) => {
    return (
        <ZenZone zen={settings.zen}>
            <ButtonsList>
                <InputButton
                    onClick={() => setPaused(!paused)}
                    value={paused ? "Go!" : "Pause"}
                />
                <InputButton onClick={restart} value="Restart" />
                <InputButton
                    onClick={toggleZen}
                    value={settings.zen ? "Zen Off" : "Zen On"}
                />
            </ButtonsList>
            <Notice>
                <TopMessage paused={paused} settings={settings} />
            </Notice>
        </ZenZone>
    );
};
