import Image from "next/image";
import Link from "next/link";

export default function author() {
    return (
        <div className="author flex py-2">
            <Image src={"/images/author1.jpg"} alt="" width={30} height={30} className="rounded-full aspect-square"></Image>
            <div className="flex flex-col justify-center px-4">
                <h5 className="font-bold">Augsto Gazliks</h5>
                <p className="text-sm">Content Writer</p>
            </div>
        </div>
    );
}
