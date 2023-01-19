import Image from "next/image";
import Link from "next/link";
import Main from "../components/Layout/Main";
import googleImg from "../public/logo/google.svg";
import githubImg from "../public/logo/github.svg";
import { Button, ButtonOutline } from "../components/Buttons";
import Wave from "react-wavify";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const Login = () => {
    //google handler function
    async function handleGoogleLogin() {
        signIn("google", { redirect: false, callbackUrl: "http://localhost:3000" });
    }
    //github handler function
    async function handleGithubLogin() {
        signIn("github", { redirect: false, callbackUrl: "http://localhost:3000" });
    }

    // Login using react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = async (data) => {
        const status = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
            callbackUrl: "/",
        });

        if (status.ok) router.push(status.url);
    };

    return (
        <Main title="Login to PluggedIn">
            <div className="section-gap bg-base-100 max-w-lg sm:mx-auto shadow-lg drop-shadow p-8 space-y-6 rounded-lg mx-8">
                <h2 className="text-center">Login to your account</h2>
                <form action="" onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block font-semibold">
                            Email
                        </label>
                        <input type="email" {...register("email", { required: true })} id="email" placeholder="Your Email" className={errors?.email ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors?.email?.type === "required" && "Email is required"}
                        </error>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Password
                        </label>
                        <input type="password" {...register("password", {
                            required: true
                        })} id="password" placeholder="Your Password" className={errors?.password ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors?.password?.type === "required" && "Password is required"}
                        </error>
                    </div>
                    <div className="pt-2">
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                    </div>
                </form>
                <p className="divider">Login with social accounts</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <ButtonOutline onClick={handleGoogleLogin}>
                        <div className="flex justify-center items-center gap-1">
                            <Image src={googleImg} alt="logo" width={20} />
                            Login with Google
                        </div>
                    </ButtonOutline>
                    <ButtonOutline onClick={handleGithubLogin}>
                        <div className="flex justify-center items-center gap-1">
                            <Image src={githubImg} alt="logo" width={22} />
                            Login with Github
                        </div>
                    </ButtonOutline>
                </div>
                <p className="text-center">
                    Don&apos;t have a account?
                    <Link href="/register" className="ml-2 underline text-indigo-900">
                        Register Now
                    </Link>
                </p>
            </div>
            <div className="-mt-20 md:-mt-16 -mb-14 sm:-mb-[72px] md:-mb-[88px] w-screen">
                <Wave
                    fill="#201172"
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 6,
                    }}
                />
            </div>
        </Main>
    );
};

export default Login;
