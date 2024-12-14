import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-16 px-6">
            <div className="container mx-auto text-center">
                {/* Logo or Website Name */}
                <h2 className="text-3xl font-semibold text-blue-500 mb-6">
                    Prog<span className="text-white">Doctor</span>
                </h2>

                {/* Description */}
                <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                    Bringing technology and healthcare together for a healthier and smarter tomorrow.
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <FaGithub className="h-8 w-8 transform hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <FaLinkedin className="h-8 w-8 transform hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <FaTwitter className="h-8 w-8 transform hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <FaFacebook className="h-8 w-8 transform hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300 mb-12">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul>
                            <li><a href="/blog" className="hover:text-blue-500 transition-colors duration-300">Blog</a></li>
                            <li><a href="/docs" className="hover:text-blue-500 transition-colors duration-300">Documentation</a></li>
                            <li><a href="/support" className="hover:text-blue-500 transition-colors duration-300">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul>
                            <li><a href="mailto:contact@doctorprogrammer.com" className="hover:text-blue-500 transition-colors duration-300">Email Us</a></li>
                            <li><a href="tel:+1234567890" className="hover:text-blue-500 transition-colors duration-300">Call Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4"
                            />
                            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Programmer Doctor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
