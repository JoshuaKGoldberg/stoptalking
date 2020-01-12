import { useMemo } from "react";

export const useQuery = () => {
    return useMemo(
        () =>
            Object.fromEntries(
                new URLSearchParams(window.location.search).entries(),
            ),
        [],
    );
};

export type UsedQuery = ReturnType<typeof useQuery>;
