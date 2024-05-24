import React from "react";

import { pluralize } from "../../../utils/plurals.js";
import styles from "./styles.module.css";

export type OnTimeChange = (increase: number) => void;

export interface TimeUnitProps {
    label: string;
    onEdit: OnTimeChange | undefined;
    value: number;
}

export const TimeUnit = ({ label, onEdit, value }: TimeUnitProps) => {
    const labelId = `label-${label}`;

    return (
        <span className={styles.timeUnit}>
            {onEdit ? (
                <input
                    className={styles.timeInput}
                    defaultValue={value}
                    onChange={(event) => {
                        onEdit(event.target.valueAsNumber - value);
                    }}
                    type="number"
                />
            ) : (
                <span
                    aria-labelledby={labelId}
                    aria-live="assertive"
                    className={styles.timeInput}
                >
                    {value}
                </span>
            )}
            <span id={labelId}>{pluralize(label, value)}</span>
        </span>
    );
};
