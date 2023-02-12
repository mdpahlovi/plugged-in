import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';


export default function section1() {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className="py-8" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    autoplay={{
                        delay: 2000
                    }}
                    loop={true}
                    slidesPerView={1}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="image">
                <Link href={"/blogpage"}><Image src={"/images/Socket.io--2-.jpg"} width={600} height={600} alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/blogpage"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/blogpage"} className="text-gray-600 hover:text-gray-800">10 Feb, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/blogpage"} className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Everything you need to know about Socket.IO</Link>
                    <p className="text-gray-500 py-2">
                        Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.
                    </p>
                    <Author></Author>
                </div>
            </div>
        </div>
    )
}