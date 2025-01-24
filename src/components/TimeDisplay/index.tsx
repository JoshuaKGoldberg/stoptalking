import cx from "classnames";
import React from "react";

import { minuteMs, secondMs } from "../../time.js";
import styles from "./styles.module.css";
import { OnTimeChange, TimeUnit } from "./TimeUnit/index.jsx";

export interface TimeDisplayProps {
    onTimeChange: OnTimeChange | undefined;
    value: number;
    zen: boolean | undefined;
}

export const TimeDisplay = ({ onTimeChange, value, zen }: TimeDisplayProps) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={cx(styles.timeDisplay, zen && styles.zen)}>
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
            {!zen && (
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
            )}
        </span>
    );
};
