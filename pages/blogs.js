import React from "react";
import axios from "axios";
import { api_url } from "../utilities/api";
import { useQuery } from "@tanstack/react-query";
import Main from "../components/Layout/Main";
import Trending from "../components/Blog/Trending";
import LatestPosts from "../components/Blog/LatestPosts";
import Posts from "../components/Blog/Posts";
import AddBlogs from "../components/Blog/AddBlogs";
import { GrClose } from "react-icons/gr";
import { CirclesWithBar } from "react-loader-spinner";
import { Button } from "../components/Common/Buttons";
import { useTheme } from "../hooks/useTheme";
import Modal from "../components/Common/Modal";
import { useState } from "react";

const Blogs = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);

    const {
        data: blogs = [],
        isLoading: blogLoading,
        refetch: blogRefetch,
    } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => axios(`${api_url}/blogs`).then((res) => res.data),
    });

    const handleAddBlog = (details) => {
        console.log(details)

    }

    if (blogLoading) {
        return (
            <Main title="Blogs - PluggedIn">
                <div className="w-full h-screen flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color={theme === "light" ? "#362c75" : "#7565d9"} />
                </div>
            </Main>
        );
    } else {
        const trending = blogs.filter(blog => blog.status === "trending")
        const latest = blogs.filter(blog => blog.status === "latest")

        return (
            <Main title="Blogs - PluggedIn">
                <Trending blogs={trending} />
                <LatestPosts blogs={latest} />
                <Posts blogs={blogs} />
                <div className="flex justify-center mt-6">
                    <Button onClick={() => setIsOpen(true)}>Add Blogs</Button>
                </div>
                <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} ><AddBlogs updateLoading={updateLoading} handleAddBlog={handleAddBlog} /></Modal>
            </Main>
        );
    }
};

export default Blogs;
