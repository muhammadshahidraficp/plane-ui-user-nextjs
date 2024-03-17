import AtomicLabel from "@/components/atoms/label/label";
import { Metadata } from 'next'
import Logo from "@/components/molecules/logo/logo";
import GetStartForm from "@/components/organisms/get_start_form";

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Home() {

  return (
    <div className="bg-full bg-blue-50 min-h-screen">
      <Logo />
      <div className="flex justify-center p-12">
        <div className="pl-48 pr-48 pt-12 bg-white rounded-lg shadow-md text-center">
          <AtomicLabel className="text-black font-bold font-inter text-2xl block pb-2" htmlFor='welcome_back_text' text="Welcome back, let's get you on board" />
          <AtomicLabel className="text-gray-700 font-light font-inter text-xs block pb-6 pt-2" htmlFor='get_back_text' text="Get back to your issues, projects and workspaces." />
          <GetStartForm />
        </div>
      </div>
    </div>
  );
}
