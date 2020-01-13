import cx from "classnames";
import React from "react";

import stylesShared from "../stylesShared.module.css";
import styles from "./styles.module.css";

export const InputLink: React.FC<React.LinkHTMLAttributes<
    HTMLAnchorElement
>> = ({ children, className, ...props }) => {
    return (
        <a
            target="_blank"
            {...props}
            className={cx(stylesShared.input, styles.link, className)}
        >
            {children}
        </a>
    );
};
