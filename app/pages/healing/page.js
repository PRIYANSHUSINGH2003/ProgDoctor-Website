import React from "react";
import Navbar from "./Navbar";
import ShortFooter from "./ShortFooter";

const Healing = () => {
    return (
        <>
        <Navbar />
        <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-20 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-5xl font-extrabold text-white mb-6 opacity-100 animate__animated animate__fadeIn animate__delay-1s">
                    Healing Through Therapy
                </h2>
                <p className="text-xl md:text-2xl text-white mb-12 opacity-100 animate__animated animate__fadeIn animate__delay-1.5s">
                    At Shivansh Physiotherapy Centre, we focus on healing the mind and body. Our physiotherapists are skilled
                    in various therapeutic techniques to reduce pain, restore movement, and enhance your quality of life. We aim
                    for long-term healing and a better tomorrow for you.
                </p>
                <div className="flex justify-center gap-12 opacity-100 animate__animated animate__fadeIn animate__delay-2s">
                    <a
                        href="/contactus"
                        className="inline-flex items-center justify-center rounded-full bg-orange-600 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-orange-700 focus:bg-orange-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
        
        {/* Add a new section to add more contained content */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-semibold text-gray-800 mb-8">
                    Our Therapeutic Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Physical Therapy</h4>
                        <p className="text-gray-600">
                            Personalized exercises and treatments to improve mobility and alleviate pain.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Occupational Therapy</h4>
                        <p className="text-gray-600">
                            Assistance in developing skills for daily activities and enhancing quality of life.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Sports Rehabilitation</h4>
                        <p className="text-gray-600">
                            Specialized programs to recover from sports injuries and improve performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <ShortFooter />
        </>
    );
};

export default Healing;
