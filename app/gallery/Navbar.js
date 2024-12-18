'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaClipboardList, FaUser,FaImages, FaComment, FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="bg-white text-primary rounded-full p-2 shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.75 9.75h4.5M9.75 12h2.25m0 3h-.75m-1.5-6a3 3 0 11-6 0 3 3 0 016 0zm9 2.25a3 3 0 11-6 0 3 3 0 016 0zm-4.5 7.5v-3.75a3 3 0 013-3h.75a3 3 0 013 3V18"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold">ProgDoc</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 items-center">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaHome className="h-5 w-5" />
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/procedures" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaClipboardList className="h-5 w-5" />
                                <span>Procedures</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaImages className="h-5 w-5" />
                                <span>Gallery</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactus" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaComment className="h-5 w-5" />
                                <span>Contact</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/appointment" legacyBehavior>
                            <a className="bg-accent text-white px-4 py-2 rounded-md hover:bg-dark transition duration-200">
                                Book Appointment
                            </a>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars className="h-6 w-6 text-white" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="bg-primary text-white md:hidden space-y-4 py-4 px-6">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaHome className="h-5 w-5" />
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/procedures" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaClipboardList className="h-5 w-5" />
                                <span>Procedures</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaImages className="h-5 w-5" />
                                <span>Gallery</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contactus" legacyBehavior>
                            <a className="flex items-center space-x-2 hover:text-accent transition duration-200">
                                <FaComment className="h-5 w-5" />
                                <span>Contact</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/appointment" legacyBehavior>
                            <a className="bg-accent text-white px-4 py-2 rounded-md hover:bg-dark transition duration-200 block text-center">
                                Book Appointment
                            </a>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
