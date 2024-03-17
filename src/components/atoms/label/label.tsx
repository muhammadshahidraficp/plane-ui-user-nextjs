import React from 'react';

interface AtomicLabelProps {
    htmlFor: string;
    className: string;
    text: string;
}


const AtomicLabel: React.FC<AtomicLabelProps> = ({ htmlFor, className, text }) => {
    return (
        <label htmlFor={htmlFor} className={` ${className}`}>
            {text}
        </label>
    );
};

export default AtomicLabel;
