import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import Author from "./Components/author";

export default function section3() {
    SwiperCore.use([Autoplay]);

    return (
        <section className="container section-gap">
            <h1>Most Popular Posts</h1>
            <Swiper
                spaceBetween={32}
                autoplay={{
                    delay: 2000,
                }}
                loop={true}
                slidesPerView={2}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>
        </section>
    );
}

function Post() {
    return (
        <div>
            <Image src={"/images/Socket.io--2-.jpg"} className="rounded-lg" width={600} height={600} alt="" />
            <div className="flex justify-center flex-col">
                <div className="mt-2 mb-0.5">
                    <span className="badge badge-accent text-white">Business, Travel</span>
                    <span className="ml-3">10 Feb, 2023</span>
                </div>
                <div className="space-y-1">
                    <h2 className="mb-1">Everything you need to know about Socket.IO</h2>
                    <p>
                        Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web
                        clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js.
                        Both components have a nearly identical API.
                    </p>
                    <Author></Author>
                </div>
            </div>
        </div>
    );
}
