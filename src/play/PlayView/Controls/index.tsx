import React from "react";

import { InputButton } from "../../../components/InputButton";

export type ControlsProps = {
    paused: boolean;
    restart: () => void;
    setPaused: (newPaused: boolean) => void;
};

export const Controls: React.FC<ControlsProps> = ({
    paused,
    restart,
    setPaused,
}) => {
    return (
        <div>
            <InputButton
                onClick={() => setPaused(!paused)}
                value={paused ? "▶" : "⏸"}
            />
            <InputButton
                onClick={() => {
                    restart();
                    setPaused(true);
                }}
                value="🔃"
            />
        </div>
    );
};
