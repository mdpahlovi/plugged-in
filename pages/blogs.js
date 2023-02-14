import React from "react";
import Main from "../components/Layout/Main";
import Trending from "../components/Blog/Trending";
import LatestPosts from "../components/Blog/LatestPosts";
import PopularPosts from "../components/Blog/PopularPosts";
import Posts from "../components/Blog/Posts";

const blog = () => {
    return (
        <Main title="Blogs - PluggedIn">
            <Trending></Trending>
            <LatestPosts></LatestPosts>
            <PopularPosts></PopularPosts>
            <Posts></Posts>
        </Main>
    );
};

export default blog;
