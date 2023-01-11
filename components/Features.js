import Link from "next/link";
import React from "react";

const Features = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                {/* <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                    <div className="lg:w-1/2">
                        <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                            The quick, brown fox jumps over a lazy dog
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                            omnis iste natus.
                        </p>
                    </div>
                </div> */}
                <div className="flex items-center justify-center ">
                    <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                        Our Features
                    </h2>{" "}
                </div>
                <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn&apos;t even know we were calling him
                            Big Bear.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                        <p className="mb-3 text-sm text-gray-900">A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.</p>
                        <Link
                            href="/"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
