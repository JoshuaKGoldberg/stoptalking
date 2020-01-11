import { renderHook, act } from "@testing-library/react-hooks";

import { useTime } from "./useTime";
import { useTestGlobals } from "./useGlobals";

describe(useTime, () => {
    it("starts time at 0", () => {
        const { result } = renderHook(() => useTime());

        expect(result.current).toBe(0);
    });

    it("does not increment time before a second has passed", () => {
        const { clock } = useTestGlobals();
        const { rerender, result } = renderHook(() => useTime());

        act(() => {
            clock.tick(999);
            rerender();
        });

        expect(result.current).toBe(0);
    });

    it("increments time after a second has passed", () => {
        const { clock } = useTestGlobals();
        const { rerender, result } = renderHook(() => useTime());

        act(() => {
            clock.tick(1000);
            rerender();
        });

        expect(result.current).toBe(1000);
    });
});
