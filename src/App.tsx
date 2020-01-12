import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSettings } from "./settings/useSettings";
import { SettingsView } from "./settings/SettingsView";

const App: React.FC = () => {
    const [settings, setSettings] = useSettings();

    return (
        <Router>
            <Switch>
                <Route path="/">
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
