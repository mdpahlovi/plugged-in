import Link from "next/link";
import Main from "../components/Layout/Main";
import { Button } from "../components/Buttons";
import Wave from "react-wavify";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Registration = () => {
    const { loading, setLoading, createUser, updateUserProfile } = useAuth();
    // Registration using react-hook-form

    const { register, handleSubmit } = useForm();
    const handleRegistration = ({ name, email, password }) => {
        createUser(email, password)
            .then(({ user }) => {
                updateUserProfile(name)
                    .then(() => {
                        toast.success("Account Created");
                        setLoading(false);
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
                        <input type="password" name="cPassword" id="cPassword" placeholder="Confirm Password" className="input" />
                    </div>
                    <div className="pt-2">
                        <Button className="w-full" type="submit">
                            {loading ? "Loading" : "Register"}
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
                    fill="url(#gradient)"
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 6,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#816EEF" />
                            <stop offset="100%" stopColor="#2F0D77" />
                            <stop offset="50%" stopColor="#201172" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
        </Main>
    );
};

export default Registration;
