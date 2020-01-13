import React from "react";

import styles from "./styles.module.css";

export const ButtonsList: React.FC = ({ children }) => {
    return <div className={styles.buttonsList}>{children}</div>;
};
