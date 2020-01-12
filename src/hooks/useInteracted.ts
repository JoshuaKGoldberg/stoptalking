import { useState } from "react";

export const useInteracted = () => {
    const [interacted, setInteracted] = useState(false);

    return interacted ? undefined : () => setInteracted(true);
};
