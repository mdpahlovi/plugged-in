import Image from "next/image";
import Author from "../Common/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";



export default function Trending({ blogs }) {
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
                {blogs?.map((data, i) => (
                    <SwiperSlide key={i}>
                        <div className="grid md:grid-cols-2 relative">
                            <Image src={data.img} className="rounded-lg" width={600} height={600} alt="" />
                            <div className="flex justify-center flex-col mt-2 p-6">
                                <div className="mb-2">
                                    <span className="badge badge-accent">{data.category}</span>
                                    <span className="ml-3">{data.date}</span>
                                </div>
                                <div className="space-y-3">
                                    <h1 className="md:text-5xl text-left mb-3">{data.title}</h1>
                                    <p>{data.description}</p>
                                    <Author></Author>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

