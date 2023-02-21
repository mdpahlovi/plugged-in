import Link from "next/link";
import Image from "next/image";
import Author from "./Components/author";
import { BlogsData } from "./BlogsData";
const Posts = () => {
    return (
        <section className="container section-gap">
            <div className="grid lg:grid-cols-4 gap-8">
                {BlogsData?.map((data, i) => (
                    <div key={i} className="">
                        <img src={data.img} className="rounded" width={300} height={300} alt="" />
                        <div className="info flex justify-center flex-col">
                            <div className="mt-2 mb-0.5">
                                <span className="badge badge-accent text-white">{data.category}</span>
                                <span className="ml-3">{data.date}</span>
                            </div>
                            <div className="title">
                                <h3 className="text-xl font-bold">{data.title}</h3>
                            </div>
                            <Author></Author>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Posts