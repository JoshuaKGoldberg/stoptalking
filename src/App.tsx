import React from "react";

import { useConsentingAudio } from "./hooks/useConsentingAudio";
import { PlayView } from "./components/PlayView";

const App: React.FC = () => {
    const ConsentingAudioContext = useConsentingAudio();

    return (
        <ConsentingAudioContext>
            <PlayView />
        </ConsentingAudioContext>
    );
};

export default App;
