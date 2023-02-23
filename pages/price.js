import Main from "../components/Layout/Main";
import { PricingPlans } from "../components/Pricing/PricingData";
import { Button } from "../components/Common/Buttons";
import Link from "next/link";
import Header from "../components/Common/Header";
import Breadcrumbs from "../components/Common/Breadcrumbs";

const Price = () => {
    return (
        <Main title="Pricing - PluggedIn">
            <Header>
                <h1 className="mb-0 font-extrabold">Choose a Pricing Plan</h1>
                <p className="mt-2 max-w-xl px-6">
                    Get a pricing plan what is suitable for you. We recommend to get business plan for manpage a team daily bases task and meeting. You can also
                    try our plan for 2 weeks. That will help to get a best plan.
                </p>
                <Breadcrumbs href="/price" page="Pricing"></Breadcrumbs>
            </Header>
            <div className="container hidden justify-around items-center pt-10 lg:flex">
                <p className="text-3xl font-semibold">For Individuals</p>
                <div className="flex items-center flex-col lg:flex-row ">
                    <p className="text-3xl font-semibold">For Team</p>
                    <span className="bg-primary text-white text-sm px-1.5 py-0.5 rounded-md ml-2">Now In Beta: Free 2 - weeks trial</span>
                </div>
            </div>
            <div className="container grid lg:grid-cols-3 gap-8 pt-10">
                {PricingPlans.map((plan) => (
                    <div key={plan.name} className="border p-8 shadow-lg rounded-lg relative">
                        <h2>{plan.name}</h2>
                        {plan.mostpopuler && (
                            <p className="absolute top-0 px-3 py-0.5 rounded-full button shadow-md -translate-y-1/2">
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

                        <div className="flex flex-col gap-1">
                            {plan.features.map(({ icon, detail }, index) => (
                                <div key={index} className="grid grid-cols-[auto,_1fr] items-center gap-2.5">
                                    {icon}
                                    <p>{detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* call to action  */}
                        <Link href={`/checkout/${plan.name.toLowerCase()}?price=${plan.price}`}>
                            <Button className="mt-6 w-full">{plan.cta}</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Main>
    );
};

export default Price;
