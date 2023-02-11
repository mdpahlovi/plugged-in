import Link from "next/link"
import Image from "next/image"
import Author from "./author"

export default function related() {
    return (
        <section>
            <h1 className="font-bold text-3xl py-4">Related</h1>
            <div className="flex flex-col gap-10">
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="flex gap-5">
            <Link href={"/"}><Image src={"/images/react.png"} className="rounded" width={300} height={300} alt=""/></Link>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">10 Feb, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Everything you need to know about Socket.IO</Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}