import Image from "next/image";
import React, { useState } from "react";
import Main from "../../components/Layout/Main";
import checkImg from "../../public/images/checkImg.png";
import { HiFlag, HiOutlineCreditCard, HiOutlineUserCircle } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "../../components/Common/Buttons";
import { Protect } from "../../components/Common/ProtectedRoute";
import Header from "../../components/Common/Header";
import Breadcrumbs from "../../components/Common/Breadcrumbs";
import { useRouter } from "next/router";
import { capitalize } from "../../utilities/capitalize";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { jwt_axios } from "../../utilities/api";
import useGetUser from "../../hooks/useGetUser";
import { user_obj } from "../../utilities/user_obj";

const Checkout = () => {
    const { query, push } = useRouter();
    const { authUser } = useAuth();
    const [planLoading, setPlanLoading] = useState(false);
    const { userLoading, user, userRefetch } = useGetUser(authUser?.email);
    const plan = capitalize(query?.plan);

    const { register, handleSubmit } = useForm();
    const handleRegisterTeam = ({ name, email }) => {
        setPlanLoading(true);
        const team = {
            name: name,
            leader: email,
            members: [{ email: email, role: "leader" }],
        };
        jwt_axios.post(`/team`, team).then((res) => {
            if (res.data.acknowledged) {
                jwt_axios
                    .patch(`/user/${email}`, user_obj(query?.plan, email, name, user?.team))
                    .then((res) => {
                        userRefetch();
                        setPlanLoading(false);
                        toast.success("Team Register to PluggedIn");
                        push("/dashboard/teams");
                    })
                    .catch((error) => console.log(error));
            } else {
                setPlanLoading(false);
                toast.error(res.data.message);
                push(`/dashboard/teams/${authUser?.email}`);
            }
        });
    };

    return (
        <Main title="Checkout - PluggedIn">
            <Header>
                <h1 className="mb-0 font-extrabold">Checkout our {plan} Plan</h1>
                <p className="mt-2 max-w-xl px-6">
                    Complete your order by providing your payment details. If you have any query please contact us. Thank you for choosing us.
                </p>
                <Breadcrumbs href="/checkout" page="Checkout"></Breadcrumbs>
            </Header>
            <div className="container grid lg:grid-cols-2 gap-4 items-center">
                <Image src={checkImg} alt="" className="xl:w-5/6" />
                <form onSubmit={handleSubmit(handleRegisterTeam)} className="mt-10 px-4 pt-8 lg:mt-0">
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <input type="text" {...register("email")} className="pl-10 input" defaultValue={user?.email} />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <MdAlternateEmail />
                            </div>
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">
                            {query?.plan === "team" ? "Team Name" : "Your Name"}
                        </label>
                        <div className="relative">
                            <input type="text" {...register("name")} className="pl-10 input" defaultValue={query?.plan === "team" ? "" : user?.name} required />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <HiOutlineUserCircle />
                            </div>
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">
                            Card Details
                        </label>
                        <div className="flex gap-4">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input type="text" id="card-no" name="card-no" className="pl-10 input" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <HiOutlineCreditCard />
                                </div>
                            </div>
                            <input type="text" name="credit-expiry" className="input" placeholder="MM/YY" />
                            <input type="text" name="credit-cvc" className="input" placeholder="CVC" />
                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">
                            Billing Address
                        </label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="billing-address" name="billing-address" className="pl-10 input" placeholder="Street Address" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <HiFlag />
                                </div>
                            </div>
                            <select type="text" name="billing-state" className="select select-bordered">
                                <option value="State">State</option>
                                <option value="State">State</option>
                                <option value="State">State</option>
                                <option value="State">State</option>
                            </select>
                            <input type="text" name="billing-zip" className="input" placeholder="ZIP" />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <h2>Total</h2>
                            <h2>${query.price}</h2>
                        </div>
                    </div>
                    <Button className="mt-6 w-full">{planLoading ? "Loading..." : "Place Order"}</Button>
                </form>
            </div>
        </Main>
    );
};

export default Protect(Checkout);
