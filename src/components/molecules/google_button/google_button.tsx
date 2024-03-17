// GoogleButton.tsx
import React from 'react';
import Button from "@/components/atoms/button/button";
import Image from 'next/image';
import AtomicLabel from '@/components/atoms/label/label';

const GoogleButton: React.FC = () => {
    return (
        <Button className='flex items-center w-800 h-200 text-white font-bold py-2 px-4 rounded border border-d2e3fc'>
            <Image src="/g_logo.png" alt="Icon" width={20} height={20} className="pr-1" />
            <AtomicLabel className="text-gray-800 font-light font-inter text-sm" htmlFor={""} text='Sign in with Google' />
        </Button>
    );
};

export default GoogleButton;
