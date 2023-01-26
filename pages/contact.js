import Main from "../components/Layout/Main";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaGithub } from "react-icons/fa";
import { Button } from "../components/Buttons";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleContact = (data) => {
        console.log(data);
    };

    return (
        <Main title="Contact - PluggedIn">
            <Header>
                <h1 className="mb-0 font-extrabold">Have some query?</h1>
                <p className="mt-2 max-w-xl px-6">
                    Let&apos;s chat, tell us about your query. Firstly fill up the form. Our team will response within 1 hour. You can also connect us through
                    social. thank you.
                </p>
                <Breadcrumbs href="/contact" page="Contact"></Breadcrumbs>
            </Header>
            <div className="container section-gap grid lg:grid-cols-2 gap-12">
                {/* textual content */}
                <div className="">
                    <div className="flex-col gap-5 flex mb-6">
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
                <div className="h-max bg-purple-200 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(handleContact)} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <input
                                    type="text"
                                    {...register("first_name", { required: true })}
                                    className={errors?.first_name ? "input input-error" : "input"}
                                    placeholder="First Name"
                                />
                                <error className="text-red-600">{errors?.first_name?.type === "required" && "First Name is required"}</error>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    {...register("last_name", { required: true })}
                                    className={errors?.last_name ? "input input-error" : "input"}
                                    placeholder="Last Name"
                                />
                                <error className="text-red-600">{errors?.last_name?.type === "required" && "Last Name is required"}</error>
                            </div>
                        </div>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className={errors?.email ? "input input-error" : "input"}
                            placeholder="Email"
                        />
                        <error className="text-red-600">{errors?.email?.type === "required" && "Email is required"}</error>
                        <input
                            type="text"
                            {...register("subject", { required: true })}
                            className={errors?.subject ? "input input-error" : "input"}
                            placeholder="Subject"
                        />
                        <error className="text-red-600">{errors?.subject?.type === "required" && "Subject is required"}</error>

                        <textarea
                            {...register("message", { required: true, minLength: 20, maxLength: 200 })}
                            className={errors?.email ? "textarea textarea-bordered textarea-error w-full" : "textarea textarea-bordered w-full"}
                            rows="3"
                            placeholder="Your message"
                        ></textarea>
                        <error className="text-red-600">
                            {errors?.message?.type === "required" && "Message is required"}
                            {errors?.message?.type === "minLength" && "Entered Your Message Minimum 20 letter"}
                            {errors?.message?.type === "maxLength" && "You are no longer exceed 200 letter of message"}
                        </error>

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
