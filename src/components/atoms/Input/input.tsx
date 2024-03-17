// components/atoms/Input/Input.tsx
import React, { ChangeEvent, ChangeEventHandler } from 'react';

interface InputProps {
    className: string;
    type: string;
    placeholder?: string;
    value: string;
}

const Input: React.FC<InputProps> = ({ className, type, placeholder, value, }) => {
    return (
        <input
            className={`w-full appearance-none border rounded-md border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            readOnly
        />
    );
};

export default Input;
