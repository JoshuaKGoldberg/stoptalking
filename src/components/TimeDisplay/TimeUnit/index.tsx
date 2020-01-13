import React from "react";

import styles from "./styles.module.css";
import { pluralize } from "../../../utils/plurals";

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
    const [Component, props] = onChange
        ? ([
              "input",
              {
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(event.target.valueAsNumber),
                  min: 0,
                  type: "number",
                  value,
              },
          ] as const)
        : (["span", { children: value }] as const);

    return (
        <span className={styles.timeUnit}>
            <Component
                {...props}
                aria-labelledby={labelId}
                aria-live="assertive"
                className={styles.timeInput}
            />
            <span id={labelId}>{pluralize(label, value)}</span>
        </span>
    );
};
