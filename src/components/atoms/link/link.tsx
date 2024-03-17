import Link from 'next/link';
import React from 'react';

interface AtomicLinkProps {
    href: string;
    className: string;
    text: string;
}

const AtomicLink: React.FC<AtomicLinkProps> = ({ href, text, className }) => {
    return (
        <Link href={href} className={`${className}`}>
            {text}
        </Link>
    );
}

export default AtomicLink;
