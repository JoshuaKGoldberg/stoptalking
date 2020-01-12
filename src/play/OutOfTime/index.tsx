import React from "react";

export type OutOfTimeProps = {
    remaining: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ remaining }) => {
    if (remaining >= 0) {
        return null;
    }

    return <p>{-remaining / 1000} second(s) Out of time!</p>;
};
