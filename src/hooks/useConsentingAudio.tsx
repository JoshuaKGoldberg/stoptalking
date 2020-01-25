import React, { useState, useCallback, useMemo } from "react";

export type ConsentingAudio = {
    audio: boolean;
    toggleAudio: () => void;
};

export const ConsentingAudioContext = React.createContext<ConsentingAudio>(
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    null!,
);

export const useConsentingAudio = () => {
    const [audio, setAudio] = useState(false);
    const toggleAudio = useCallback(() => setAudio(!audio), [audio]);

    const context = useMemo(() => {
        const component: React.FC = ({ children }) => (
            <ConsentingAudioContext.Provider value={{ audio, toggleAudio }}>
                {children}
            </ConsentingAudioContext.Provider>
        );

        return component;
    }, [audio, toggleAudio]);

    return context;
};
