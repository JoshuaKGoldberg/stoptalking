import React from "react";

import { Settings } from "../../types.js";
import { BeepButton } from "../BeepButton/index.jsx";
import { ButtonsList } from "../ButtonsList/index.jsx";
import { InputLink } from "../Inputs/InputLink/index.jsx";
import { Notice } from "../Notice/index.jsx";
import { ShareButton } from "../ShareButton/index.jsx";
import { ZenZone } from "../ZenZone/index.jsx";

export interface BottomControlsProps {
    remaining: number;
    settings: Settings;
}

export const BottomControls = ({
    remaining,
    settings,
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
                <BeepButton over={-remaining} />
            </ButtonsList>
        </ZenZone>
    );
};
