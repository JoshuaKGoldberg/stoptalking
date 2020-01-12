import { useState, useEffect } from "react";

import useGlobals from "./useGlobals";

export const frequency = 1000;

export type UseTimeSettings = {
    startTime?: number;
};

export const useTime = ({ startTime = 0 } = {}) => {
    const { clearInterval, setInterval } = useGlobals();
    const [time, setTime] = useState(startTime);

    useEffect(() => {
        const handle = setInterval(() => {
            setTime(time + frequency);
        }, frequency);

        return () => clearInterval(handle);
    }, [clearInterval, time, setInterval, setTime]);

    return time;
};
