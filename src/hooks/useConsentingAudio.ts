import { useState, useCallback } from "react";

export const useConsentingAudio = () => {
    const [audio, setAudio] = useState(false);
    const toggleAudio = useCallback(() => setAudio(!audio), [audio]);

    return [audio, toggleAudio] as const;
};
