import React from "react";
import { useBeeper } from "../Beeper/useBeeper";

export type OutOfTimeProps = {
    interacted: boolean;
    over: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ interacted, over }) => {
    useBeeper({ over, interacted });

    if (over >= 15_000) {
        return null;
    }

    return (
        <p>{over >= 0 ? "Out of time" : `${-over / 1000} second(s) left`}!</p>
    );
};
