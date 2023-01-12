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
            img: "https://www.aconsciousrethink.com/wp-content/uploads/2022/05/nice-guy-syndrome.jpg",
            name: "Reinthik Augosto",
            location: "New York",
            time: "Jan 23, 2022",
            review: "There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 2,
            img: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
            name: "Loren Smiyha",
            location: "London",
            time: "Feb2, 2022",
            review: "There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
        {
            id: 3,
            img: "https://alis.alberta.ca/media/699187/person-calling-phone-taking-notes-istock-507952505.jpg?crop=0.31738394503100387,0,0.25083742635778833,0&cropmode=percentage&width=450&height=650&rnd=132616785370000000",
            name: "Alaba Aleski",
            location: "Nigeria",
            time: "March 12, 2022",
            review: "Plugged in is multi dimentional meeting platform. Here more than 500 persons can join at a time. Our research and development team is working regularly and we hope that it will be increased in 1000 person.",
        },
        {
            id: 4,
            img: "https://pbs.twimg.com/profile_images/1465102977312636929/oXKdq9aL_400x400.jpg",
            name: "Aszl Askifv",
            location: "Sydney",
            time: "April 14, 2022",
            review: "At initial we are keep it free for 60 mins for once meeting where maximum 50 persons can join at a time. Up to 100 persons and time limit 2 hr it will be charged $9 per hour. Up to 1000 persons and time limit 5 hr it will be charged $19 per hour. Up to 1000 persons and time limit 12 hr it will be charged $99 per hour.",
        },
        {
            id: 5,
            img: "https://www.thefamouspeople.com/cdn-cgi/mirage/a1257ceecde66a98f69232b07aab03041321ae6eee30234b0952640663c7504c/1280/https://www.thefamouspeople.com/profiles/thumbs/junji-ito-1.jpg",
            name: "Ching Hua",
            location: "Tokyo",
            time: "Dec 14, 2022",
            review: "There are lot of features we have implement in this app already. You can video confference with high quality video and audio system. Meeting can be recording for future uses. Multiple users can join at atime.",
        },
    ];

    return (
        <div>
            <span className="flex justify-center m-12 font-bold text-3xl uppercase text-primary">Users Review</span>
            <div className="flex justify-center gap-4 mb-12">
                <button className="btn btn-active btn-secondary">See All Reviews</button>
                <button className="btn btn-active btn-accent">Add Your Review</button>
            </div>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2000,
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
        </div>
    );
};

export default ReviewSlider;
