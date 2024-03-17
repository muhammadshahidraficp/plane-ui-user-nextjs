// GoogleButton.tsx
import React from 'react';
import Button from "@/components/atoms/button/button";
import Image from 'next/image';
import AtomicLabel from '@/components/atoms/label/label';

const GithubButton: React.FC = () => {
    return (
        <Button className='flex items-center justify-center w-800 h-200 bg-white text-white font-bold py-2 px-4 rounded border border-d2e3fc'>
            <Image src="/git_logo.png" alt="Icon" width={20} height={20} className="mr-2" />
            <AtomicLabel className="text-gray-800 font-light font-inter text-sm" htmlFor={""} text='Sign-in with Github' />
        </Button>
    );
};

export default GithubButton;
