import React from "react";
import Marquee from "react-fast-marquee";
import { FaRegSmile, FaHeartbeat, FaHandSparkles, FaRunning } from "react-icons/fa";

const MarqueeComponent = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-5">
            <Marquee gradient={false} speed={50}>
                {[
                    { text: "Expert Care", icon: <FaRegSmile className="text-white" /> },
                    { text: "Pain Relief", icon: <FaHeartbeat className="text-white" /> },
                    { text: "Recovery", icon: <FaHandSparkles className="text-white" /> },
                    { text: "Rehabilitation", icon: <FaRunning className="text-white" /> },
                    { text: "Mobility", icon: <FaRunning className="text-white" /> },
                    { text: "Strength", icon: <FaHeartbeat className="text-white" /> },
                    { text: "Healing", icon: <FaHandSparkles className="text-white" /> },
                    { text: "Wellness", icon: <FaRegSmile className="text-white" /> },
                    { text: "Professional", icon: <FaRunning className="text-white" /> },
                    { text: "Experienced", icon: <FaHeartbeat className="text-white" /> },
                    { text: "Trusted", icon: <FaHandSparkles className="text-white" /> },
                    { text: "Personalized", icon: <FaRegSmile className="text-white" /> },
                    { text: "Effective", icon: <FaHeartbeat className="text-white" /> },
                    { text: "Results", icon: <FaRunning className="text-white" /> },
                ].map((item, index) => (
                    <span
                        key={index}
                        className="mx-6 text-xl font-semibold text-white flex items-center space-x-2"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span className="italic">{item.text}</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
