import Main from "../components/Layout/Main";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaGithub } from "react-icons/fa";
import { Button } from "../components/Buttons";

const Contact = () => {
    return (
        <Main title="Contact - PluggedIn">
            <div className="container section-gap grid lg:grid-cols-2 gap-12">
                {/* textual content */}
                <div className="">
                    <h1 className="text-4xl font-bold text-purple-600">Get In Touch</h1>
                    <p className="font-bold text-xl my-5">Fill up the form.....</p>
                    <p className="font-semibold text-xl">
                        <Typewriter
                            options={{
                                strings: ["For contact with us", "Our team will respons within 1 hr", "you will know everything"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <div className="flex-col gap-5 flex my-10">
                        <div className="bg-purple-100 shadow-xl flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                            <BsTelephoneFill className="text-green-800 text-xl group-hover:text-purple-900" />
                            <p className="text-green-800 font-semibold group-hover:text-purple-900">+01-0123456789</p>
                        </div>
                        <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                            <MdEmail className="text-xl group-hover:text-purple-900" />
                            <p className="text-base font-semibold group-hover:text-purple-900">c@pluggedin.com</p>
                        </div>
                        <div className="bg-purple-100 shadow-xl flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
                            <HiLocationMarker className="text-green-800 text-xl group-hover:text-purple-900" />
                            <p className="text-green-800 text-base font-semibold group-hover:text-purple-900">Dhaka, BD</p>
                        </div>
                    </div>
                    <div className="flex gap-8  justify-center md:justify-start ">
                        <FaInstagram className="text-2xl hover:text-indigo-900 cursor-pointer" />
                        <FaTwitter className="text-2xl hover:text-indigo-900 cursor-pointer" />
                        <FaYoutube className="text-2xl hover:text-indigo-900 cursor-pointer" />
                        <FaPinterest className="text-2xl hover:text-indigo-900 cursor-pointer" />
                        <FaGithub className="text-2xl hover:text-indigo-900 cursor-pointer" />
                    </div>
                </div>
                {/* Contact form */}
                <div className="h-max bg-purple-200 p-12 rounded-lg shadow-2xl">
                    <form>
                        <div className="grid xl:grid-cols-2 xl:gap-10">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="First Name "
                                required={true}
                            />

                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Last Name "
                                required=""
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email "
                            required={true}
                        />
                        <input
                            type="text"
                            name="subject"
                            className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Subject "
                            required={true}
                        />

                        <div className="flex justify-center">
                            <textarea
                                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                                required={true}
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </Main>
    );
};

export default Contact;
