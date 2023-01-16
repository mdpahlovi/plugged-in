// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import ReviewCard from "./ReviewCard";

SwiperCore.use([Autoplay]);

const ReviewSlider = () => {
    const reviewData = [
        {
            id: 1,
            img: "https://reqres.in/img/faces/7-image.jpg",
            name: "Reinthik Augosto",
            location: "New York, United State",
            time: "Jan 23, 2022",
            review: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 2,
            img: "https://reqres.in/img/faces/8-image.jpg",
            name: "Loren Smiyha",
            location: "London, United State",
            time: "Feb 2, 2022",
            review: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 3,
            img: "https://reqres.in/img/faces/9-image.jpg",
            name: "Alaba Aleski",
            location: "Nigeria, United State",
            time: "March 12, 2022",
            review: "Plugged in is multi dimensional meeting platform. Here more than 500 persons can join at a time. Our research and development team is working regularly and we hope that it will be increased in 1000 person.",
        },
        {
            id: 4,
            img: "https://reqres.in/img/faces/10-image.jpg",
            name: "Aszl Askifv",
            location: "Sydney, United State",
            time: "April 14, 2022",
            review: "At initial we are keep it free for 60 mins for once meeting where maximum 50 persons can join at a time. Up to 100 persons and time limit 2 hr it will be charged $9 per hour. Up to 1000 persons and time limit 5 hr it will be charged $19 per hour. Up to 1000 persons and time limit 12 hr it will be charged $99 per hour.",
        },
        {
            id: 5,
            img: "https://reqres.in/img/faces/11-image.jpg",
            name: "Ching Hua",
            location: "Tokyo, United State",
            time: "Dec 14, 2022",
            review: "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
    ];

    return (
        <>
            <h1 className="section-gap">User Reviews</h1>
            <Swiper
                className="mx-auto"
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                {reviewData.map((data, index) => {
                    return (
                        <SwiperSlide key={data.id}>
                            <ReviewCard name={data.name} location={data.location} time={data.time} review={data.review} img={data.img}></ReviewCard>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default ReviewSlider;
