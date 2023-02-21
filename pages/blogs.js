import React from "react";
import Main from "../components/Layout/Main";
import Trending from "../components/Blog/Trending";
import LatestPosts from "../components/Blog/LatestPosts";
import Posts from "../components/Blog/Posts";
import AddBlogs from "../components/Blog/AddBlogs";
import { GrClose } from "react-icons/gr";

const blog = () => {
    return (
        <Main title="Blogs - PluggedIn">
             <button type='submit' className=" btn max-w-sm mx-auto flex justify-center mt-6 border-2 bg-gradient-to-br from-secondary via-primary to-accent border-violet-400 text-white rounded-2xl hover:bg-base-100 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-primary duration-300"><label htmlFor="my-modal" className="hidden xs:block">Add Blogs</label></button>
             {/* Modal */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   <AddBlogs/>
    <div className="modal-action">
    <button className="absolute rounded top-2 right-1 text-white px-1.5 py-0.5 flex items-center gap-2  hover:from-accent hover:via-primary hover:to-secondary">
                            <label htmlFor="my-modal" className="hidden text-2xl xs:block"><GrClose/></label>
                        </button>
    </div>
  </div>
</div>
            <Trending></Trending>
            <LatestPosts></LatestPosts>
            <Posts></Posts>
        </Main>
    );
};

export default blog;
