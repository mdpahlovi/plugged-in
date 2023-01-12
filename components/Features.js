
import React from 'react';
import Image from "next/image";
import ScreenRecorder from "../public/images/screen-recorder.jpg";
import AudioRecorder from "../public/images/audio-recorder.jpg"
import VideoEditing from "../public/images/video-editing.jpg"
import Webcam from "../public/images/webcam.jpg"
const Features = () => {
    return (
        <div>
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Our Features</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-10">
                            <div className="w-40 h-20 rounded">
                                <Image src={ScreenRecorder} alt="" />
                            </div>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Screen Recording</h3>
                        <div className="space-y-1 leading-tight text-center">
                            <p>Capture any activities on your desktop screen and browser. Record meetings, lectures, video tutorials etc. Online screen recorder with no hassle.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-10">
                            <div className="w-40 h-20 rounded">
                                <Image src={AudioRecorder} alt="" />
                            </div>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Audio Recording</h3>
                        <div className="space-y-1 leading-tight text-center">
                            <p>Capture sounds from system/browser and microphone. Record screen with audio (internal/external) with no quality loss.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-10">
                            <div className="w-40 h-20 rounded">
                                <Image src={Webcam} alt="" />
                            </div>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Webcam Recording</h3>
                        <div className="space-y-1 leading-tight  text-center">
                            <p>Capture webcam to record screen and yourself simultaneously. Creat presentation, gameplay, reaction videos with facecam recording.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-10">
                            <div className="w-40 h-20 rounded">
                                <Image src={VideoEditing} alt="" />
                            </div>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Video Editing</h3>
                        <div className="space-y-1 leading-tight text-center">
                            <p>Create your online screen video and then you will be editing your video. it will help your video editing experience.It has no bug. So enjoy it.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
