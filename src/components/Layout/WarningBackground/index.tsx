import cx from "classnames";
import React from "react";

import styles from "./styles.module.css";

export type WarningBackgroundProps = {
    percentage?: number;
};

export const WarningBackground: React.FC<WarningBackgroundProps> = ({
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
            style={{ opacity: percentage === undefined ? 0 : 100 }}
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
