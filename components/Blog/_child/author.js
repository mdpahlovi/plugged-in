import Image from "next/image"
import Link from "next/link"

export default function author() {
    return (
        <div className="author flex py-2">
            <Image src={"/images/author1.jpg"} width={30} height={30} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">Augsto Gazliks</Link>
                <span className="text-sm text-gray-500">Content Writer</span>
            </div>
        </div>
    )
}