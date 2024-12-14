import { FaLaptop, FaHeart, FaShieldAlt,FaStethoscope, FaBrain, FaHeartbeat, FaMicroscope, FaPrescriptionBottleAlt, FaXRay, FaUserMd, FaCapsules } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaLaptop className="h-12 w-12 text-blue-600" />,
            title: 'Tech Consultation',
            description:
                'Get expert advice on optimizing your software systems and tech infrastructure.',
        },
        {
            icon: <FaHeart className="h-12 w-12 text-red-500" />,
            title: 'Health Monitoring',
            description:
                'Track your physical and mental health with AI-powered tools for better care.',
        },
        {
            icon: <FaShieldAlt className="h-12 w-12 text-green-600" />,
            title: 'Data Security',
            description:
                'Ensure the safety of your medical and technical data with advanced encryption.',
        },
        {
            title: "General Consultation",
            description: "Comprehensive health evaluations and personalized treatment plans.",
            icon: <FaStethoscope className="text-4xl text-teal-500" />,
        },
        {
            title: "Cardiology Services",
            description: "Advanced heart care and diagnostic solutions for cardiovascular health.",
            icon: <FaHeartbeat className="text-4xl text-red-500" />,
        },
        {
            title: "Neurology",
            description: "Advanced treatments and therapies for a wide range of neurological disorders.",
            icon: <FaBrain className="text-5xl text-blue-500" />,
        },
        {
            title: "Lab Testing",
            description: "Accurate and reliable laboratory testing services for timely diagnosis.",
            icon: <FaMicroscope className="text-4xl text-blue-500" />,
        },
        {
            title: "Pharmacy Support",
            description: "Convenient in-house pharmacy services for prescribed medications.",
            icon: <FaPrescriptionBottleAlt className="text-4xl text-green-500" />,
        },
        {
            title: "Radiology",
            description: "State-of-the-art imaging services, including X-rays and MRI scans.",
            icon: <FaXRay className="text-4xl text-indigo-500" />,
        },
        {
            title: "Specialist Consultations",
            description: "Access to leading specialists across multiple medical fields.",
            icon: <FaUserMd className="text-5xl text-purple-500" />,
        },
        {
            title: "Pharmacy Services",
            description: "On-site pharmacy with a wide range of medications and health products.",
            icon: <FaCapsules className="text-5xl text-pink-500" />,
        },
        {
            title: "Laboratory Testing",
            description: "State-of-the-art lab facilities for accurate and quick diagnostic tests.",
            icon: <FaMicroscope className="text-5xl text-teal-500" />,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                    Our <span className="text-blue-600">Services</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Bridging the gap between technology and healthcare with innovative solutions tailored
                    for you. We offer expert services designed to empower your tech-driven health journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-5 bg-blue-200 rounded-full shadow-lg group-hover:bg-blue-300 transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
