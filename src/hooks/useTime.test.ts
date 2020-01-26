import { renderHook, act } from "@testing-library/react-hooks";
import { useTime } from "./useTime";
import { useTestGlobals } from "./useGlobals";

describe(useTime, () => {
    it("defaults time to start time when first called", () => {
        const startTime = 2000;
        const rendered = renderHook(() => useTime({ paused: false, startTime }));

        expect(rendered.result.current[0]).toEqual(startTime);
    });

    it("increases time by a second when a second has passed while not paused", () => {
        const startTime = 2000;
        const rendered = renderHook(() => useTime({ paused: false, startTime }));
        const { clock } = useTestGlobals();

        act(() => {
            clock.tick(1000);
        });

        expect(rendered.result.current[0]).toEqual(startTime + 1000);
    });

    it("does not increase time by a second when a second has passed while paused", () => {
        const startTime = 2000;
        const rendered = renderHook(() => useTime({ paused: true, startTime }));
        const { clock } = useTestGlobals();

        act(() => {
            clock.tick(1000);
        });

        expect(rendered.result.current[0]).toEqual(startTime);
    });

    it("resets start time when reset is called", () => {
        const startTime = 2000;
        const rendered = renderHook(() => useTime({ paused: false, startTime }));
        const { clock } = useTestGlobals();

        act(() => {
            clock.tick(1000);
        });

        act(() => {
            rendered.result.current[1]();
        });

        expect(rendered.result.current[0]).toEqual(startTime);
    });
});
