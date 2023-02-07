import Main from "../components/Layout/Main";
import React, { useRef, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaGithub } from "react-icons/fa";
import { Button } from "../components/Common/Buttons";
import { useForm } from "react-hook-form";
import Header from "../components/Common/Header";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import toast, { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";
// import emailjs, { sendForm } from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm("service_5o7ybqc", "template_l446qia", form.current, "fxiuKPm0NteVCZ0H5").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        toast.success("Your message has been successfully sent. I will contact you soon.!");
        showResult(true);
    };
    //hide result
    setTimeout(() => {
        showResult(false);
    }, 7000);

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
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <input className="input" type="text" name="first_name" placeholder="First Name" />
                            </div>
                            <div>
                                <input className="input" type="text" name="last_name" placeholder="Last Name" />
                            </div>
                        </div>

                        <div>
                            <input className="input" type="email" name="user_email" placeholder="Email" />
                        </div>
                        <div>
                            <input className="input" type="text" name="subject" placeholder="subject" />
                        </div>

                        <div>
                            <textarea name="message" placeholder="Your message" className=" textarea-bordered  w-full textarea" />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                        <Toaster />
                        <div>{result ? <Result /> : null}</div>
                    </form>
                </div>
            </div>
        </Main>
    );
};

export default Contact;

const Result = () => {
    return <p className="text-gray-900">Your message has been successfully sent. I will contact you soon.</p>;
};
