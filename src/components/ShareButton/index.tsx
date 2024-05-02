import React, { useState } from "react";

import { Settings } from "../../types.js";
import { stringifySearch } from "../../utils/search.js";
import { InputButton } from "../Inputs/InputButton/index.jsx";

export interface ShareButtonProps {
    settings: Settings;
}

export const ShareButton = ({ settings }: ShareButtonProps) => {
    const [copied, setCopied] = useState<string>();
    const stringifiedSettings = stringifySearch({
        ...settings,
        remaining: settings.time,
    });

    const copy = async () => {
        await navigator.clipboard.writeText(location.toString());
        setCopied(stringifiedSettings);
    };

    const value = copied === stringifiedSettings ? "Copied" : "Copy URL";

    return <InputButton onClick={copy} value={value} />;
};
