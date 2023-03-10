import Link from "next/link";
import Main from "../components/Layout/Main";
import { Button, SpinLoader } from "../components/Common/Buttons";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useSetUserToDb from "../hooks/useSetUserToDb";
import { useState } from "react";
import Wavify from "../components/Common/Wavify";

const Registration = () => {
    const { userLoading, setLoading, createUser, updateUserProfile, authRefetch, setAuthRefetch } = useAuth();
    const router = useRouter();
    const [createdUser, setCreatedUser] = useState("");
    const { confirmation } = useSetUserToDb(createdUser);

    if (confirmation.acknowledged) {
        router.push("/dashboard");
        toast.success("User Created Successfully");
    }

    // Registration using react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const handleRegistration = (userInfo) => {
        createUser(userInfo.email, userInfo.password)
            .then(({ user }) => {
                updateUserProfile(userInfo.name)
                    .then(() => {
                        setAuthRefetch(!authRefetch);
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
                <h1 className="mb-0">Create your account</h1>
                <form action="" onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block font-semibold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            id="name"
                            placeholder="Full Name"
                            className={errors?.name ? "input input-error" : "input"}
                        />
                        <div className="text-red-600">{errors?.name?.type === "required" && "Name is Required"}</div>
                    </div>
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
                        <div className="text-red-600">{errors?.email?.type === "required" && "Email is Required"}</div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                            })}
                            id="password"
                            placeholder="Your Password"
                            className={errors?.password ? "input input-error" : "input"}
                        />
                        <div className="text-red-600">
                            {errors?.password?.type === "required" && "Password is required"}
                            {errors?.password?.type === "minLength" && "Entered password is less than 6 characters"}
                            {errors?.password?.type === "maxLength" && "Entered password is more than 10 characters"}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            {...register("cPassword", {
                                validate: (data) => {
                                    if (watch("password") !== data) {
                                        return "Password Not Matched";
                                    }
                                },
                            })}
                            id="cPassword"
                            placeholder="Confirm Password"
                            className={errors?.cPassword ? "input input-error" : "input"}
                        />
                        <div className="text-red-600">{errors?.cPassword?.message}</div>
                    </div>
                    <div className="pt-2">
                        <Button className="w-full" type="submit">
                            {userLoading ? <SpinLoader /> : "Register"}
                        </Button>
                    </div>
                </form>
                <p className="text-center">
                    Already have a account? <br className="xs:hidden" />
                    <Link href="/login" className="ml-2 text-primary font-semibold underline">
                        Login Now
                    </Link>
                </p>
            </div>
            <Wavify />
        </Main>
    );
};

export default Registration;
