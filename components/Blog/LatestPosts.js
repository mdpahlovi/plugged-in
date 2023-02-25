import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi';

const LatestPosts = ({ blogs }) => {
    return (
        <section className="container section-gap">
            <h1>Latest Posts</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs?.map((blog) => (
                    <Link href={`/blogs/${blog._id}`} key={blog._id} className="group">
                        <div className="w-full h-[250px] overflow-hidden">
                            <Image src={blog.img} width={600} height={600} className="rounded scale-100 hover:scale-110 transition duration-400 h-full w-full" alt="" />
                        </div>
                        <div className="flex justify-center flex-col">
                            <div className="mt-2 mb-0.5 badge badge-accent">
                                {blog.category}
                            </div>
                            <div className="space-y-1">
                                <h2 className="transition mb-1 line-clamp-2 group-hover:text-primary">{blog.title}</h2>
                                <p className="line-clamp-3">{blog.description}</p>
                                <div className="pt-1.5 flex justify-between items-center group-hover:text-primary gap-2">
                                    <span className="text-sm whitespace-nowrap">Read More</span>
                                    <HiArrowRight className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default LatestPosts
