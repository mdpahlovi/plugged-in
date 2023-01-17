import Main from "../components/Layout/Main";
import { signIn } from "next-auth/react";
import Image from "next/image";
import login from "../public/logo/animation.gif";
import logo from "../public/logo/logo.png";
import { ButtonOutline } from "../components/Buttons";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useForm } from "react-hook-form";

const Login = () => {
    //google handler function
    async function handleGoogleLogin() {
        signIn("google", { callbackUrl: "https://pluggedin.vercel.app/login" });
        console.log("gh");
    }
    //github handler function
    async function handleGithubLogin() {
        signIn("github", { callbackUrl: "https://pluggedin.vercel.app/login" });
        console.log("gh");
    }

    // login using react-hook-form
    const { register, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <Main title="Login your account">
            <div className='grid grid-cols-1 lg:grid-cols-2 -mt-24'>
                <div className='h-[800px] flex justify-center items-center'>
                    <div className='w-96 p-7 border'>
                        <p className='text-center text-xl font-bold'>Log in to Account</p>
                        <div className='border-2 w-16 border-purple-700 ml-32 mb-2 inline-block'></div>
                        <form onSubmit={handleSubmit(handleLogin)}>

                            <div className="form-control w-full max-w-xs mt-4 mb-4 flex items-center">
                                <input type="text" {...register("email")} placeholder="Email " className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                                <label className="label"><span className="label-text"><a>Forget Password?</a></span></label>
                            </div>
                            <input className='btn btn-accent w-full' value="Login" type="submit" />
                        </form>
                        <p>Dont have an account? <a className='text-secondary'>Create Account</a></p>
                        <div className="divider">OR Sign up with</div>
                        <div className="flex gap-2">
                            <button className='btn btn-outline w-1/2 gap-2'>Google  <FcGoogle /></button>
                            <button className='btn btn-outline w-1/2 gap-2'>Github <BsGithub /></button>
                        </div>
                    </div>
                </div>
                <div className='mt-16 items-center justify-center mr-48 disabled:sm'>
                    <Image src={login} alt=''></Image>
                    <Image src={logo} alt='' width={280}></Image>
                </div>

            </div>
            {/* <div className="section-gap flex gap-6">
                <ButtonOutline onClick={handleGoogleLogin}>
                    <div className="flex gap-1">
                        <Image src={googleImg} alt="logo" width={20} />
                        Login with Google
                    </div>
                </ButtonOutline>

                <ButtonOutline onClick={handleGithubLogin}>
                    <div className="flex gap-1">
                        <Image src={githubImg} alt="logo" width={22} />
                        Login with Github
                    </div>
                </ButtonOutline>
            </div> */}
        </Main>
    );
};

export default Login;
