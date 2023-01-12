const HowToRecord = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                    <div className="lg:py-6 lg:pr-16">
                        <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                            How to Record Screen Online
                        </h2>
                        <div className="flex shadow-2xl rounded grow border mb-3 p-2">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex text-xl text-cyan-500 font-bold items-center justify-center w-10 h-10 mx-2 bg-cyan-200 mt-8 border rounded-full">
                                        1
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold">Select Layout</p>
                                <p className="text-gray-700 font-semibold">Choose the recording mode, region, and audio settings.</p>
                            </div>
                        </div>
                        <div className="flex grow mb-3 p-2">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex text-xl text-violet-500 font-bold items-center justify-center w-10 mx-2 bg-violet-200 mt-8 h-10 border rounded-full">
                                        2
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold">Record Screen and Audio</p>
                                <p className="text-gray-700 font-semibold">Start recording your screen, webcam, and microphone after the countdown.</p>
                            </div>
                        </div>
                        <div className="flex p-2">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex text-xl text-yellow-500 font-bold items-center justify-center text-center w-10 h-10 border rounded-full mx-2 bg-yellow-200 mt-8">
                                        3
                                    </div>
                                </div>
                                <div />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold">Download & Edit</p>
                                <p className="text-gray-700 font-semibold">
                                    Stop recording, then download your screencast or edit it with a built-in video editor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                            // src="https://www.flexclip.com/next_webview/_next/static/media/stepOne.b0e34abc.png"
                            src="https://www.flexclip.com/next_webview/_next/static/media/stepThree.50412ab6.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToRecord;
