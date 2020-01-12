import React from "react";

import styles from "./styles.module.css";

export type TimeUnitProps = {
    label: string;
    onChange?: (newValue: number) => void;
    value: number;
};

export const TimeUnit: React.FC<TimeUnitProps> = ({
    label,
    onChange,
    value,
}) => {
    const labelId = `label-${label}`;

    return (
        <span className={styles.timeUnit}>
            <input
                {...(onChange
                    ? {
                          onChange: event =>
                              onChange(event.target.valueAsNumber),
                      }
                    : { readOnly: true })}
                aria-labelledby={labelId}
                aria-live="assertive"
                className={styles.timeInput}
                type="number"
                min="0"
                value={value}
            />
            <span id={labelId}>{label}</span>
        </span>
    );
};
