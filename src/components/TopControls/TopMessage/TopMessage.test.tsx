import { render } from "@testing-library/react";
import React from "react";

import { TopMessage, TopMessageProps } from ".";

const defaultSettings = {
    time: 0,
    remaining: 0,
};

const createDefaultProps = () => ({
    settings: defaultSettings,
});

const renderComponent = (overrides: Partial<TopMessageProps> = {}) => {
    const props = { ...createDefaultProps(), ...overrides };

    return render(<TopMessage {...props} />);
};

describe(TopMessage, () => {
    it("renders a pre-emptive message when not paused", () => {
        const rendered = renderComponent({
            paused: false,
            settings: {
                time: 2,
                remaining: 2,
            },
        });

        const text = rendered.asFragment().textContent;

        expect(text).toEqual("You have:");
    });

    it("renders a pre-emptive message when not all time is remaining", () => {
        const rendered = renderComponent({
            paused: true,
            settings: {
                time: 2,
                remaining: 1,
            },
        });

        const text = rendered.asFragment().textContent;

        expect(text).toEqual("You have:");
    });

    it("renders a pre-emptive message when paused and all time is remaining", () => {
        const rendered = renderComponent({
            paused: true,
            settings: {
                time: 2,
                remaining: 2,
            },
        });

        const text = rendered.asFragment().textContent;

        expect(text).toEqual("You will have:");
    });
});
