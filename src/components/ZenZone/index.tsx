import cx from "classnames";
import React from "react";

import styles from "./styles.module.css";

export interface ZenZoneProps {
    children: React.ReactNode;
    zen?: boolean;
}

export const ZenZone = ({ children, zen }: ZenZoneProps) => {
    return (
        <div className={cx(styles.zone, zen && styles.zoneZen)}>{children}</div>
    );
};
