import cx from "classnames";
import React from "react";

import { Settings } from "../../types.js";
import { WarningBackground } from "./WarningBackground/index.jsx";
import styles from "./styles.module.css";

export interface LayoutProps {
    children: React.ReactNode;
    paused?: boolean;
    settings?: Pick<Settings, "remaining" | "time">;
}

export const Layout = ({ children, paused, settings }: LayoutProps) => {
    const percentage =
        settings === undefined ? undefined : settings.remaining / settings.time;

    return (
        <main className={cx(styles.layout)}>
            <WarningBackground paused={paused} percentage={percentage} />
            <div className={styles.layoutChildren}>{children}</div>
        </main>
    );
};
