import React from "react";

import { useConsentingAudio } from "../../hooks/useConsentingAudio.js";
import { InputButton } from "../Inputs/InputButton/index.jsx";
import { useBeeper } from "./useBeeper.jsx";

export interface BeepButtonProps {
    over: number;
}

export const BeepButton = ({ over }: BeepButtonProps) => {
    const [audio, toggleAudio] = useConsentingAudio();
    useBeeper({ audio, over });

    return (
        <InputButton
            onClick={toggleAudio}
            value={audio ? "Disable beeps" : "Enable beeps"}
        />
    );
};
