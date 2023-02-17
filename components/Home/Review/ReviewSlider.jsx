// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import ReviewCard from "./ReviewCard";
import { Button } from "../../Common/Buttons";
import { useAuth } from "../../../hooks/useAuth";
import ReviewModal from "./ReviewModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import ReviewLoader from "./ReviewLoader";

SwiperCore.use([Autoplay]);

const ReviewSlider = () => {
    const { authUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);

    const {
        data: reviews = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => fetch(`https://plugged-in-server.onrender.com/reviews`).then((res) => res.json()),
    });

    const handleEdit = (data) => {
        data.avatar = authUser?.photoURL;
        data.name = authUser?.displayName;
        data.location = "C&B Road, Barisal";
        data.time = new Date();
        data.rating = rating;

        axios
            .post(`https://plugged-in-server.onrender.com/reviews`, data)
            .then((res) => {
                if (res.data) {
                    refetch();
                    setRating(0);
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
                {isLoading ? (
                    <div className="grid lg:grid-cols-2 gap-8 animate-pulse">
                        <ReviewLoader />
                        <ReviewLoader className="hidden lg:block" />
                    </div>
                ) : (
                    reviews.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ReviewCard review={review}></ReviewCard>
                            </SwiperSlide>
                        );
                    })
                )}
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
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} handleEdit={handleEdit} setRating={setRating} />
        </>
    );
};

export default ReviewSlider;
