import React from "react";

import { Settings } from "../../../types";

export type TopMessageProps = {
    paused?: boolean;
    settings: Pick<Settings, "remaining" | "time">;
};

export const TopMessage: React.FC<TopMessageProps> = ({ paused, settings }) => {
    if (paused && settings.remaining === settings.time) {
        return <>You will have:</>;
    }

    return <>You have:</>;
};
