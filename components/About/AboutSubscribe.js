import { Button } from "../Buttons.jsx";

const AboutSubscribeSection = () => {
    return (
        <div className="bg-blue-800 rounded mt-48 p-8">
            <h1 className="mb-3 text-3xl">
                Receive product updates and news,
                <br /> direct to your inbox.
            </h1>
            <div className="w-full">
                <form>
                    <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                        <input
                            type="email"
                            placeholder="e@example.com"
                            className="flex-1 appearance-none rounded-full shadow px-6 py-3 text-grey-dark mr-2 focus:outline-none"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutSubscribeSection;
