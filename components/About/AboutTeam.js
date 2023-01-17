import Image from "next/image";
import React from "react";
import pahloviImg from "../../public/images/team/pahlovi.png";
import safayetImg from "../../public/images/team/safayet.png";
import pranImg from "../../public/images/team/gobinda.png";
import ashiqImg from "../../public/images/team/ashiqur.png";
import faisalImg from "../../public/images/team/faisal.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutTeam = () => {
    return (
        <div className="border rounded p-6 mt-48">
            <h1 className="mb-16 text-3xl">Meet Our Team</h1>
            <div className="container mx-auto grid justify-center gap-8 sm:grid-cols-2 xl:grid-cols-6">
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={pahloviImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">MD Pahlovi</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={safayetImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">Safayet Nur</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={pahloviImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">Fahim Faisal</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={pranImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">Pran Gobinda</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={ashiqImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">MD Ashiqur</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-6">
                        <div className="w-40 rounded">
                            <Image src={faisalImg} alt="" />
                        </div>
                    </div>
                    <h2 className="">MD Faisal</h2>
                    <p className="flex text-2xl gap-3 ">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaGithub />
                        </a>
                        <a href="">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;
