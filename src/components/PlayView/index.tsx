import React from "react";

import { BottomControls } from "../BottomControls";
import { HiddenHeading } from "../HiddenHeading";
import { Layout } from "../Layout";
import { TimeDisplay } from "../TimeDisplay";
import { TopControls } from "../TopControls";
import { useTimeControls } from "../../hooks/useTimeControls";
import { useSettings } from "../../useSettings";

export const PlayView = () => {
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
