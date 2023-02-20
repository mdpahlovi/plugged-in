import Link from "next/link";
import Image from "next/image";
import Author from "./Components/author";

export default function section4() {
    return (
        <section className="container section-gap">
            <div className="grid lg:grid-cols-2 gap-8">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    );
}

function Post() {
    return (
        <div className="flex gap-6">
            <Image src={"/images/react.png"} className="rounded" width={300} height={300} alt="" />
            <div className="info flex justify-center flex-col">
                <div className="mt-2 mb-0.5">
                    <span className="badge badge-accent text-white">Business, Travel</span>
                    <span className="ml-3">10 Feb, 2023</span>
                </div>
                <div className="title">
                    <h3 className="text-xl font-bold">Everything you need to know about Socket.IO</h3>
                </div>
                <Author></Author>
            </div>
        </div>
    );
}
