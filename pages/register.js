import Link from "next/link";
import Main from "../components/Layout/Main";
import { Button } from "../components/Buttons";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
    // Registration using react-hook-form
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const handleRegistration = (data) => {
        axios
            .post("http://localhost:3000/api/auth/signup", data)
            .then(({ data }) => console.log(data))
            .catch(({ message }) => console.log(message));
    };

    console.log(process.env.MONGO_URL);

    return (
        <Main title="Registration to PluggedIn">
            <div className="section-gap bg-base-100 max-w-lg sm:mx-auto shadow-lg drop-shadow p-8 space-y-6 rounded-lg mx-8">
                <h2 className="text-center">Create your account</h2>
                <form action="" onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block font-semibold">
                            Full Name
                        </label>
                        <input type="text" {...register("name", { required: true })} id="name" placeholder="Full Name" className={errors.name ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors.name?.type === "required" && "Name is required"}
                        </error>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block font-semibold">
                            Email
                        </label>
                        <input type="email" {...register("email", { required: true })} id="email" placeholder="Your Email" className={errors.email ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors.email?.type === "required" && "Email is required"}
                        </error>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Password
                        </label>
                        <input type="password" {...register("password", {
                            required: true, minLength: 6, maxLength: 10,
                        })} id="password" placeholder="Your Password" className={errors.password ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors?.password?.type === "required" && "Password is required"}
                            {errors?.password?.type === "minLength" &&
                                "Entered password is less than 6 characters"}
                            {errors?.password?.type === "maxLength" &&
                                "Entered password is more than 10 characters"}
                        </error>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block font-semibold">
                            Confirm Password
                        </label>
                        <input type="password" {...register("cPassword", {
                            validate: data => {
                                if (watch("password") !== data) {
                                    return "Password Not Matched"
                                }
                            }
                        })} id="cPassword" placeholder="Confirm Password" className={errors.cPassword ? "input border-red-600" : "input"} />
                        <error className="text-red-600">
                            {errors?.cPassword?.message}
                        </error>
                    </div>
                    <div className="pt-2">
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                    </div>
                </form>
                <p className="text-center">
                    Already have a account?
                    <Link href="/login" className="ml-2 underline text-indigo-900">
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
