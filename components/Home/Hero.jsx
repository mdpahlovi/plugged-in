import Image from "next/image";
import heroImg from "../../public/logo/heroImage.jpg";
import { Button, ButtonOutline } from "../Buttons";

const Hero = () => {
    return (
        <header className="section-gap grid lg:grid-cols-2 gap-x-6 xl:gap-x-8 gap-y-10 items-center">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-[44px] lg:text-4xl xl:text-[44px] sm:leading-[44px] xl:leading-[44px] font-black text-left mb-0">
                    Welcome to PluggedIn, <br />
                    The Ultimate recording and media manage Solution.
                </h1>
                <p>
                    Say goodbye to missing important points from your online meetings. With PluggedIn, you can effortlessly record, store, and share your
                    virtual meetings with just a few clicks.
                </p>
                <div className="stats stats-vertical sm:stats-horizontal shadow w-full">
                    <div className="stat">
                        <div className="stat-title tracking-wider">Active Users</div>
                        <div className="stat-value">250+</div>
                        <div className="stat-desc">Jan 1st - Till Now</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title tracking-wider">New Users</div>
                        <div className="stat-value">5+</div>
                        <div className="stat-desc">Per days</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title tracking-wider">Total Videos</div>
                        <div className="stat-value">1,200+</div>
                        <div className="stat-desc">In Server</div>
                    </div>
                </div>
                <div className="pt-2 flex gap-4">
                    <Button>Get Started</Button>
                    <ButtonOutline>Learn More</ButtonOutline>
                </div>
            </div>
            <Image src={heroImg} alt="logo" className="mx-auto rounded-lg w-full" />
        </header>
    );
};

export default Hero;
