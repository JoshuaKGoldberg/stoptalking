import cx from "classnames";
import React from "react";

import styles from "./styles.module.css";

export type WarningBackgroundProps = {
    paused?: boolean;
    percentage?: number;
};

export const WarningBackground: React.FC<WarningBackgroundProps> = ({
    paused,
    percentage,
}) => {
    const opacity =
        percentage === undefined ? 0 : Math.pow(0.25, percentage * 4);

    return (
        <div
            className={cx(
                styles.background,
                percentage !== undefined && styles.active,
            )}
            style={{ opacity: paused || percentage === undefined ? 0 : 100 }}
        >
            <div className={styles.warning} style={{ opacity }} />
            <div className={styles.error} style={{ opacity: opacity - 1 }} />
            <div
                className={styles.errorGlow}
                style={{ opacity: opacity >= 1 ? 1 : 0 }}
            />
        </div>
    );
};
