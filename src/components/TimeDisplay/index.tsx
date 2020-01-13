import React from "react";

import { minuteMs, secondMs } from "../../time";
import styles from "./styles.module.css";
import { TimeUnit } from "./TimeUnit";

export type TimeDisplayProps = {
    value: number;
};

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ value }) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={styles.timeDisplay}>
            <TimeUnit label="Minute" value={minutes} />
            <TimeUnit label="Second" value={seconds} />
        </span>
    );
};
