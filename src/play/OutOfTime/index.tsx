import React from "react";

import { secondMs } from "../../time";
import { useBeeper } from "../Beeper/useBeeper";
import styles from "./styles.module.css";

export type OutOfTimeProps = {
    audio?: boolean;
    over: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ audio, over }) => {
    const seconds = -over / secondMs;
    useBeeper({ over, audio });

    if (seconds > 0) {
        return null;
    }

    return <p className={styles.notice}>Out of time!</p>;
};
