import Image from "next/image";
import Author from "./Components/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { BlogsData } from "./BlogsData";


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