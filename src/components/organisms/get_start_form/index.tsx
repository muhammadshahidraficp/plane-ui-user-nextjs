import Input from "@/components/atoms/Input/input";
import Button from "@/components/atoms/button/button";
import SignupLink from "@/components/molecules/signup_link";
import SocialMediaLoginButtonGroup from "../social_login_button/social_login_button";

const GetStartForm: React.FC = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Input className="font-inter" type='email' value='' placeholder="name@company.com" />
            <Button className="bg-blue-300 text-white mt-4 rounded border h-10"  >Continue</Button>
            <div className="flex items-center justify-center w-full pb-2 pt-1">
                <div className="w-full border-b border-gray-400"></div>
                <p className="px-4 text-xs text-gray-400 whitespace-nowrap">Or continue with</p>
                <div className="w-full border-b border-gray-400"></div>
            </div>
            <SocialMediaLoginButtonGroup />
            <SignupLink />
        </div>
    );
}

export default GetStartForm;