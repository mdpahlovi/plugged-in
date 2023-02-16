import React, { useEffect, useState } from "react";
import gold from "../../../public/images/feature/gold.png";
import silver from "../../../public/images/feature/silver.png";
import bronze from "../../../public/images/feature/bronze.png";
import Image from "next/image";

const TaskCollapse = ({ task, tasksRefetch }) => {
    const handleClick = (event) => {
        fetch(`https://plugged-in-server.onrender.com/giveRward?id=${task?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ reward: event.target.alt }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    tasksRefetch();
                }
            });
    };

    return (
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content flex items-center justify-between">
                <p>{task?.details.replace(/(<([^>]+)>)/gi, "")}</p>
                <div>
                    {task?.givenReward === "gold" ? (
                        <Image className="w-[30px] h-[30px]" src={gold} alt="gold"></Image>
                    ) : task?.givenReward === "silver" ? (
                        <Image className="w-[30px] h-[30px]" src={silver} alt="silver"></Image>
                    ) : task?.givenReward === "bronze" ? (
                        <Image className="w-[30px] h-[30px]" src={bronze} alt="bronze"></Image>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-info   peer-checked:text-secondary-content rating rating-lg">
                <div className="bg-blue-900 w-full rounded-lg px-5 py-2 my-2 flex justify-evenly">
                    <Image onClick={handleClick} className="w-[100px] h-[60px] btn btn-ghost" src={gold} alt="gold" />
                    <Image onClick={handleClick} className="w-[100px] h-[60px] btn btn-ghost" src={silver} alt="silver" />
                    <Image onClick={handleClick} className="w-[100px] h-[60px] btn btn-ghost" src={bronze} alt="bronze" />
                </div>
            </div>
        </div>
    );
};

export default TaskCollapse;
