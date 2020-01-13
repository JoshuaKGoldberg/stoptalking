import cx from "classnames";
import React from "react";

import stylesShared from "../stylesShared.module.css";

export const InputButton: React.FC<React.InputHTMLAttributes<
    HTMLInputElement
>> = ({ className, ...props }) => {
    return (
        <input
            type="button"
            {...props}
            className={cx(stylesShared.input, className)}
        />
    );
};
