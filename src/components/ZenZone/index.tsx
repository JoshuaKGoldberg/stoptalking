import cx from "classnames";
import React from "react";

import styles from "./styles.module.css";

export type ZenZoneProps = {
    zen?: boolean;
};

export const ZenZone: React.FC<ZenZoneProps> = ({ children, zen }) => {
    return (
        <div className={cx(styles.zone, zen && styles.zoneZen)}>{children}</div>
    );
};
