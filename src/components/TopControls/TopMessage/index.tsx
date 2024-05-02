import React from "react";

import { Settings } from "../../../types.js";

export interface TopMessageProps {
    paused?: boolean;
    settings: Pick<Settings, "remaining" | "time">;
}

export const TopMessage = ({ paused, settings }: TopMessageProps) => {
    if (paused && settings.remaining === settings.time) {
        return <>You will have:</>;
    }

    return <>You have:</>;
};
