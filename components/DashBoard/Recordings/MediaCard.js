import Image from "next/image";
import React from "react";
import audioImage from "../../../public/logo/audioImage.png";

const MediaCard = ({ media }) => {
  console.log(media);
  const { authorEmail, authorName, date, mediaType, mediaUrl } = media;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        {mediaType === "video" || mediaType === "screen" ? (
          <video src={mediaUrl}></video>
        ) : (
          <Image src={audioImage} alt="" className="rounded-xl" />
        )}
      </figure>
      <div className="card-body">
        <h2 className="text-start">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default MediaCard;
