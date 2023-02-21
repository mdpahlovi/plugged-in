
import Author from "./Components/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { BlogsData } from "./BlogsData";
import Image from "next/image";

export default function section1() {
    SwiperCore.use([Autoplay]);

    return (
        <div className="container section-gap">
            <h1>Trending</h1>
            <Swiper
                autoplay={{
                    delay: 2000,
                }}
                loop={true}
                slidesPerView={1}
            >
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
            </Swiper>
        </div>
    );
}

function Slide() {
    const filterdata = BlogsData?.filter(singleData => singleData.status === "trending")
    return (
        <div className="">
            {filterdata?.map((data, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-8 border p-8 shadow-lg rounded-lg relative">
                    <img src={data.img} className="rounded-lg" width={600} height={600} alt="" />
                    <div className="flex justify-center flex-col mt-2">
                        <div className="mb-2">
                            <span className="badge badge-accent text-white">{data.category}</span>
                            <span className="ml-3">{data.date}</span>
                        </div>
                        <div className="space-y-3">
                            <h1 className="md:text-5xl text-left mb-3">{data.title}</h1>
                            <p>{data.description}</p>
                            <Author></Author>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}
// <div className="grid md:grid-cols-2 gap-8">
        //     <Image src={"/images/Socket.io--2-.jpg"} className="rounded-lg" width={600} height={600} alt="" />
        //     <div className="flex justify-center flex-col">
        //         <div className="mb-2">
        //             <span className="badge badge-accent text-white">Business, Travel</span>
        //             <span className="ml-3">10 Feb, 2023</span>
        //         </div>
        //         <div className="space-y-3">
        //             <h1 className="md:text-5xl text-left mb-3">Everything you need to know about Socket.IO</h1>
        //             <p>
        //                 Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web
        //                 clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js.
        //                 Both components have a nearly identical API.
        //             </p>
        //             <Author></Author>
        //         </div>
        //     </div>
        // </div>