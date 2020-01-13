import React from "react";

import styles from "./styles.module.css";

export const Notice: React.FC = ({ children }) => {
    return <div className={styles.notice}>{children}</div>;
};
