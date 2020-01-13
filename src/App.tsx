import React from "react";

import { useConsentingAudio } from "./hooks/useConsentingAudio";
import { useSettings } from "./useSettings";
import { PlayView } from "./play/PlayView";

const App: React.FC = () => {
    const [settings, setSettings] = useSettings();
    const [audio, toggleAudio] = useConsentingAudio();

    return (
        <PlayView
            audio={audio}
            toggleAudio={toggleAudio}
            settings={settings}
            setSettings={setSettings}
        />
    );
};

export default App;
