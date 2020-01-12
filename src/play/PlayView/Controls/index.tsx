import React from "react";

import { InputButton } from "../../../components/InputButton";
import styles from "./styles.module.css";

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
        <div className={styles.controls}>
            <InputButton
                onClick={() => setPaused(!paused)}
                value={paused ? "Play" : "Pause"}
            />
            <InputButton
                onClick={() => {
                    restart();
                    setPaused(true);
                }}
                value="Restart"
            />
        </div>
    );
};
