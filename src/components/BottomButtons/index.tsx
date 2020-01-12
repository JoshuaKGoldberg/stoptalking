import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { Settings } from "../../settings/types";
import { SetSettings } from "../../settings/useSettings";
import { ShareButton } from "../ShareButton";

export type BottomButtonsProps = {
    setSettings: SetSettings;
    settings: Settings;
    toText: string;
    toUri: string;
};

export const BottomButtons: React.FC<BottomButtonsProps> = ({
    setSettings,
    settings,
    toText,
    toUri,
}) => {
    const history = useHistory();

    const navigate = useCallback(() => {
        const newSearch = setSettings({
            remaining: settings.time,
        });

        history.push(toUri + newSearch);
    }, [history, setSettings, settings.time, toUri]);

    return (
        <nav>
            <input onClick={navigate} type="button" value={toText} />
            <ShareButton settings={settings} />
        </nav>
    );
};
