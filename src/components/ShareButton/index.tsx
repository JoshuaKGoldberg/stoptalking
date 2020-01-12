import React, { useState } from "react";

import useGlobals from "../../hooks/useGlobals";
import { Settings } from "../../settings/types";
import { stringifySearch } from "../../utils/search";

export type ShareButtonOnChange = (minutes: number, seconds: number) => void;

export type ShareButtonProps = {
    settings: Settings;
};

export const ShareButton: React.FC<ShareButtonProps> = ({ settings }) => {
    const [copied, setCopied] = useState<string>();
    const globals = useGlobals();
    const stringifiedSettings = stringifySearch(settings);

    const copy = async () => {
        await navigator.clipboard.writeText(globals.location.toString());
        setCopied(stringifiedSettings);
    };

    return (
        <>
            <input onClick={copy} type="button" value="Copy Share URL" />
            {copied === stringifiedSettings && "✔"}
        </>
    );
};
