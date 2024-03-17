import React from 'react';
import AtomicLabel from '@/components/atoms/label/label';
import AtomicLink from '@/components/atoms/link/link';

const SignupLink: React.FC = () => {
    return (
        <div className="flex  items-center my-4 justify-center">
            <AtomicLabel htmlFor="signup_label" className="text-gray-800 text-xs  mr-2" text="Don't have an account?" />
            <AtomicLink href="/signup" className="text-blue-500 underline text-xs" text="Sign up" />
        </div>
    );
}

export default SignupLink;