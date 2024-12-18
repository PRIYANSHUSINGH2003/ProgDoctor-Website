import { MdFlashOn } from 'react-icons/md';  // for LightningBoltIcon
import { FaMobileAlt } from 'react-icons/fa'; // for DeviceMobileIcon
import { FaGlobe } from 'react-icons/fa';    // for GlobeAltIcon
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-blue-50 text-gray-800 py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Your Trusted <span className="text-blue-600">Tech Health</span> Partner
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Combining expertise in programming and healthcare, we bring advanced solutions for
                        managing your tech and health together. Consult now for a smarter and healthier tomorrow.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/appointment" legacyBehavior>
                            <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105">
                                Get Started
                            </button>
                        </Link>
                        <button className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image/Icons Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative">
                    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                        <div className="relative">
                            <img
                                src="https://th.bing.com/th/id/OIP.T1nqAj23TI1-5zmL1fcXPwHaHa?rs=1&pid=ImgDetMain"
                                alt="Programmer Doctor Illustration"
                                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            {/* Floating Icons */}
                            <div className="absolute top-0 left-0 animate-bounce">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <MdFlashOn className="h-8 w-8 text-blue-600" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-10 animate-pulse">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <FaMobileAlt className="h-8 w-8 text-green-600" />
                                </div>
                            </div>
                            <div className="absolute top-0 right-10 animate-spin-slow">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <FaGlobe className="h-8 w-8 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
