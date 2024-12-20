import React from "react";
import Navbar from "../procedures/Navbar";
import Shortfooter from "./Shortfooter";
import Image from "next/image";
import { FaHandSparkles, FaRunning, FaBrain, FaBolt, FaDumbbell, FaWalking } from "react-icons/fa";

const Procedures = () => {
    const procedures = [
        {
            title: "Manual Therapy",
            description:
                "Hands-on techniques to manipulate joints and soft tissues, improving mobility and reducing pain.",
            image: "/images/manual.jpg",
            icon: <FaHandSparkles className="text-teal-500 text-4xl" />,
        },
        {
            title: "Exercise Therapy",
            description:
                "Customized exercise programs to strengthen muscles, improve flexibility and restore function.",
            image: "/images/exercise.jpg",
            icon: <FaDumbbell className="text-blue-500 text-4xl" />,
        },
        {
            title: "Electrotherapy",
            description:
                "Using electrical stimulation to reduce pain, improve circulation and promote healing.",
            image: "/images/electro.webp",
            icon: <FaBolt className="text-yellow-500 text-4xl" />,
        },
        {
            title: "Sports Rehabilitation",
            description:
                "Specialized treatment for sports injuries to help athletes return to peak performance.",
            image: "/images/sports.png",
            icon: <FaRunning className="text-red-500 text-4xl" />,
        },
        {
            title: "Neurological Rehabilitation",
            description:
                "Treatment for conditions affecting the nervous system, improving movement and coordination.",
            image: "/images/neuro.jpg",
            icon: <FaBrain className="text-purple-500 text-4xl" />,
        },
        {
            title: "Posture Correction",
            description:
                "Assessment and treatment to improve posture and prevent musculoskeletal problems.",
            image: "/images/posture.jpg",
            icon: <FaWalking className="text-green-500 text-4xl" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Navbar />
            <div className="pt-24 pb-16">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fadeInUp">
                            Our Procedures
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp animate-delay-300">
                            Discover our comprehensive range of physiotherapy treatments tailored to meet your unique needs.
                        </p>
                    </div>

                    {/* Procedures Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp animate-delay-600">
                        {procedures.map((procedure, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                {/* Image */}
                                <div className="relative h-52">
                                    <Image
                                        src={procedure.image}
                                        alt={procedure.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-center mb-4">
                                        {procedure.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 group-hover:text-teal-500 transition-colors duration-300">
                                        {procedure.title}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {procedure.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Shortfooter />
        </div>
    );
};

export default Procedures;
