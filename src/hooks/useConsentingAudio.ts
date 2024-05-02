import { useCallback, useState } from "react";

export interface ConsentingAudio {
    audio: boolean;
    toggleAudio: () => void;
}

export const useConsentingAudio = () => {
    const [audio, setAudio] = useState(false);
    const toggleAudio = useCallback(() => setAudio(!audio), [audio]);

    return [audio, toggleAudio] as const;
};
