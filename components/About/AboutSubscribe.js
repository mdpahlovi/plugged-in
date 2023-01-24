import { Button } from "../Buttons.jsx";

const AboutSubscribeSection = () => {
    return (
        <div className="bg-accent section-gap rounded p-8">
            <h1 className="mb-3 text-3xl">
                Receive product updates and news,
                <br /> direct to your inbox.
            </h1>
            <div className="w-full">
                <form>
                    <div className="max-w-sm mx-auto p-1 pr-0 flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="e@example.com"
                            className="flex-1 appearance-none rounded-full shadow px-6 py-3 text-grey-dark focus:outline-none w-full sm:w-auto"
                        />
                        <Button className="w-full sm:w-auto">Subscribe</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutSubscribeSection;
