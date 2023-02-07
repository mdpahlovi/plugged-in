import React from "react";
import Wave from "react-wavify";

const Wavify = () => {
    return (
        <div className="-mt-20 md:-mt-16 -mb-14 sm:-mb-[72px] md:-mb-[88px] w-full">
            <Wave
                fill="url(#gradient)"
                paused={false}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 6,
                }}
            >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#816EEF" />
                        <stop offset="60%" stopColor="#201172" />
                        <stop offset="100%" stopColor="#2F0D77" />
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    );
};

export default Wavify;
