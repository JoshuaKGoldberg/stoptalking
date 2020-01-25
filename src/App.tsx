import React from "react";

import { useConsentingAudio } from "./hooks/useConsentingAudio";
import { useSettings } from "./useSettings";
import { PlayView } from "./components/PlayView";

const App: React.FC = () => {
    const [settings, setSettings] = useSettings();
    const ConsentingAudioContext = useConsentingAudio();

    return (
        <ConsentingAudioContext>
            <PlayView settings={settings} setSettings={setSettings} />
        </ConsentingAudioContext>
    );
};

export default App;
