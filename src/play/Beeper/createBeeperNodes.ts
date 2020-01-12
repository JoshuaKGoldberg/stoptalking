/**
 * @see https://stackoverflow.com/questions/30672781/web-audio-api-plays-beep-beep-beep-at-different-rate
 */
export const createBeeper = () => {
    const context = new AudioContext();
    const source = context.createOscillator();
    const modulator = context.createOscillator();
    const gain = context.createGain();
    const scaler = context.createGain();

    modulator.frequency.value = 2;
    modulator.type = "square";
    scaler.gain.value = 0.5;
    gain.gain.value = 0.5;

    source.connect(gain);
    gain.connect(context.destination);
    modulator.connect(scaler);
    scaler.connect(gain.gain);

    // Start it up
    source.start(0);
    modulator.start(0);

    /**
     * @param volume Number in [0, 100].
     */
    const setVolume = (volume: number) => {
        const normalizedVolume = Math.min(1, volume / 500);

        gain.gain.value = scaler.gain.value = normalizedVolume;
    };

    const stop = () => {
        source.stop();
        modulator.stop();
    }

    return { setVolume, stop };
};

export type BeeperNodes = ReturnType<typeof createBeeper>;
