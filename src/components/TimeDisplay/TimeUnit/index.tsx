import React from "react";

import { pluralize } from "../../../utils/plurals";
import styles from "./styles.module.css";

export type TimeUnitProps = {
    label: string;
    value: number;
};

export const TimeUnit: React.FC<TimeUnitProps> = ({ label, value }) => {
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
