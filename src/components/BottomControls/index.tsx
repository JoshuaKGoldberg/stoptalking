import React from "react";

import { Settings } from "../../types.js";
import { ButtonsList } from "../ButtonsList/index.jsx";
import { InputButton } from "../Inputs/InputButton/index.jsx";
import { InputLink } from "../Inputs/InputLink/index.jsx";
import { Notice } from "../Notice/index.jsx";
import { ShareButton } from "../ShareButton/index.jsx";
import { ZenZone } from "../ZenZone/index.jsx";

export interface BottomControlsProps {
    remaining: number;
    settings: Settings;
    toggleZen: () => void;
}

export const BottomControls = ({
    remaining,
    settings,
    toggleZen,
}: BottomControlsProps) => {
    return (
        <ZenZone zen={settings.zen}>
            <Notice>
                {remaining <= 0 ? "Out of time!" : "Please don't go over."}
            </Notice>
            <ButtonsList>
                <InputLink href="https://github.com/JoshuaKGoldberg/stoptalking">
                    View source
                </InputLink>
                <ShareButton settings={settings} />
                <InputButton
                    onClick={toggleZen}
                    value={settings.zen ? "Zen Off" : "Zen On"}
                />
            </ButtonsList>
        </ZenZone>
    );
};
