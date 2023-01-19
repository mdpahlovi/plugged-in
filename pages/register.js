import Link from "next/link";
import Main from "../components/Layout/Main";
import { Button } from "../components/Buttons";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useSetUserToDb from "../hooks/useSetUserToDb";
import { useState } from "react";

const Registration = () => {
    const { loading, setLoading, createUser, updateUserProfile } = useAuth();
    const router = useRouter();
    const [createdUser, setCreatedUser] = useState("");
    const { confirmation } = useSetUserToDb(createdUser);

    if (confirmation.acknowledged) {
        router.push("/dashboard");
        toast.success("User Created Successfully");
    }

    // Registration using react-hook-form
    const { register, handleSubmit } = useForm();
    const handleRegistration = (userInfo) => {
        createUser(userInfo.email, userInfo.password)
            .then(({ user }) => {
                updateUserProfile(userInfo.name)
                    .then(() => {
                        setCreatedUser(user);
                    })
                    .catch(({ message }) => {
                        toast.error(message);
                        setLoading(false);
                    });
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };

    return (
        <Main title="Registration to PluggedIn">
            <div className="section-gap bg-base-100 max-w-lg sm:mx-auto shadow-lg drop-shadow p-8 space-y-6 rounded-lg mx-8">
                <h2 className="text-center">Create your account</h2>
                <form action="" onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block font-semibold">
                            Full Name
                        </label>
                        <input type="text" {...register("name")} id="name" placeholder="Full Name" className="input" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block font-semibold">
                            Email
                        </label>
                        <input type="email" {...register("email")} id="email" placeholder="Your Email" className="input" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Password
                        </label>
                        <input type="password" {...register("password")} id="password" placeholder="Your Password" className="input" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Confirm Password
                        </label>
                        <input type="password" name="cPassword" id="cPassword" {...register("cpassword")} placeholder="Confirm Password" className="input" />
                    </div>
                    <div className="pt-2">
                        <Button className="w-full" type="submit">
                            {loading ? "Loading" : "Register"}
                        </Button>
                    </div>
                </form>
                <p className="text-center">
                    Already have a account?
                    <Link href="/login" className="ml-2 text-indigo-900 font-semibold underline">
                        Login Now
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

export default Registration;
