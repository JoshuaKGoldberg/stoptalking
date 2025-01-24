import cx from "classnames";
import React from "react";

import { minuteMs, secondMs } from "../../time.js";
import { OnTimeChange, TimeUnit } from "./TimeUnit/index.jsx";
import styles from "./styles.module.css";

export interface TimeDisplayProps {
    zen: boolean | undefined;
    onTimeChange: OnTimeChange | undefined;
    value: number;
}

export const TimeDisplay = ({ zen, onTimeChange, value }: TimeDisplayProps) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={cx(styles.timeDisplay, zen && styles.zen)}>
            <TimeUnit
                label="Minute"
                onEdit={
                    onTimeChange &&
                    ((change) => onTimeChange(change * minuteMs))
                }
                value={minutes}
            />
            {!zen && (
                <TimeUnit
                    label="Second"
                    onEdit={
                        onTimeChange &&
                        ((change) => onTimeChange(change * secondMs))
                    }
                    value={seconds}
                />
            )}
        </span>
    );
};
