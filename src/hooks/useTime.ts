import { useState, useEffect } from "react";

import useGlobals from "./useGlobals";

export const frequency = 1000;

export const useTime = () => {
    const { clearInterval, setInterval } = useGlobals();
    const [time, setTime] = useState(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setTime(time + frequency);
        }, frequency);

        return () => clearInterval(handle);
    }, [clearInterval, time, setInterval, setTime]);

    return time;
};
