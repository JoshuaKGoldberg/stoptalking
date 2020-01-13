import React from "react";

import { minuteMs, secondMs } from "../../time";
import styles from "./styles.module.css";
import { TimeUnit } from "./TimeUnit";

export type TimeDisplayOnChange = (time: number) => void;

export type TimeDisplayProps = {
    onChange?: TimeDisplayOnChange;
    value: number;
};

export const TimeDisplay: React.FC<TimeDisplayProps> = ({
    onChange,
    value,
}) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={styles.timeDisplay}>
            <TimeUnit
                label="Minute"
                onChange={
                    onChange
                        ? newMinutes =>
                              onChange(
                                  newMinutes * minuteMs + seconds * secondMs,
                              )
                        : undefined
                }
                value={minutes}
            />
            <TimeUnit
                label="Second"
                onChange={
                    onChange
                        ? newSeconds =>
                              onChange(
                                  minutes * minuteMs + newSeconds * secondMs,
                              )
                        : undefined
                }
                value={seconds}
            />
        </span>
    );
};
