import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { TeamData } from "./TeamData";

const AboutTeam = () => {
    return (
        <section className="section-gap">
            <h1>Meet Our Team</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {TeamData.map((team, index) => (
                    <div key={index} className="group space-y-4 text-center">
                        <div className="pt-1.5"></div>
                        <div className="mx-auto border h-52 w-52 rotate-45 overflow-hidden rounded-[4rem]">
                            <Image
                                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-150"
                                src={team.avatar}
                                alt="woman"
                            />
                        </div>
                        <div className="pt-4">
                            <h2>{team.name}</h2>
                            <p className="text-sm">CEO-Founder</p>
                        </div>
                        <p className="flex justify-center space-x-4">
                            <a href={team.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href={team.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href={team.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href={team.email} target="_blank" rel="noopener noreferrer">
                                <ImMail4 className="text-2xl" />
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutTeam;
