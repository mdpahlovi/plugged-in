import Image from 'next/image';
import React from 'react';
import heroImg from '../../public/logo/heroImage.jpg'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src={heroImg} alt="logo" />
          
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className="text-4xl font-bold">Welcome to PluggedIn!</h1>
            <p className="py-6">PluggedIn is an online base meeting recording application. Recording is more easier to use this application.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;