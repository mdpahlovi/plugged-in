import Main from "../components/Layout/Main";
import { PricingPlans } from "../components/Pricing/PricingData";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../components/Buttons";
import Link from "next/link";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import { Tab } from "@headlessui/react";

const Price = () => {
    return (
        <Main title="Pricing - PluggedIn">
            <Header>
                <h1 className="mb-0 font-extrabold">Choose a Pricing Plan</h1>
                <p className="mt-2 max-w-xl">
                    Get a pricing plan what is suitable for you. We recommend to get business plan for manpage a team daily bases task and meeting. You can also
                    try our plan for 2 weeks. That will help to get a best plan.
                </p>
                <Breadcrumbs href="/price" page="Pricing"></Breadcrumbs>
            </Header>
            <div className="container flex justify-around items-center pt-10 flex-col lg:flex-row">
                <p className="text-3xl font-semibold">For Individuals</p>
                <div className="flex items-center flex-col lg:flex-row ">
                    <p className="text-3xl font-semibold">For Team</p>
                    <span className="bg-[#201172] text-white text-sm px-1.5 py-0.5 rounded-md ml-2">Now In Beta:Free 2-weeks trial</span>
                </div>
            </div>
            <div className="container grid lg:grid-cols-3 gap-8 pt-10">
                {PricingPlans.map((plan) => (
                    <div key={plan.name} className="border p-8 shadow-lg rounded-lg relative">
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        {plan.mostpopuler && (
                            <p className="absolute top-0 px-3 py-0.5 text-sm font-semibold tracking-wide text-white rounded-full bg-gradient-to-br from-[#392f4f] via-[#201172] to-[#816EEF] shadow-md -translate-y-1/2">
                                Most Popular
                            </p>
                        )}
                        <p className="text-sm">{plan.description}</p>
                        <div className="rounded-lg p-6 -mx-6">
                            <p className="text-sm font-semibold text-content">
                                <span className="text-4xl">${plan.price}</span>
                                <span>{plan.frequency}</span>
                            </p>
                        </div>
                        <ul className="space-y-2">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <FaCheckCircle className="text-[#201172] h-4 w-4" />
                                    <span className="ml-3">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        {/* call to action  */}
                        <Link href="/checkout">
                            <Button className="mt-6 w-full">{plan.cta}</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Main>
    );
};

export default Price;
