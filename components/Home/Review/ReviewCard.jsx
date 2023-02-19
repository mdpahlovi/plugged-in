import { format, parseISO } from "date-fns";
import Image from "next/image";
import Rating from "react-rating";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const ReviewCard = ({ review }) => {
    const { name, location, time, avatar, rating, details } = review;
    const date = format(parseISO(time), "PP");
    const time_is = format(parseISO(time), "p");

    return (
        <div className="max-w-screen-sm lg:max-w-full mx-auto flex flex-col p-6 divide-y rounded-lg divide-base-content/20 border">
            <div className="flex justify-between pb-4">
                <div className="flex space-x-4">
                    <div>
                        <Image src={avatar} alt="" className="rounded-full" width={48} height={48} />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <p className="text-xs">{location}</p>
                        <p className="text-xs">
                            {date} at {time_is}
                        </p>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <Rating
                        initialRating={parseFloat(rating)}
                        fullSymbol={<HiStar className="text-2xl text-primary" />}
                        emptySymbol={<HiOutlineStar className="text-2xl text-primary" />}
                        readonly
                    />
                </div>
            </div>
            <div className="text-sm pt-4">
                <p className="line-clamp-4 sm:line-clamp-3 lg:line-clamp-4 xl:line-clamp-3 2xl:line-clamp-2">{details}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
