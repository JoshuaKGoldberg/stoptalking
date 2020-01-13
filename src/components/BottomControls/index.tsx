import React from "react";

import { ButtonsList } from "../ButtonsList";
import { InputButton } from "../Inputs/InputButton";
import { InputLink } from "../Inputs/InputLink";
import { Settings } from "../../types";
import { ShareButton } from "../ShareButton";
import { ZenZone } from "../ZenZone";
import { Notice } from "../Notice";

export type BottomControlsProps = {
    audio?: boolean;
    remaining: number;
    settings: Settings;
    toggleAudio: () => void;
};

export const BottomControls: React.FC<BottomControlsProps> = ({
    audio,
    remaining,
    settings,
    toggleAudio,
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
                <InputButton
                    onClick={toggleAudio}
                    value={audio ? "Disable beeps" : "Enable beeps"}
                />
            </ButtonsList>
        </ZenZone>
    );
};
