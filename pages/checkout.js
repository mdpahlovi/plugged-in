import Image from "next/image";
import React from "react";
import Main from "../components/Layout/Main";
import checkImg from "../public/images/checkImg.png";
import { HiFlag } from "react-icons/hi2";
import { Button } from "../components/Buttons";
import { Protect } from "../components/ProtectedRoute";

const checkout = () => {
    return (
        <Main title="Pricing - PluggedIn" className="container">
            <h1 className="section-gap">Checkout</h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                <Image className="w-1/2" src={checkImg} alt="" />
                <form>
                    <div className="mt-10 px-4 pt-8 lg:mt-0">
                        <p className="text-xl font-medium base-content ">Payment Details</p>
                        <p className="">Complete your order by providing your payment details.</p>
                        <div className="">
                            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                                Email
                            </label>
                            <div className="relative">
                                <input type="text" id="email" name="email" className="pl-10 input" placeholder="your.email@gmail.com" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">
                                Card Holder
                            </label>
                            <div className="relative">
                                <input type="text" id="card-holder" name="card-holder" className="pl-10 input" placeholder="Your full name" />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">
                                Card Details
                            </label>
                            <div className="flex gap-4">
                                <div className="relative w-7/12 flex-shrink-0">
                                    <input type="text" id="card-no" name="card-no" className="pl-10 input" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg
                                            className="h-4 w-4 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                        </svg>
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

                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium">Subtotal</p>
                                    <p className="font-semibold ">$399.00</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <h2>Total</h2>
                                <h2>$408.00</h2>
                            </div>
                        </div>
                        <Button className="mt-6 w-full"> Place Order</Button>
                    </div>
                </form>
            </div>
        </Main>
    );
};

export default Protect(checkout);
