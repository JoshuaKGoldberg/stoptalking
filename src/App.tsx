import React from "react";
import { useNoSleep } from "use-no-sleep";

import { BottomControls } from "./components/BottomControls/index.jsx";
import { HiddenHeading } from "./components/HiddenHeading/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import { TimeDisplay } from "./components/TimeDisplay/index.jsx";
import { TopControls } from "./components/TopControls/index.jsx";
import { useTimeControls } from "./hooks/useTimeControls.js";
import "./index.css";
import { useSettings } from "./useSettings.js";

const App = () => {
    const [settings, setSettings] = useSettings();
    const { paused, restart, setPaused } = useTimeControls({
        setSettings,
        settings,
    });
    useNoSleep(!paused);

    return (
        <Layout paused={paused} settings={settings}>
            <HiddenHeading>Play</HiddenHeading>
            <TopControls
                paused={paused}
                restart={restart}
                setPaused={setPaused}
                settings={settings}
                toggleZen={() => setSettings({ zen: !settings.zen })}
            />
            <TimeDisplay value={Math.max(0, settings.remaining)} />
            <BottomControls
                remaining={settings.remaining}
                settings={settings}
            />
        </Layout>
    );
};

export default App;
