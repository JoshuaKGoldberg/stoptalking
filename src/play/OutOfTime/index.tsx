import React from "react";

import { useBeeper } from "../Beeper/useBeeper";
import styles from "./styles.module.css";

export type OutOfTimeProps = {
    audio?: boolean;
    over: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ audio, over }) => {
    useBeeper({ over, audio });

    return (
        <p className={styles.notice}>
            {over >= 0 ? "Out of time" : `${-over / 1000} second(s) left`}!
        </p>
    );
};
