import React from "react";

import { useBeeper } from "../Beeper/useBeeper";

export type OutOfTimeProps = {
    audio: boolean;
    over: number;
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ audio, over }) => {
    useBeeper({ over, audio });

    if (over <= 15_000) {
        return null;
    }

    return (
        <p>{over >= 0 ? "Out of time" : `${-over / 1000} second(s) left`}!</p>
    );
};
