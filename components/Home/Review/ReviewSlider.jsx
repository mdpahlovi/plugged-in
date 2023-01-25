// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import ReviewCard from "./ReviewCard";
import { Button } from "../../Buttons";
import { useAuth } from "../../../hooks/useAuth";
import ReviewModal from "./ReviewModal";
import { useState } from "react";

SwiperCore.use([Autoplay]);

const ReviewSlider = () => {
    const { authUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const handleEdit = (data) => {
        data.avatar = authUser?.photoURL;
        data.name = authUser?.displayName;
        data.location = "";
        data.time = new Date();
        data.rating = "";

        console.log(data);
    };

    const reviewData = [
        {
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            name: "Reinters Augusta",
            location: "New York, United State",
            time: "Jan 23, 2022",
            rating: "4",
            details:
                "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            name: "Loren Smiths",
            location: "London, United State",
            time: "Feb 2, 2022",
            rating: "5",
            details:
                "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            avatar: "https://reqres.in/img/faces/9-image.jpg",
            name: "Alba Alaska",
            location: "Nigeria, United State",
            time: "March 12, 2022",
            rating: "3",
            details:
                "Plugged in is multi dimensional meeting platform. Here more than 500 persons can join at a time. Our research and development team is working regularly and we hope that it will be increased in 1000 person.",
        },
        {
            avatar: "https://reqres.in/img/faces/10-image.jpg",
            name: "Asul Salify",
            location: "Sydney, United State",
            time: "April 14, 2022",
            rating: "4",
            details:
                "At initial we are keep it free for 60 mins for once meeting where maximum 50 persons can join at a time. Up to 100 persons and time limit 2 hr it will be charged $9 per hour. Up to 1000 persons and time limit 5 hr it will be charged $19 per hour. Up to 1000 persons and time limit 12 hr it will be charged $99 per hour.",
        },
        {
            avatar: "https://reqres.in/img/faces/11-image.jpg",
            name: "Ching Hua",
            location: "Tokyo, United State",
            time: "Dec 14, 2022",
            rating: "5",
            details:
                "There are lot of features we have implement in this app already. You can video conference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
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
                {reviewData.map((review, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={`${authUser?.uid ? "flex" : "hidden"} mt-8 justify-center`}>
                <Button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Add Review
                </Button>
            </div>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} handleEdit={handleEdit} />
        </>
    );
};

export default ReviewSlider;
