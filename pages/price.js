import Main from "../components/Layout/Main";
import { PricingPlans } from "../components/Pricing/PricingData";
import { FaCheckCircle } from "react-icons/fa";
// import { Button, ButtonOutline } from "../components/Buttons";
const Price = () => {
    return <Main title="Pricing - PluggedIn">
        
        <div className="container">
            <div className="flex justify-around items-center pt-10 flex-col lg:flex-row">
                <p className="text-3xl font-semibold">For Individuals</p>

                <div className="flex items-center flex-col lg:flex-row ">
                    <p className="text-3xl font-semibold">For Team</p>
                    <span className="bg-[#201172] text-white text-sm px-1.5 py-0.5 rounded-md ml-2">Now In Beta:Free 30-day trial</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-3  gap-8 pt-10 pb-24">
            {
                PricingPlans.map(plan=>(
                <div key={plan.name} className='border border-slate-200  p-8 shadow-lg bg-card-bg  rounded-2xl relative'>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.mostpopuler && <p className="absolute top-0 px-3 py-0.5 text-sm font-semibold tracking-wide text-white rounded-full bg-gradient-to-br from-[#392f4f] via-[#201172] to-[#816EEF] shadow-md -translate-y-1/2">Most Populer</p>}
                    <p className="mt-4 text-sm  leading-6">{plan.description}</p>
                    <div className="mt-4 rounded-lg   p-6 -mx-6">
                        <p className="text-sm font-semibold text-content">
                            <span className="text-4xl ml-3">${plan.price}</span>
                            <span>{plan.frequency}</span>
                        </p>
                    </div>
                    {/* fetures */}

                    <ul className="mt-6 space-y-3">
                        {
                        plan.features.map(feture=>(
                            <li key={feture} className=" text-sm leading-6 flex items-center">
                                <FaCheckCircle className=" text-[#201172] h-4 w-4  shrink-0"/>
                            <span className="ml-3">{feture}</span>
                            </li>
                        ))
                        }
                    </ul>
                    {/* call to action  */}
                    <a href="#" className="mt-8 block px-6 py-4 rounded-lg  bg-gradient-to-br from-[#2F0D77] via-[#201172] to-[#816EEF] text-white hover:bg-gradient-to-t hover:from-[#FF4331] hover:to-[#FF4331] text-center">{plan.cta}</a>
                </div>
                ))
            }
            </div>
        </div>
 

        </Main>;
};

export default Price;
