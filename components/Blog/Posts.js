import Image from "next/image";
import Author from "../Common/Author";
import BlogCord from "./BlogCord";

const Posts = ({ blogs }) => {
    return (
        <section className="container section-gap">
            <div className="grid lg:grid-cols-2 gap-6">
                {blogs?.map((blog) => (
                    <BlogCord key={blog._id} blog={blog} post />
                ))}
            </div>
        </section>
    );
}
export default Posts