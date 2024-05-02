import React from "react";

import { pluralize } from "../../../utils/plurals.js";
import styles from "./styles.module.css";

export interface TimeUnitProps {
    label: string;
    value: number;
}

export const TimeUnit = ({ label, value }: TimeUnitProps) => {
    const labelId = `label-${label}`;

    return (
        <span className={styles.timeUnit}>
            <span
                aria-labelledby={labelId}
                aria-live="assertive"
                className={styles.timeInput}
            >
                {value}
            </span>
            <span id={labelId}>{pluralize(label, value)}</span>
        </span>
    );
};
