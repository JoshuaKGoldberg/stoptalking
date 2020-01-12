import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PlayView } from "./play/PlayView";
import { SettingsView } from "./settings/SettingsView";
import { useSettings } from "./settings/useSettings";

const App: React.FC = () => {
    const [settings, setSettings] = useSettings();

    return (
        <Router>
            <Switch>
                <Route path="/play">
                    <PlayView settings={settings} setSettings={setSettings} />
                </Route>
                <Route key={settings.remaining} path="/">
                    <SettingsView
                        settings={settings}
                        setSettings={setSettings}
                    />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
