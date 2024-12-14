import React from "react";
import Image from "next/image";
import { FaHandshake, FaStethoscope, FaHeart } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section id="#about" className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-16 md:py-20 transition-all duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white opacity-0 animate-fadeIn">
                            Why Shivansh Physiotherapy Centre?
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-white opacity-0 animate-fadeIn animate-delay-200">
                            Shivansh Physiotherapy Clinic helps you get back on track with life. Our highly specialized team diagnoses and treats injuries, enhances mobility, and prevents further injury. We listen to your needs and offer treatments tailored to your condition.
                        </p>
                        <div className="flex justify-center gap-6 opacity-0 animate-fadeIn animate-delay-400">
                            <button className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-orange-700 focus:bg-orange-700">
                                Contact Us
                            </button>
                            <button className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-white hover:text-black">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105">
                            <Image
                                src="/images/About.png"
                                alt="Physiotherapy Equipment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Icon Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Key Values</h3>
                    <div className="flex justify-center gap-12">
                        <div className="flex flex-col items-center text-white opacity-0 animate-fadeIn animate-delay-600">
                            <FaHandshake className="text-4xl mb-3" />
                            <p className="text-lg">Trust</p>
                        </div>
                        <div className="flex flex-col items-center text-white opacity-0 animate-fadeIn animate-delay-800">
                            <FaStethoscope className="text-4xl mb-3" />
                            <p className="text-lg">Care</p>
                        </div>
                        <div className="flex flex-col items-center text-white opacity-0 animate-fadeIn animate-delay-1000">
                            <FaHeart className="text-4xl mb-3" />
                            <p className="text-lg">Healing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
