import React from "react";

import { ButtonsList } from "../ButtonsList";
import { InputLink } from "../Inputs/InputLink";
import { Settings } from "../../types";
import { BeepButton } from "../BeepButton";
import { Notice } from "../Notice";
import { ShareButton } from "../ShareButton";
import { ZenZone } from "../ZenZone";

export type BottomControlsProps = {
    remaining: number;
    settings: Settings;
};

export const BottomControls: React.FC<BottomControlsProps> = ({
    remaining,
    settings,
}) => {
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
