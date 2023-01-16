import Image from "next/image";
import heroImg from "../../public/logo/heroImage.jpg";
import { Button, ButtonOutline } from "../Buttons";

const Hero = () => {
    return (
        <header className="section-gap grid lg:grid-cols-2 gap-x-6 xl:gap-x-8 gap-y-10 items-center">
            <div className="space-y-4">
                <h3 className="text-5xl font-extrabold text-left mb-0">Capture every importance moment with PluggedIn</h3>
                <p>Welcome to PluggedIn. It is an online base meeting recording application. Recording is more easier to use this application.</p>
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
