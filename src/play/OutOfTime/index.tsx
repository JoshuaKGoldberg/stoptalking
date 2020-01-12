import React from "react";
import { useBeeper } from "../Beeper/useBeeper";

export type OutOfTimeProps = {
    interacted: boolean;
    remaining: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({
    interacted,
    remaining,
}) => {
    const annoyance = Math.min(0, remaining);
    useBeeper({ annoyance, interacted });

    if (annoyance === 0) {
        return null;
    }

    return <p>{-remaining / 1000} second(s) Out of time!</p>;
};
