import React from "react";

import styles from "./styles.module.css";
import { minuteMs, secondMs } from "../../time";

export type TimeDisplayOnChange = (minutes: number, seconds: number) => void;

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
            <input
                {...(onChange
                    ? {
                          onChange: event =>
                              onChange(
                                  event.target.valueAsNumber * minuteMs,
                                  seconds * secondMs,
                              ),
                      }
                    : { readOnly: true })}
                aria-label="Minutes"
                type="number"
                value={minutes}
            />
            minutes
            <input
                {...(onChange
                    ? {
                          onChange: event =>
                              onChange(
                                  minutes * minuteMs,
                                  event.target.valueAsNumber * secondMs,
                              ),
                      }
                    : { readOnly: true })}
                aria-label="Seconds"
                type="number"
                value={seconds}
            />
            seconds
        </span>
    );
};
