import React from "react";

import { BottomControls } from "./components/BottomControls/index.jsx";
import { HiddenHeading } from "./components/HiddenHeading/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import { TimeDisplay } from "./components/TimeDisplay/index.jsx";
import { TopControls } from "./components/TopControls/index.jsx";
import { useTimeControls } from "./hooks/useTimeControls.js";
import { useWakeLock } from "./hooks/useWakeLock.js";
import "./index.css";
import { useSettings } from "./useSettings.js";

const App = () => {
    const [settings, setSettings] = useSettings();
    const { paused, restart, setPaused } = useTimeControls({
        setSettings,
        settings,
    });

    useWakeLock({
        active: !paused,
        type: "screen",
    });

    return (
        <Layout paused={paused} settings={settings}>
            <HiddenHeading>Play</HiddenHeading>
            <TopControls
                paused={paused}
                restart={restart}
                setPaused={setPaused}
                settings={settings}
            />
            <TimeDisplay
                onTimeChange={
                    paused
                        ? (change) => {
                              setSettings({
                                  remaining: settings.remaining + change,
                                  time: settings.time + change,
                              });
                          }
                        : undefined
                }
                value={Math.max(0, settings.remaining)}
            />
            <BottomControls
                remaining={settings.remaining}
                settings={settings}
                toggleZen={() => {
                    setSettings({ zen: !settings.zen });
                }}
            />
        </Layout>
    );
};

export default App;
