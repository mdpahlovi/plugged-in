import Image from "next/image";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import Image01 from "../../public/images/image-1.jpg";

const Recordings = () => {
    const { authUser } = useAuth();

    return (
        <Dashboard title={`${authUser?.displayName} Recorder Videos`} className="grid grid-cols-card gap-4">
            {[...Array(6)].map((card, index) => (
                <div key={index} className="border rounded-lg">
                    <div>
                        <Image className="rounded-t-lg" src={Image01} alt="" />
                    </div>
                    <div className="px-4 py-3">
                        <p className="text-sm mb-1">January 18, 2023 at 10:28 PM</p>
                        <h5 className="mb-2 text-xl font-bold tracking-tight leading-6">Noteworthy technology acquisitions 2021</h5>
                        <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            ))}
        </Dashboard>
    );
};

export default Recordings;
