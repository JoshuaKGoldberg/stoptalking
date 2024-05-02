import React from "react";

import { minuteMs, secondMs } from "../../time.js";
import { TimeUnit } from "./TimeUnit/index.jsx";
import styles from "./styles.module.css";

export interface TimeDisplayProps {
    value: number;
}

export const TimeDisplay = ({ value }: TimeDisplayProps) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={styles.timeDisplay}>
            <TimeUnit label="Minute" value={minutes} />
            <TimeUnit label="Second" value={seconds} />
        </span>
    );
};
