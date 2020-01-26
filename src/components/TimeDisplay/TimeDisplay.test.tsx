import { render } from "@testing-library/react";
import React from "react";

import { TimeDisplay } from ".";

const renderComponent = (value: number) => {
    return render(<TimeDisplay value={value} />);
};

describe(TimeDisplay, () => {
    it("renders minutes and seconds", () => {
        const rendered = renderComponent(601000);

        const text = rendered.baseElement.textContent;

        expect(text).toEqual("10Minutes1Second");
    });
});
