import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';

export default function section3() {

    SwiperCore.use([Autoplay])

    return (
        <section className="container mx-auto md:px-20 py-6">
            <h1 className="font-bold text-4xl py-4 text-center">Most Popular Posts</h1>
            <Swiper
                autoplay={{
                    delay: 2000
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
    )
}

function Post() {
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/blogpage"}><Image src={"/images/Socket.io--2-.jpg"} width={500} height={400} alt=""/></Link>
            </div>
            <div className="info flex justify-center flex-col py-1">
                <div className="cat">
                    <Link href={"/blogpage"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/blogpage"} className="text-gray-600 hover:text-gray-800">10 Feb, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/blogpage"} className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">Everything you need to know about Socket.IO</Link>
                </div>
                <p className="text-gray-500 py-1">
                    Socket.IO is an event-driven library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}