import Image from "next/image";
import Author from "./Components/author";

export default function section2() {
    return (
        <section className="container section-gap">
            <h1>Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    );
}

function Post() {
    return (
        <div>
            <Image src={"/images/Socket.io--2-.jpg"} className="rounded-lg" width={600} height={600} alt="" />
            <div className="flex justify-center flex-col">
                <div className="mt-2 mb-0.5">
                    <span className="badge badge-accent text-white">Business, Travel</span>
                    <span className="ml-3">10 Feb, 2023</span>
                </div>
                <div className="space-y-1">
                    <h2 className="mb-1">Everything you need to know about Socket.IO</h2>
                    <p>
                        Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web
                        clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js.
                        Both components have a nearly identical API.
                    </p>
                    <Author></Author>
                </div>
            </div>
        </div>
    );
}
