import React from "react";

export type TimeInputProps = {
    onChange: (newValue: number) => void;
    value: number;
};

export const TimeInput: React.FC<TimeInputProps> = ({ onChange, value }) => {
    return (
        <div>
            <input
                type="number"
                onChange={event => onChange(event.target.valueAsNumber)}
                value={value}
            />
            ms
        </div>
    );
};
