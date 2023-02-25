import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi';

const Posts = ({ blogs }) => {
    return (
        <section className="container section-gap">
            <div className="grid lg:grid-cols-2 gap-6">
                {blogs?.map((blog) => (
                    <Link href={`/blogs/${blog._id}`} key={blog._id} className="group relative grid xs:grid-cols-[4fr_8fr] items-center xs:gap-4 sm:gap-6">
                        <Image src={blog.img} className="h-full w-full rounded-lg" alt="" width={200} height={200} />
                        <div>
                            <div className="mt-2 mb-0.5 badge badge-accent">
                                {blog.category}
                            </div>
                            <h2 className="transition group-hover:text-primary mb-2">{blog.title}</h2>
                            <div className="flex justify-between items-center group-hover:text-primary gap-2">
                                <span className="text-sm whitespace-nowrap">Read More</span>
                                <HiArrowRight className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default Posts