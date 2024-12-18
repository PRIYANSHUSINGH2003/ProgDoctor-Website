import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-6">
            <div className="container mx-auto text-center space-y-12">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-4xl font-bold text-blue-500 mb-4">
                        Programmer <span className="text-white">Doctor</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Bridging the gap between technology and healthcare to shape a smarter tomorrow.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-8">
                    {[
                        { icon: <FaGithub />, link: 'https://github.com' },
                        { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                        { icon: <FaTwitter />, link: 'https://twitter.com' },
                        { icon: <FaFacebook />, link: 'https://facebook.com' },
                    ].map(({ icon, link }, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                        >
                            <span className="text-3xl hover:scale-110 transform transition-transform duration-300">
                                {icon}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left text-gray-300">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="/blog" className="hover:text-blue-500 transition-colors duration-300">Blog</a></li>
                            <li><a href="/docs" className="hover:text-blue-500 transition-colors duration-300">Documentation</a></li>
                            <li><a href="/support" className="hover:text-blue-500 transition-colors duration-300">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li><a href="mailto:priyanshusingh00004@gmail.com" className="hover:text-blue-500 transition-colors duration-300">Email Us</a></li>
                            <li><a href="tel:+010071106062" className="hover:text-blue-500 transition-colors duration-300">Call Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Priyanshu Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
