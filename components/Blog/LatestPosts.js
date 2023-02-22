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
                        <div className="w-full h-[250px] overflow-hidden">
                            <Image src={data.img} width={600} height={600} className="rounded scale-100 hover:scale-110 transition duration-400 h-full w-full" alt="" />

                        </div>
                        {/* <Image src={data.img} className="rounded-lg" width={600} height={600} alt="" /> */}
                        <div className="flex justify-center flex-col">
                            <div className="mt-2 mb-0.5">
                                <span className="badge badge-accent text-white">{data.category}</span>
                                <span className="ml-3">{data.date}</span>
                            </div>
                            <div className="space-y-1">
                                <h2 className="mb-1">{data.title}</h2>
                                <p>{data.description && data.description.slice(0, 60)}...</p>
                                <>
                                    <div className="grid grid-cols-2">
                                        <Author></Author>
                                        <div className="flex justify-end "> <label for="my-modal-3" class="btn">open modal</label></div>
                                    </div>
                                </>


                                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box relative">
                                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <p class="py-4">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default LatestPosts
