import React from "react";

import { BottomControls } from "./components/BottomControls";
import { HiddenHeading } from "./components/HiddenHeading";
import { Layout } from "./components/Layout";
import { TopControls } from "./components/TopControls";
import { TimeDisplay } from "./components/TimeDisplay";
import { useTimeControls } from "./hooks/useTimeControls";
import { useSettings } from "./useSettings";

const App: React.FC = () => {
    const [settings, setSettings] = useSettings();
    const { paused, restart, setPaused } = useTimeControls({
        settings,
        setSettings,
    });

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
