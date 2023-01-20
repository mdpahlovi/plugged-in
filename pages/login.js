import Image from "next/image";
import Link from "next/link";
import Main from "../components/Layout/Main";
import googleImg from "../public/logo/google.svg";
import githubImg from "../public/logo/github.svg";
import { Button, ButtonOutline } from "../components/Buttons";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import useSetUserToDb from "../hooks/useSetUserToDb";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const { loading, setLoading, login, loginWithGoogle, loginWithGithub } = useAuth();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const { confirmation } = useSetUserToDb(loggedInUser);
    const router = useRouter();

    if (confirmation.acknowledged || confirmation.message) {
        toast.success("Logged In Successfully");
        router.push("/dashboard");
    }
    //google handler function
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(({ user }) => {
                setLoggedInUser(user);
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };
    //github handler function
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(({ user }) => {
                setLoggedInUser(user);
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };

    // Login using react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleLogin = async ({ email, password }) => {
        login(email, password)
            .then(({ user }) => {
                setLoggedInUser(user);
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
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
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            id="email"
                            placeholder="Your Email"
                            className={errors?.email ? "input input-error" : "input"}
                        />
                        <error className="text-red-600">{errors?.email?.type === "required" && "Email is required"}</error>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                            id="password"
                            placeholder="Your Password"
                            className={errors?.password ? "input input-error" : "input"}
                        />
                        <error className="text-red-600">{errors?.password?.type === "required" && "Password is required"}</error>
                    </div>
                    <p className="text-indigo-900 font-bold">Forgot Password ?</p>
                    <Button className="w-full" type="submit">
                        {loading ? "Loading..." : "Login"}
                    </Button>
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
                    <Link href="/register" className="ml-2 text-indigo-900 font-semibold underline">
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
