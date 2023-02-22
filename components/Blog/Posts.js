import Link from "next/link";
import Image from "next/image";
import Author from "./Components/author";
import { BlogsData } from "./BlogsData";
const Posts = () => {
    return (
        <section className="container section-gap">
            <div className="grid lg:grid-cols-3 gap-10">
                {BlogsData?.map((data, i) => (
                    <div key={i} className="">
                        <div className="w-full h-[250px] overflow-hidden">
                            <img src={data.img} className="rounded scale-100 hover:scale-110 transition duration-400 h-full w-full" alt="" />

                        </div>

                        <div className="info flex justify-center flex-col">
                            <div className="mt-2 mb-0.5">
                                <span className="badge badge-accent text-white">{data.category}</span>
                                <span className="ml-3">{data.date}</span>
                            </div>
                            <div className="title">
                                <h3 className="text-xl font-bold">{data.title}</h3>
                            </div>
                            <Author></Author>
                            <label for="my-modal-3" class="btn">open modal</label>
                            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box relative">
                                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                                    <p class="py-4">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Posts