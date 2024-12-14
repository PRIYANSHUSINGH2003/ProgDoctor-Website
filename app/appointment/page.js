import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from '../../components/Navbar';

const Appointment = () => {
    return (
        <>
        <Navbar />
        <section id="#appointment" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 opacity-0 animate-fadeIn animate-delay-200">
                        Book Your Appointment
                    </h2>
                    <p className="text-lg md:text-xl opacity-0 animate-fadeIn animate-delay-400">
                        Schedule a session with our expert team for personalized care and
                        treatment.
                    </p>
                </div>

                {/* Form Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <div className="opacity-0 animate-fadeIn animate-delay-600">
                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-2xl text-teal-400 mr-4" />
                            <p className="text-lg">+123 456 789</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-2xl text-teal-400 mr-4" />
                            <p className="text-lg">contact@shivanshclinic.com</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaCalendarAlt className="text-2xl text-teal-400 mr-4" />
                            <p className="text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg opacity-0 animate-fadeIn animate-delay-800">
                        <h3 className="text-2xl font-semibold text-center mb-6">Schedule Now</h3>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-semibold mb-2">
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold mb-2">
                                    Additional Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="Write your message here"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Appointment;
