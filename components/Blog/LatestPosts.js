import Image from "next/image";
import Author from "./Components/author";
import { BlogsData } from "./BlogsData";

const LatestPosts = () => {

    const filterdata = BlogsData?.filter(singleData => singleData.status === "latest")

    return (
        <section className="container section-gap">
            <h1>Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterdata?.map((data, i) => (
                    <div key={i} className="">
                        <Image src={data.img} className="rounded-lg" width={600} height={600} alt="" />
                        <div className="flex justify-center flex-col">
                            <div className="mt-2 mb-0.5">
                                <span className="badge badge-accent text-white">{data.category}</span>
                                <span className="ml-3">{data.date}</span>
                            </div>
                            <div className="space-y-1">
                                <h2 className="mb-1">{data.title}</h2>
                                <p>{data.description}</p>
                                <Author></Author>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default LatestPosts
