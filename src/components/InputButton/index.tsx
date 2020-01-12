// import cx from 'classnames';
import React from "react";

import styles from "./styles.module.css";

export const InputButton: React.FC<React.InputHTMLAttributes<
    HTMLInputElement
>> = ({ className, ...props }) => {
    return (
        <input
            type="button"
            {...props}
            className={[className, styles.inputButton]
                .filter(Boolean)
                .join(" ")}
        />
    );
};
