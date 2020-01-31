import { renderHook } from "@testing-library/react-hooks";

import { useTestGlobals } from "./useGlobals";
import { useInterval } from "./useInterval";

describe(useInterval, () => {
    it("does not initially schedule setTimeout with the callback when not enabled", () => {
        const { clock } = useTestGlobals();
        const callback = jest.fn();

        renderHook(() => useInterval(callback, false));
        clock.tick(1000);

        expect(callback).not.toHaveBeenCalled();
    });

    it("initially schedules setTimeout with the callback when enabled", () => {
        const { clock } = useTestGlobals();
        const callback = jest.fn();

        renderHook(() => useInterval(callback, true));
        clock.tick(1000);

        expect(callback).toHaveBeenLastCalledWith(1000);
    });

    it("cancels scheduling callback when enabled becomes false", () => {
        const { clock } = useTestGlobals();
        const callback = jest.fn();
        const result = renderHook<boolean, void>((enabled = true) => useInterval(callback, enabled));

        result.rerender(false);
        clock.tick(1000);

        expect(callback).not.toHaveBeenCalled();
    });

    it("schedules callback when enabled becomes true", () => {
        const { clock } = useTestGlobals();
        const callback = jest.fn();
        const result = renderHook<boolean, void>((enabled = false) => useInterval(callback, enabled));

        result.rerender(true);
        clock.tick(1000);

        expect(callback).toHaveBeenLastCalledWith(1000);
    });
});
