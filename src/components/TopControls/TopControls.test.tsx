import { render } from "@testing-library/react";
import React from "react";

import { TopControls, TopControlsProps } from ".";

const defaultSettings = {
    time: 0,
    remaining: 0,
};

const createDefaultProps = () => ({
    restart: jest.fn(),
    setPaused: jest.fn(),
    settings: defaultSettings,
    toggleZen: jest.fn(),
});

const renderComponent = (overrides: Partial<TopControlsProps> = {}) => {
    const props = { ...createDefaultProps(), ...overrides };
    const rendered = render(<TopControls {...props} />);

    return { props, rendered };
};

describe(TopControls, () => {
    it("sets paused to true when playing and the Pause button is pressed", async () => {
        const {
            props: { setPaused },
            rendered,
        } = renderComponent({
            paused: false,
        });

        const button = await rendered.findByText("Pause");
        button.click();

        expect(setPaused).toHaveBeenCalledWith(true);
    });

    it("sets paused to false when paused and the Go! button is pressed", async () => {
        const {
            props: { setPaused },
            rendered,
        } = renderComponent({
            paused: true,
        });

        const button = await rendered.findByText("Go!");
        button.click();

        expect(setPaused).toHaveBeenCalledWith(false);
    });

    it("sets restarts when the Restart button is pressed", async () => {
        const {
            props: { restart },
            rendered,
        } = renderComponent();

        const button = await rendered.findByText("Restart");
        button.click();

        expect(restart).toHaveBeenCalledTimes(1);
    });

    it("sets zen to true when not in zen and the Zen On button is pressed", async () => {
        const {
            props: { toggleZen },
            rendered,
        } = renderComponent({
            settings: {
                ...defaultSettings,
                zen: false,
            },
        });

        const button = await rendered.findByText("Zen On");
        button.click();

        expect(toggleZen).toHaveBeenCalledTimes(1);
    });

    it("sets zen to false when in zen and the Zen Off button is pressed", async () => {
        const {
            props: { toggleZen },
            rendered,
        } = renderComponent({
            settings: {
                ...defaultSettings,
                zen: true,
            },
        });

        const button = await rendered.findByText("Zen Off");
        button.click();

        expect(toggleZen).toHaveBeenCalledTimes(1);
    });
});
