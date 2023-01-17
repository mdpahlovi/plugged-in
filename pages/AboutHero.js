import React from 'react';
import Button from '../components/Button/Button';
import SecButton from '../components/Button/SecButton';
import aboutImage from "../public/images/aboutus.jpg";
import recordVoice from "../public/logo/voice-recording.png";
import recordVideo from "../public/logo/videoconferencing.png";
import trimVideo from "../public/logo/video-editing.png";
import Image from 'next/image';
const AboutHero = () => {
    return (
        <header className="section-gap grid lg:grid-cols-2 gap-x-6 xl:gap-x-8 gap-y-10 items-center">
          
            <Image src={aboutImage} alt="logo" className="mx-auto rounded-lg w-full" />
            <div className="space-y-4">
                <h3 className="text-4xl font-extrabold text-left mb-0">What is Pluggedin?</h3>
                <p>PluggedIn is an online-based meeting recording web application. It is a single-page application using NextJS. There are many interesting features here, such as video audio recording, downloading recorded video, screenshot capture, video trimming, and video audio previewing. Furthermore, the numerous features make it affordable. </p>
                <div className="stats stats-vertical sm:stats-horizontal shadow w-full">
                <div className="stat">
                    <Image src={trimVideo} alt="logo" width={62} />
                        <p>Video Record</p>
                    </div>
                    <div className="stat">
                        <Image src={recordVoice} alt="logo" width={60} />
                        <p>Voice Record</p>
                    </div>
                    <div className="stat">
                    <Image src={recordVideo} alt="logo" width={60} />
                        <p>Video Record</p>
                    </div>
                    
                </div>
             
            </div>
        </header>
    );
};

export default AboutHero;