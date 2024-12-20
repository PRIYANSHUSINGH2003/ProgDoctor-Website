import { MdFlashOn } from 'react-icons/md'; // LightningBoltIcon
import { FaMobileAlt } from 'react-icons/fa'; // DeviceMobileIcon
import { FaGlobe } from 'react-icons/fa'; // GlobeAltIcon
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20 font-sans">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide text-shadow-md">
                        Your Trusted <span className="text-yellow-400">Tech Health</span> Partner
                    </h1>
                    <p className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                        Combining expertise in programming and healthcare, we bring advanced solutions for
                        managing your tech and health together. Consult now for a smarter and healthier tomorrow.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/appointment" legacyBehavior>
                            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105">
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
                            <Image
                                src="/images/hero.png"
                                width={470}
                                height={500}
                                alt="Programmer Doctor Illustration"
                                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            {/* Floating Icons */}
                            <div className="absolute top-0 left-0 animate-ping-slow">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <MdFlashOn className="h-8 w-8 text-yellow-400" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-10 animate-bounce-slow">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <FaMobileAlt className="h-8 w-8 text-green-400" />
                                </div>
                            </div>
                            <div className="absolute top-0 right-10 animate-spin-slow">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <FaGlobe className="h-8 w-8 text-blue-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
