import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"


export default function section2() {

    return (
        <section className="container mx-auto md:px-4 py-2">
            <h1 className="font-bold text-4xl py-4 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="images">
                <Link href={"/blogpage"}><Image src={"/images/Socket.io--2-.jpg"} className="rounded" width={500} height={350} alt=""/></Link>
                <div className="info flex justify-center flex-col py-1">
                    <div className="cat">
                        <Link href={"/blogpage"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                        <Link href={"/blogpage"} className="text-gray-600 hover:text-gray-800">10 Feb, 2023</Link>
                    </div>
                    <div className="title">
                        <Link href={"/blogpage"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Everything you need to know about Socket.IO</Link>
                        <p className="text-gray-500 py-1">
                            Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.
                        </p>
                        <Author></Author>
                    </div>
                </div>
            </div>
        </div>
    )
}