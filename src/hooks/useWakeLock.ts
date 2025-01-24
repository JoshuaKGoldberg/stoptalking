import { useEffect } from "react";

export type UsedWakeLock =
    | UsedWakeLockFailure
    | UsedWakeLockPending
    | UsedWakeLockSuccess;

export type UsedWakeLockFailure = [undefined, DOMException];

export type UsedWakeLockPending = [undefined, undefined];
export type UsedWakeLockSuccess = [WakeLockSentinel, undefined];
export interface UseWakeLockSettings {
    active?: boolean;
    type: WakeLockType;
}

export const useWakeLock = ({
    active,
    type,
}: UseWakeLockSettings): UsedWakeLock => {
    let wakeLock: undefined | WakeLockSentinel;
    let error: DOMException | undefined;

    useEffect(() => {
        if (active) {
            navigator.wakeLock
                .request(type)
                .then((result) => {
                    wakeLock = result;
                })
                .catch((caught: unknown) => {
                    error = caught as DOMException;
                });
        } else {
            void wakeLock?.release();
            error = undefined;
            wakeLock = undefined;
        }
    }, [active]);

    return [wakeLock, error] as UsedWakeLock;
};
