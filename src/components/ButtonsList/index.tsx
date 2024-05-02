import React from "react";

import styles from "./styles.module.css";

export const ButtonsList = ({ children }: React.PropsWithChildren) => {
    return <div className={styles.buttonsList}>{children}</div>;
};
