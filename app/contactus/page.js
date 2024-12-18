import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserMd } from "react-icons/fa";
import Navbar from '../contactus/Navbar';

const Contact = () => {
    return (
        <>
        <Navbar />
        <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center justify-center px-4">
            <div className="max-w-5xl w-full rounded-lg shadow-2xl bg-gray-900 p-8 md:p-12 animate-fade-in-up">
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-400 mb-2 flex items-center justify-center">
                        <FaUserMd className="mr-2 text-blue-400" /> Contact Me
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Get in touch with me for consultations, collaborations, or general queries.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section: Contact Details */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-blue-400 text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-gray-300">contact@doctorprogrammer.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-green-400 text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-gray-300">+1 (234) 567-890</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-red-400 text-2xl" />
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-300">
                                    123 Professional Way, Tech City, Planet Earth
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2">Your Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Your Email</label>
                            <input
                                type="email"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Your Message</label>
                            <textarea
                                rows="4"
                                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
