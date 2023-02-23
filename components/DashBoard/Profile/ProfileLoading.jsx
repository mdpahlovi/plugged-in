import React from "react";

const ProfileLoading = () => {
    return (
        <div className="animate-pulse">
            <h1 className="mt-4 mx-auto h-10 xs:w-96 bg-base-content/10 rounded-lg" />
            <div className="mt-28">
                <div className="relative shadow rounded-lg w-full md:w-full lg:w-full xl:w-full">
                    <div className="flex justify-center">
                        <div className="rounded-full mx-auto absolute -top-20 shadow-md border-4 border-base-100 bg-base-content/10 w-32 h-32" />
                    </div>

                    <div className="mt-16">
                        <h2 className="mx-auto w-36 h-8 bg-base-content/10 rounded-lg" />
                        <p className="mx-auto mt-4 w-60 h-5 bg-base-content/10 rounded-lg" />
                        <div className="my-5 px-6">
                            <div className="h-12 bg-base-content/10 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5 px-6">
                            <div className="h-12 bg-base-content/10 rounded-full" />
                            <div className="h-12 bg-base-content/10 rounded-full" />
                            <div className="h-12 bg-base-content/10 rounded-full" />
                            <div className="h-12 bg-base-content/10 rounded-full" />
                        </div>
                        <div className="w-full">
                            <h3 className="font-medium mx-6 h-5 w-40 bg-base-content/10 rounded-lg" />
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" className="w-full border-t opacity-75 py-4 pl-6 pr-3 block hover:bg-base-content/10 transition">
                                    <div className="w-60 h-5 bg-base-content/10 rounded-lg" />
                                </a>
                                <a href="#" className="w-full border-t opacity-75 py-4 pl-6 pr-3 block hover:bg-base-content/10 transition">
                                    <div className="w-60 h-5 bg-base-content/10 rounded-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLoading;
