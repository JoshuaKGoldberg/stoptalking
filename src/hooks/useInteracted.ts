import { useState, useEffect } from "react";

import useGlobals from "./useGlobals";

export const useInteracted = () => {
    const [interacted, setInteracted] = useState(false);
    const { window } = useGlobals();

    useEffect(() => {
        if (interacted) {
            return;
        }

        const enable = () => setInteracted(true);
        window.addEventListener("click", enable);

        return () => window.removeEventListener("click", enable);
    }, [interacted, window]);

    return interacted ? undefined : () => setInteracted(true);
};
