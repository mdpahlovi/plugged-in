import Link from "next/link";
import Image from "next/image";
import Main from "../components/Layout/Main";
import { Button, ButtonOutline } from "../components/Buttons";
import { BsGoogle, BsGithub } from "react-icons/bs";
import LoginGif from "../public/logo/animation.gif";
import { signIn } from "next-auth/react";
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
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    };

    return (
        <Main title="Login your account">
            <div className="section-gap grid lg:grid-cols-2">
                <div className="p-6 border">
                    <h1 className="mb-6">Log in to Account</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full" />
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full" />
                        <div>
                            <a>Forget Password?</a>
                        </div>
                        <Button className="w-full">Login</Button>
                    </form>
                    <p className="mt-5">
                        Don&apos;t have an account?
                        <Link href="/register" className="text-indigo-900 font-semibold">
                            Create Account
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    <div className="grid grid-cols-2 gap-4">
                        <ButtonOutline onClick={handleGoogleLogin}>
                            <div className="flex justify-center items-center gap-1.5">
                                Login with Google
                                <BsGoogle className="text-sm" />
                            </div>
                        </ButtonOutline>
                        <ButtonOutline onClick={handleGithubLogin}>
                            <div className="flex justify-center items-center gap-1.5">
                                Login with Github
                                <BsGithub />
                            </div>
                        </ButtonOutline>
                    </div>
                </div>
                <div className="">
                    <Image src={LoginGif} alt=""></Image>
                </div>
            </div>
        </Main>
    );
};

export default Login;
