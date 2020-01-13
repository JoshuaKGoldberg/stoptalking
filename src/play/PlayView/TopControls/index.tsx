import React from "react";

import { ButtonsList } from "../../../components/ButtonsList";
import { InputButton } from "../../../components/Inputs/InputButton";
import { Notice } from "../../../components/Notice";
import { ZenZone } from "../../../components/ZenZone";
import { Settings } from "../../../types";
import { TopMessage } from "./TopMessage";

export type TopControlsProps = {
    paused?: boolean;
    restart: () => void;
    setPaused: (newPaused: boolean) => void;
    settings: Settings;
    toggleZen: () => void;
};

export const TopControls: React.FC<TopControlsProps> = ({
    paused,
    restart,
    setPaused,
    settings,
    toggleZen,
}) => {
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
