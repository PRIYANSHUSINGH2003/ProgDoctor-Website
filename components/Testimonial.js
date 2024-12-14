import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-teal-500 to-indigo-700 text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 opacity-0 animate-fadeIn animate-delay-200">
                        What Our Patients Say
                    </h2>
                    <p className="text-lg md:text-xl opacity-0 animate-fadeIn animate-delay-400">
                        Discover how we've helped people get back on their feet.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="w-full sm:w-1/2 md:w-1/3 opacity-0 animate-fadeIn animate-delay-600">
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="mb-6">
                                <FaQuoteLeft className="text-4xl text-gray-500" />
                            </div>
                            <p className="text-lg mb-4 italic">
                                "Shivansh Physiotherapy Clinic helped me recover from a serious
                                back injury. The team was extremely professional and caring. I
                                felt heard and supported throughout my journey to recovery."
                            </p>
                            <div className="flex items-center justify-start gap-2">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p className="mt-4 font-semibold">John Doe</p>
                            <p className="text-sm text-gray-600">Back Injury Recovery</p>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="w-full sm:w-1/2 md:w-1/3 opacity-0 animate-fadeIn animate-delay-800">
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="mb-6">
                                <FaQuoteLeft className="text-4xl text-gray-500" />
                            </div>
                            <p className="text-lg mb-4 italic">
                                "I was able to get back to my favorite sport after a knee
                                injury, thanks to the professional team at Shivansh
                                Physiotherapy. Their personalized care and rehabilitation
                                approach helped me recover faster than I expected."
                            </p>
                            <div className="flex items-center justify-start gap-2">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p className="mt-4 font-semibold">Jane Smith</p>
                            <p className="text-sm text-gray-600">Knee Injury Recovery</p>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="w-full sm:w-1/2 md:w-1/3 opacity-0 animate-fadeIn animate-delay-1000">
                        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="mb-6">
                                <FaQuoteLeft className="text-4xl text-gray-500" />
                            </div>
                            <p className="text-lg mb-4 italic">
                                "The physiotherapists at Shivansh Physiotherapy are true
                                professionals. I felt cared for during every session and saw
                                amazing results in a short period of time. Highly recommend!"
                            </p>
                            <div className="flex items-center justify-start gap-2">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p className="mt-4 font-semibold">Emily Johnson</p>
                            <p className="text-sm text-gray-600">Sports Injury Recovery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
