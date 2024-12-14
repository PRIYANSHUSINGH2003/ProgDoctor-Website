import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className="relative w-full bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700">
            {/* Background Image */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
                <Image
                    src="/images/bg.png"
                    alt="Background"
                    fill
                    className="object-cover brightness-[0.4] transition-all duration-500"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-[1200px] opacity-0 animate-fadeIn animate-delay-200">
                        No matter whether your condition was caused by a sport, work accident or otherwise, we welcome the chance to serve you
                    </h2>
                    <Link
                        href="/contactus"
                        className="px-8 py-3 text-base border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors opacity-0 animate-fadeIn animate-delay-400"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-[#f1f1f1] py-16 md:py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
                        {/* Contact Information */}
                        <div className="w-full md:w-1/3 text-center md:text-left opacity-0 animate-fadeIn animate-delay-600">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                                <FaPhoneAlt className="text-4xl text-blue-600" />
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                                    <p className="text-lg text-gray-600">+91 9971196062</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                                <FaMapMarkerAlt className="text-4xl text-blue-600" />
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800">Location</h4>
                                    <p className="text-lg text-gray-600">A-112 JaitPur Extension Badarpur New Delhi - 110044</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <FaEnvelope className="text-4xl text-blue-600" />
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                                    <p className="text-lg text-gray-600">priyanshusingh00004@gmail.com.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Button */}
                        <div className="w-full md:w-1/3 text-center mt-12 md:mt-0 opacity-0 animate-fadeIn animate-delay-800">
                            <Link
                                href="/contactus"
                                className="px-10 py-4 text-lg font-semibold bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-200"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
