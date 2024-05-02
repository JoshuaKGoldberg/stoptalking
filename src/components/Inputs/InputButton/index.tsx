import cx from "classnames";
import React from "react";

import stylesShared from "../stylesShared.module.css";

export const InputButton = ({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            type="button"
            {...props}
            className={cx(stylesShared.input, className)}
        />
    );
};
