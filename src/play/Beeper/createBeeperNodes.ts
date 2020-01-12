/**
 * @see https://stackoverflow.com/questions/30672781/web-audio-api-plays-beep-beep-beep-at-different-rate
 */
export const createBeeper = () => {
    const context = new AudioContext();

    // Defaults to A440Hz, sine wave
    const source = context.createOscillator();

    // Now let's create a modulator to turn beeps on and off
    const modulator = context.createOscillator();

    modulator.type = "square";

    const gain = context.createGain();
    const scaler = context.createGain();

    source.connect(gain);
    gain.connect(context.destination);

    modulator.connect(scaler); // Mod signal is [-1,1]
    scaler.gain.value = 0.5; // we need it to be [-0.5,0.5]
    gain.gain.value = 0.5; // then it's summed with 0.5, so [0,1]
    scaler.connect(gain.gain);

    // Start it up
    source.start(0);
    modulator.start(0);

    return { context, modulator, source };
};

export type BeeperNodes = ReturnType<typeof createBeeper>;
