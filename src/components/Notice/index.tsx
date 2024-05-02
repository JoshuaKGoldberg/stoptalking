import React from "react";

import styles from "./styles.module.css";

export const Notice = ({ children }: React.PropsWithChildren) => {
    return <div className={styles.notice}>{children}</div>;
};
