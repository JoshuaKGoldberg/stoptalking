import { useMemo, useEffect, useState } from "react";
import NoSleep from 'nosleep.js';

export const useNoSleep = (enabled: boolean) => {
    const [alreadyEnabled, setAlreadyEnabled] = useState(false);
    const noSleep = useMemo(() => new NoSleep(), []);

    useEffect(() => {
        if (alreadyEnabled === enabled) {
            return;
        }

        if (alreadyEnabled) {
            noSleep.disable();
        } else {
            noSleep.enable();
        }

        setAlreadyEnabled(enabled);
    }, [alreadyEnabled, enabled, noSleep]);
};
