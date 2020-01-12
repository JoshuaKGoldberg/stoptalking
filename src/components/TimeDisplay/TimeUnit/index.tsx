import React from "react";

import styles from "./styles.module.css";

export type TimeInputProps = {
    label: string;
    onChange?: (newValue: number) => void;
    value: number;
};

export const TimeInput: React.FC<TimeInputProps> = ({
    label,
    onChange,
    value,
}) => {
    const labelId = `label-${label}`;

    return (
        <span className={styles.timeInput}>
            <input
                {...(onChange
                    ? {
                          onChange: event =>
                              onChange(event.target.valueAsNumber),
                      }
                    : { readOnly: true })}
                aria-labelledby={labelId}
                aria-live="assertive"
                type="number"
                min="0"
                value={value}
            />
            <span id={labelId}>{label}</span>
        </span>
    );
};
