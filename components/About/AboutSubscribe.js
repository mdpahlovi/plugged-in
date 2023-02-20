import { toast } from "react-toastify";
import { Button } from "../Common/Buttons";

const AboutSubscribeSection = () => {
    const handelSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.subscribe.value;
        setTimeout(() => {
            e.target.reset();
            toast.success("Thank you for subscribe");
        }, 1000);
    };

    return (
        <div className="bg-base-300 section-gap rounded p-8">
            <h1 className="mb-3 text-3xl">
                Receive product updates and news,
                <br /> direct to your inbox.
            </h1>
            <div className="w-full">
                <form onSubmit={(e) => handelSubscribe(e)}>
                    <div className="max-w-sm mx-auto p-1 pr-0 flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            name="subscribe"
                            placeholder="e@example.com"
                            className="flex-1 appearance-none rounded-full shadow px-6 py-3 text-grey-dark focus:outline-none w-full sm:w-auto"
                        />
                        <Button type="submit" className="w-full sm:w-auto">
                            Subscribe
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutSubscribeSection;
