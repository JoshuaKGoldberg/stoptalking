import { useState, useEffect } from "react";

import { BeeperNodes, createBeeper } from "./createBeeperNodes";

export type BeeperSettings = {
    audio: boolean;
    over: number;
};

export const useBeeper = ({ audio, over }: BeeperSettings) => {
    const [beeper, setBeeper] = useState<BeeperNodes>();

    useEffect(() => {
        if (over <= 0 || !audio) {
            if (beeper !== undefined) {
                beeper.stop();
                setBeeper(undefined);
            }

            return;
        }

        if (beeper === undefined) {
            setBeeper(createBeeper());
            return;
        }

        beeper.setVolume(Math.max(0, over / 100));
    }, [over, beeper, audio]);
};
