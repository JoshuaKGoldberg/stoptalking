import React from "react";

import { minuteMs, secondMs } from "../../time.js";
import styles from "./styles.module.css";
import { OnTimeChange, TimeUnit } from "./TimeUnit/index.jsx";

export interface TimeDisplayProps {
    onTimeChange: OnTimeChange | undefined;
    value: number;
}

export const TimeDisplay = ({ onTimeChange, value }: TimeDisplayProps) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={styles.timeDisplay}>
            <TimeUnit
                label="Minute"
                onEdit={
                    onTimeChange &&
                    ((change) => {
                        onTimeChange(change * minuteMs);
                    })
                }
                value={minutes}
            />
            <TimeUnit
                label="Second"
                onEdit={
                    onTimeChange &&
                    ((change) => {
                        onTimeChange(change * secondMs);
                    })
                }
                value={seconds}
            />
        </span>
    );
};
