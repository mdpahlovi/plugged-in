import Wave from "react-wavify";
import { useTheme } from "../../hooks/useTheme";

const Wavify = () => {
    const { theme } = useTheme();

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
                        {theme === "light" ? (
                            <>
                                <stop offset="0%" stopColor="#9484d7" />
                                <stop offset="60%" stopColor="#3b28b3" />
                                <stop offset="100%" stopColor="#362c75" />
                            </>
                        ) : (
                            <>
                                <stop offset="0%" stopColor="#bcacec" />
                                <stop offset="60%" stopColor="#9b92d9" />
                                <stop offset="100%" stopColor="#7565d9" />
                            </>
                        )}
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    );
};

export default Wavify;
