import Image from "next/image";
import { useRouter } from "next/router";
import Main from "../../components/Layout/Main";
import { jwt_axios } from "../../utilities/api";
import Author from "../../components/Common/Author";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";

const BlogDetails = () => {
    const { query } = useRouter()

    const {
        data: blog,
        isLoading: blogLoading,
        refetch: blogRefetch,
    } = useQuery({
        queryKey: ["blog", query?.id],
        queryFn: () => jwt_axios.get(`/blog/${query?.id}`).then((res) => res.data),
    });

    if (blogLoading) {
        return (
            <Main title="Blog - PluggedIn" className="container animate-pulse">
                <div className="bg-cover bg-center bg-base-content/10 relative min-h-[500px] rounded-lg">
                </div>
                <div className="relative mt-6 xs:blog-body space-y-4">
                    <div className="h-5 w-20 bg-base-content/10 rounded" />
                    <div className="flex gap-4">
                        <div className={`bg-base-content/10 rounded-full w-12 h-12`} />
                        <div className="space-y-1.5">
                            <h4 className="bg-base-content/10 h-6 w-24 rounded"></h4>
                            <p className="bg-base-content/10 h-4 w-32 rounded"></p>
                        </div>
                    </div>
                    <h2 className="h-7 w-40 bg-base-content/10 rounded" />
                    <div>
                        <p className="h-4 w-full bg-base-content/10 rounded"></p>
                        <p className="h-4 w-full bg-base-content/10 rounded"></p>
                        <p className="h-4 w-full bg-base-content/10 rounded"></p>
                    </div>
                </div>
            </Main>
        );

    } else {
        const { _id, author, time, img, category, title, description } = blog
        const date_is = format(parseISO(time), "PP");
        const time_is = format(parseISO(time), "p");

        return (
            <Main title="Blog - PluggedIn" className="container">
                <div className="bg-cover bg-center relative min-h-[500px] rounded-lg" style={{ backgroundImage: `url(${img})` }}>
                </div>
                <div className="relative mt-6 xs:blog-body">
                    <div className="my-2 badge badge-accent">
                        {category}
                    </div>
                    <Author email={author} width={48} height={48}>{date_is} at {time_is}</Author>
                    <h2 className="mt-3 mb-1">{title}</h2>
                    <p>{description}</p>
                </div>
            </Main>
        );
    }

    return (
        <Main title="Blog - PluggedIn" className="container">
            {blogLoading ? <div>Loading</div> : <div>
                <Image src={blog?.img} alt="" width={500} height={500} className="max-w-3xl w-full rounded-lg" />
                <div className="my-2 badge badge-accent">
                    {blog.category}
                </div>
                <Author email={blog?.author} width={48} height={48}>{date_is} at {time_is}</Author>
                <h2 className="mt-3 mb-1">{blog.title}</h2>
                <p>{blog?.description}</p>
            </div>}
        </Main>
    );
};

export default BlogDetails;