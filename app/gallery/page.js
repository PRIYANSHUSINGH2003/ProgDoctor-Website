"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../gallery/Navbar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import Shortfooter from "./Shortfooter";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: "/images/gallery1.jpg",
            alt: "Physiotherapist treating knee patient",
        },
        {
            src: "/images/gallery2.jpg",
            alt: "Back therapy treatment",
        },
        {
            src: "/images/gallery3.jpg",
            alt: "Spine alignment therapy",
        },
        {
            src: "/images/gallery4.jpg",
            alt: "Neck therapy session",
        },
        {
            src: "/images/gallery5.jpg",
            alt: "Shoulder rehabilitation",
        },
        {
            src: "/images/gallery6.jpg",
            alt: "Leg injury treatment",
        },
    ];

    const testimonialVideos = [
        {
            url: "/videos/testimonial1.mp4",
            thumbnail: "/images/video-thumb1.jpg",
            title: "Recovery Journey - John's Story",
            description:
                "Hear how physiotherapy helped John recover from a severe back injury",
        },
        {
            url: "/videos/testimonial2.mp4",
            thumbnail: "/images/video-thumb2.jpg",
            title: "Sarah's Rehabilitation Success",
            description:
                "Sarah shares her experience with our shoulder rehabilitation program",
        },
    ];

    const openImage = (src) => {
        setSelectedImage(src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
                        Explore Our Gallery
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Experience the advanced facilities and specialized treatments we
                        offer.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300" 
                            style={{ position: 'relative', height: '300px' }} // Add explicit height
                            onClick={() => openImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent group-hover:from-gray-800 group-hover:to-transparent transition duration-300" />
                        </div>
                    ))}
                </div>

                {/* Video Testimonials Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                            Patient Testimonials
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                            Hear our patients share their success stories and recovery
                            journeys.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonialVideos.map((video, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl shadow-lg overflow-hidden bg-white group">
                                <div className="relative aspect-video">
                                    <video
                                        className="w-full h-full object-cover"
                                        poster={video.thumbnail}
                                        controls
                                    >
                                        <source src={video.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <BsPlayCircle className="text-white text-6xl" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full-screen Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                        onClick={closeImage}
                    >
                        <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                            <Image
                                src={selectedImage}
                                alt="Full-screen view"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                            <button
                                className="absolute top-4 right-4 text-white text-4xl"
                                onClick={closeImage}
                            >
                                <AiOutlineCloseCircle />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Shortfooter />
        </>
    );
};

export default Gallery;