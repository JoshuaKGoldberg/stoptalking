import React from "react";

import styles from "./styles.module.css";

export const HiddenHeading = ({ children }: React.PropsWithChildren) => {
    return <h1 className={styles.hiddenHeading}>{children}</h1>;
};
