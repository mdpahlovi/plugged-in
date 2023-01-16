import Main from "../components/Layout/Main";
import { signIn, signOut } from "next-auth/react"
import Button from "../components/Button/Button";
import Image from "next/image";
import googleImg from '../public/logo/icons8-google.svg'
import githubImg from '../public/logo/icons8-github.svg'

const Login = () => {
//google handler function
    async function handleGoogleLogin() {
        signIn('google', { callbackUrl: "https://pluggedin.vercel.app/login" })
        console.log('gh');
    }
    //github handler function
    async function handleGithubLogin() {
        signIn('github', { callbackUrl: "https://pluggedin.vercel.app/login" })
        console.log('gh');
    }

    return <Main title="Login your account">
        <div className='mt-10'>
        <button className=" flex gap-2 px-6 py-3 text-white transition-all duration-300 rounded-full outline bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  hover:from-[#816EEF] hover:via-[#201172] hover:to-[#2F0D77] md:w-auto" onClick={handleGoogleLogin}>
                Login with Google<Image src={googleImg} alt="logo" width={20} />
            </button>
            

            <button className="mt-5 flex gap-2 px-6 py-3 text-white transition-all duration-300 rounded-full outline bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF]  hover:from-[#816EEF] hover:via-[#201172] hover:to-[#2F0D77] md:w-auto" onClick={handleGithubLogin}>
                Login with Github<Image src={githubImg} alt="logo" width={22} />
                    </button>
       </div>
    </Main>;
};

export default Login;
