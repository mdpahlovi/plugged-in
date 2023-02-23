import Image from 'next/image';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Author from '../Common/Author';

const BlogCord = ({ blog, post }) => {
    const { img, title, description, category, author } = blog

    return (
        <div className="group relative grid grid-cols-[4fr_8fr] items-center border rounded-lg">
            <Image src={img} className="w-full aspect-square rounded-lg" alt="" width={200} height={200} />
            <div className="p-6">
                <h2 className="transition group-hover:text-primary mb-2">{title}</h2>
                <p className={`${post ? "block lg:hidden" : "block"} mb-2`}>{description}</p>
                <div className="w-full flex justify-between gap-4">
                    <Author email={author} width={40} height={40} />
                    <div className="flex items-center group-hover:text-primary gap-2">
                        <span className="text-sm whitespace-nowrap">Read More</span>
                        <HiArrowRight className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogCord;