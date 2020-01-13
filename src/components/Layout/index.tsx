import cx from "classnames";
import React from "react";

import { Settings } from "../../settings/types";
import styles from "./styles.module.css";
import { WarningBackground } from "./WarningBackground";

export type LayoutProps = {
    settings?: Pick<Settings, "remaining" | "time">;
};

export const Layout: React.FC<LayoutProps> = ({ children, settings }) => {
    const percentage =
        settings === undefined ? undefined : settings.remaining / settings.time;

    return (
        <main className={cx(styles.layout)}>
            <WarningBackground percentage={percentage} />
            <div className={styles.layoutChildren}>{children}</div>
        </main>
    );
};
