import React from 'react';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Shortfooter = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Description */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Programmer <span className="text-blue-400">Doctor</span></h2>
                    <p className="text-sm">Delivering Excellence in Healthcare and Technology</p>
                </div>
                {/* Social Media Links */}
                <div className="flex space-x-4 mb-6 md:mb-0">
                    <a href="https://github.com/PRIYANSHUSINGH2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition-colors duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.facebook.com/priyanshusingh.rajawat.37" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300 transition-colors duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com/Hacker127112593" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition-colors duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshu-singh-0859211b6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition-colors duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/___priyanshusinghrajawat___/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition-colors duration-300">
                        <FaInstagram size={24} />
                    </a>
                </div>
                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Priyanshu Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Shortfooter;
