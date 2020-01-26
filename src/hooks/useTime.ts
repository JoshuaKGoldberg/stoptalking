import { useState, useEffect, useCallback } from "react";

import useGlobals from "./useGlobals";

export const frequency = 1000;

export type UseTimeSettings = {
    paused?: boolean;
    startTime: number;
};

export const useTime = ({ paused, startTime }: UseTimeSettings) => {
    const { clearInterval, setInterval } = useGlobals();
    const [time, setTime] = useState(startTime);

    useEffect(() => {
        const handle = setInterval(() => {
            if (!paused) {
                setTime(time + frequency);
            }
        }, frequency);

        return () => clearInterval(handle);
    }, [clearInterval, time, setInterval, setTime, paused]);

    const resetTime = useCallback(() => {
        setTime(startTime);
    }, [startTime]);

    return [time, resetTime] as const;
};
