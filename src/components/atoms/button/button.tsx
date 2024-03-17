import React, { ReactNode } from 'react';


interface ButtonProps {
    className: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button
            className={`w-full ${className} flex items-center justify-center`}>{children}</button>

    );
};

export default Button;

