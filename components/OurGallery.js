"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import { FaRegImage } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import "swiper/css/pagination";
import Image from "next/image";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (src) => {
        setSelectedImage(src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-8 sm:py-12 md:py-20 lg:py-28 bg-gradient-to-r from-green-100 via-blue-100 to-indigo-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center pb-4 sm:pb-6 md:pb-8 lg:pb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                        Our <span className="text-blue-600">Gallery</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 px-4 mb-6">
                        Explore the essence of beauty in our curated gallery, showcasing intimate moments and advanced medical care.
                    </p>
                    <div className="flex justify-center">
                        <FaRegImage className="text-4xl text-blue-600" />
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Autoplay, Pagination, Parallax]}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full pb-12">
                    {/* Swiper Slides */}
                    {[...Array(14)].map((_, index) => (
                        <SwiperSlide key={index + 1}>
                            <div className="h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full rounded-lg overflow-hidden shadow-xl transition-transform ease-in-out">
                                    <Image
                                        className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                        src={`/images/gallery${index + 1}.jpg`}
                                        alt={`Gallery image ${index + 1}`}
                                        onClick={() => openImage(`/images/gallery${index + 1}.jpg`)}
                                        fill
                                        sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw"
                                        quality={75}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Full-screen image modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={closeImage}>
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-auto rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={closeImage}
                            className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 rounded-full p-2"
                            aria-label="Close modal">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Full-screen view"
                            className="object-contain w-full h-full"
                            fill
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
