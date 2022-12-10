import React, { useState } from 'react';

interface Props {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: Props): JSX.Element => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
        onChange(checked);
    };

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => handleChange(e.target.checked)}
                />
                {label}
            </label>
        </>
    );
};

export default Checkbox;