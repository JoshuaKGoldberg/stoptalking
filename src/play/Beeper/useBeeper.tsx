import { useState, useEffect } from "react";
import { BeeperNodes, createBeeper } from "./createBeeperNodes";

export type BeeperSettings = {
    annoyance: number;
    interacted: boolean;
};

export const useBeeper = ({ annoyance, interacted }: BeeperSettings) => {
    const [beeper, setBeeper] = useState<BeeperNodes>();

    useEffect(() => {
        if (annoyance === 0 || !interacted) {
            return;
        }

        if (beeper === undefined) {
            setBeeper(createBeeper());
            return;
        }

        // Todo: annoyance levels...
        beeper.modulator.frequency.value = 2;
    }, [annoyance, beeper, interacted]);
};
