// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import ReviewCard from "./ReviewCard";
import { Button } from "../../Buttons";
import { useAuth } from "../../../hooks/useAuth";
import ReviewModal from "./ReviewModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

SwiperCore.use([Autoplay]);

const ReviewSlider = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: reviews = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => fetch(`https://plugged-in-server.vercel.app/reviews`).then((res) => res.json()),
    });

    const handleEdit = (data) => {
        data.avatar = user?.avatar;
        data.name = user?.name;
        data.location = "C&B Road, Barisal";
        data.time = new Date();
        data.rating = "4";

        axios
            .post(`https://plugged-in-server.vercel.app/reviews`, data)
            .then((res) => {
                if (res.data) {
                    refetch();
                    toast.success("Review updated successfully");
                    setIsOpen(false);
                }
            })
            .catch((error) => console.log(error.message));
    };

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
                {reviews.map((review, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={`${user?._id ? "flex" : "hidden"} mt-8 justify-center`}>
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
