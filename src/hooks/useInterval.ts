import { useEffect } from "react";

export type IntervalTick = (decrease: number) => void;

export const frequency = 1000;

export const useInterval = (callback: IntervalTick, enabled: boolean) => {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const handle = setTimeout(callback, frequency, frequency);

        return () => clearTimeout(handle);
    }, [clearTimeout, setTimeout, enabled, callback]);
};
