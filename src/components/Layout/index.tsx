import React from "react";

import styles from "./styles.module.css";

export const Layout: React.FC = ({ children }) => {
    return <main className={styles.layout}>{children}</main>;
};
