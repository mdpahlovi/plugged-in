import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function section4() {
    return (
        <section className="container mx-auto md:px-20 py-6">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-4 text-center">Business</h1>
                    <div className="flex flex-col gap-6">
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-4 text-center">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/blogpage"}><Image src={"/images/react.png"} className="rounded" width={300} height={300} alt=""/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/blogpage"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/blogpage"} className="text-gray-600 hover:text-gray-800">10 Feb, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/blogpage"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Everything you need to know about Socket.IO</Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}