import GithubButton from "@/components/molecules/github_button/github_button";
import GoogleButton from "@/components/molecules/google_button/google_button";


const SocialMediaLoginButtonGroup: React.FC = () => {
    return (
        <div className="flex space-x-3 justify-center items-center mt-4 w-full">
            <GoogleButton />
            <GithubButton />
        </div>);
}

export default SocialMediaLoginButtonGroup;