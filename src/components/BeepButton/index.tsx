import React from "react";

import { useConsentingAudio } from "../../hooks/useConsentingAudio";
import { InputButton } from "../Inputs/InputButton";
import { useBeeper } from "./useBeeper";

export type BeepButtonProps = {
    over: number;
};

export const BeepButton: React.FC<BeepButtonProps> = ({ over }) => {
    const [audio, toggleAudio] = useConsentingAudio();
    useBeeper({ audio, over });

    return (
        <InputButton
            onClick={toggleAudio}
            value={audio ? "Disable beeps" : "Enable beeps"}
        />
    );
};
