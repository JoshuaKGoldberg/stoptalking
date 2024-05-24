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

    const commonProps = {
        "aria-labelledby": labelId,
        className: styles.timeInput,
    };

    return (
        <span className={styles.timeUnit}>
            {onEdit ? (
                <input
                    {...commonProps}
                    defaultValue={value}
                    onChange={(event) => {
                        onEdit(event.target.valueAsNumber - value);
                    }}
                    type="number"
                />
            ) : (
                <span {...commonProps} aria-live="assertive">
                    {value}
                </span>
            )}
            <span id={labelId}>{pluralize(label, value)}</span>
        </span>
    );
};
