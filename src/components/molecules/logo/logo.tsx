import React from 'react';
import Image from 'next/image';
import AtomicLabel from '@/components/atoms/label/label';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center justify-start pt-20 pl-20">
            <Image src="/plane.png" alt="Icon" width={25} height={25} className="mr-2" />
            <AtomicLabel className="text-black font-bold font-inter text-2xl" htmlFor='plane_logo_text' text='Plane' />
        </div>
    );
}

export default Logo;