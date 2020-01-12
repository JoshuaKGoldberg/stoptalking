/* eslint-disable no-restricted-globals */
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
    location: Location;
    sessionStorage: Storage;
    setInterval: SetTimer;
    setTimeout: SetTimer;
    window: Pick<Window, "addEventListener" | "removeEventListener">;
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
            location,
            sessionStorage,
            setInterval,
            setTimeout,
            window,
        };
    }

    const clock = createClock<BrowserClock>();

    const createStubLocation = () => {
        return {
            assign: jest.fn(),
            toString: () => "",
        };
    };

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

    const createStubListeners = () => {
        const eventListeners = new Map<string, jest.Mock[]>();

        return {
            addEventListener: jest.fn((event: string, listener: jest.Mock) => {
                const events = eventListeners.get(event);
                if (events === undefined) {
                    eventListeners.set(event, [listener]);
                } else {
                    events.push(listener);
                }
            }),
            eventListeners,
            removeEventListener: jest.fn(
                (event: string, listener: jest.Mock) => {
                    const events = eventListeners.get(event);
                    if (events === undefined) {
                        return;
                    }

                    const indexOf = events.indexOf(listener);
                    if (indexOf !== -1) {
                        events.splice(indexOf, 1);
                    }
                },
            ),
        };
    };

    return {
        ...clock,
        clock,
        localStorage: createStubStorage(),
        location: createStubLocation(),
        sessionStorage: createStubStorage(),
        window: createStubListeners(),
    };
};

const globals = createGlobals();

export const useGlobals = () => globals as Globals;
export const useTestGlobals = () => useGlobals() as TestGlobals;

export default useGlobals;
