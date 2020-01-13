import cx from "classnames";
import React from "react";

import { Settings } from "../../types";
import styles from "./styles.module.css";
import { WarningBackground } from "./WarningBackground";

export type LayoutProps = {
    paused?: boolean;
    settings?: Pick<Settings, "remaining" | "time">;
};

export const Layout: React.FC<LayoutProps> = ({
    children,
    paused,
    settings,
}) => {
    const percentage =
        settings === undefined ? undefined : settings.remaining / settings.time;

    return (
        <main className={cx(styles.layout)}>
            <WarningBackground paused={paused} percentage={percentage} />
            <div className={styles.layoutChildren}>{children}</div>
        </main>
    );
};
