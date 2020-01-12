import React, { useState } from "react";

import useGlobals from "../../hooks/useGlobals";
import { Settings } from "../../settings/types";
import { stringifySearch } from "../../utils/search";
import { InputButton } from "../InputButton";

export type ShareButtonOnChange = (minutes: number, seconds: number) => void;

export type ShareButtonProps = {
    settings: Settings;
};

export const ShareButton: React.FC<ShareButtonProps> = ({ settings }) => {
    const [copied, setCopied] = useState<string>();
    const globals = useGlobals();
    const stringifiedSettings = stringifySearch({
        ...settings,
        remaining: settings.time,
    });

    const copy = async () => {
        await navigator.clipboard.writeText(globals.location.toString());
        setCopied(stringifiedSettings);
    };

    const value = copied === stringifiedSettings ? "Copied" : "Copy URL";

    return <InputButton onClick={copy} value={value} />;
};
