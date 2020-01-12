import React from "react";

import { minuteMs, secondMs } from "../../time";
import styles from "./styles.module.css";

export type TimeInputProps = {
    onChange: (newValue: number) => void;
    value: number;
};

export const TimeInput: React.FC<TimeInputProps> = ({ onChange, value }) => {
    const minutes = Math.floor(value / minuteMs);
    const seconds = Math.floor((value - minutes * minuteMs) / secondMs);

    return (
        <span className={styles.timeInput}>
            <input
                onChange={event =>
                    onChange(
                        event.target.valueAsNumber * minuteMs +
                            seconds * secondMs,
                    )
                }
                type="number"
                value={minutes}
            />
            minutes
            <input
                onChange={event =>
                    onChange(
                        minutes * minuteMs +
                            event.target.valueAsNumber * secondMs,
                    )
                }
                type="number"
                value={seconds}
            />
            seconds
        </span>
    );
};
