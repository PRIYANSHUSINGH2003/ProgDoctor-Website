import React from "react";
import Navbar from "./Navbar";
import ShortFooter from "./ShortFooter";

const Care = () => {
    return (
        <>
        <Navbar />
        <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 py-16 md:py-20 animate__animated animate__fadeIn">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h2 className="text-5xl font-extrabold text-white mb-6 opacity-100 transform translate-y-0 animate__animated animate__fadeInUp">
                    Comprehensive Care for Your Wellness
                </h2>
                <p className="text-lg md:text-xl text-white mb-8 opacity-100 transform translate-y-0 animate__animated animate__fadeInUp animate__delay-1s">
                    At Shivansh Physiotherapy Centre, we blend advanced techniques with compassionate care to offer you
                    a holistic and personalized recovery journey. Our team is dedicated to understanding your unique needs,
                    providing the best solutions for long-term healing.
                </p>
                <div className="flex justify-center gap-8 opacity-100 transform translate-y-0 animate__animated animate__fadeInUp animate__delay-2s">
                    <a
                        href="/contactus"
                        className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-orange-700 focus:bg-orange-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
        
        {/* Additional Content Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    Why Choose Us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Experienced Professionals</h4>
                        <p className="text-gray-600">
                            Our therapists are highly skilled, with years of experience in treating a wide variety of conditions.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Tailored Treatment Plans</h4>
                        <p className="text-gray-600">
                            We create personalized treatment plans to ensure that your recovery is both effective and sustainable.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <h4 className="text-2xl font-semibold text-gray-700 mb-4">State-of-the-Art Facilities</h4>
                        <p className="text-gray-600">
                            Our clinic is equipped with the latest technology and equipment to support your recovery.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <ShortFooter />
        </>
    );
};

export default Care;
