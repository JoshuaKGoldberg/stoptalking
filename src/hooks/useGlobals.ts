/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserClock, createClock } from "lolex";

export type SetTimer = <Args extends any[]>(
    callback: (...args: Args) => void,
    delay?: number,
    ...args: Args
) => unknown;

export type Globals = {
    clearInterval: (handle: unknown) => void;
    clearTimeout: (handle: unknown) => void;
    localStorage: Storage;
    sessionStorage: Storage;
    setInterval: SetTimer;
    setTimeout: SetTimer;
};

export type TestGlobals = Globals &
    jest.Mocked<Globals> & {
        clock: BrowserClock;
    };

export const createGlobals = () => {
    if (process.env.NODE_ENV !== "test") {
        return {
            clearInterval,
            clearTimeout,
            localStorage,
            sessionStorage,
            setInterval,
            setTimeout,
        };
    }

    const clock = createClock<BrowserClock>();

    const createStubStorage = () => {
        const items = new Map();

        return {
            clear: jest.fn(() => items.clear()),
            getItem: jest.fn((key: string) => items.get(key)),
            key: jest.fn((index: number) => Array.from(items.keys())[index]),
            get length() {
                return items.size;
            },
            removeItem: jest.fn((key: string) => items.delete(key)),
            setItem: jest.fn((key: string, value: unknown) =>
                items.set(key, value),
            ),
        };
    };

    return {
        ...clock,
        clock,
        localStorage: createStubStorage(),
        sessionStorage: createStubStorage(),
    };
};

const globals = createGlobals();

export const useGlobals = () => globals as Globals;
export const useTestGlobals = () => useGlobals() as TestGlobals;

export default useGlobals;
