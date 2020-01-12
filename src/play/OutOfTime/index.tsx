import React from "react";

export type OutOfTimeProps = {
    talkTimeRemaining: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ talkTimeRemaining }) => {
    if (talkTimeRemaining >= 0) {
        return null;
    }

    return <p>{-talkTimeRemaining / 1000} second(s) Out of time!</p>;
};
