import { useState, useEffect } from "react";
import { BeeperNodes, createBeeper } from "./createBeeperNodes";

export type BeeperSettings = {
    interacted: boolean;
    over: number;
};

export const useBeeper = ({ interacted, over }: BeeperSettings) => {
    const [beeper, setBeeper] = useState<BeeperNodes>();

    useEffect(() => {
        if (over <= 0 || !interacted) {
            return;
        }

        if (beeper === undefined) {
            setBeeper(createBeeper());
            return;
        }

        if (over <= 2000) {
            beeper.setVolume(1000);
            return;
        }

        beeper.setVolume(Math.max(0, over / 100));
    }, [over, beeper, interacted]);
};
