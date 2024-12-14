import { FaBrain, FaHeart, FaLungs, FaBone, FaStethoscope } from 'react-icons/fa';  // Icons for different conditions

export default function ConditionsWeTreat() {
    const conditions = [
        {
            icon: <FaBrain className="h-16 w-16 text-blue-600" />,
            title: 'Neurological Disorders',
            description:
                'We treat conditions related to the brain, spinal cord, and nerves, offering comprehensive care for mental health and neurological well-being.',
            image: 'https://scientificliterature.org/images/journals/neurological-disorders.jpg', // Image path
        },
        {
            icon: <FaHeart className="h-16 w-16 text-red-600" />,
            title: 'Cardiovascular Conditions',
            description:
                'Our team specializes in diagnosing and treating heart and vascular diseases, ensuring optimal heart health and prevention of heart-related issues.',
            image: 'https://media.clinicaladvisor.com/images/2017/03/29/heartillustrationts51811362_1191108.jpg', // Image path
        },
        {
            icon: <FaLungs className="h-16 w-16 text-green-500" />,
            title: 'Respiratory Disorders',
            description:
                'We provide expert care for lung diseases and respiratory conditions to improve lung function and overall quality of life.',
            image: 'https://th.bing.com/th/id/OIP.Guk_9FJIVGHltGQBMEoqHAHaE7?rs=1&pid=ImgDetMain', // Image path
        },
        {
            icon: <FaBone className="h-16 w-16 text-purple-600" />,
            title: 'Orthopedic Issues',
            description:
                'From bone fractures to joint pain, we offer advanced treatments for musculoskeletal conditions to restore mobility and alleviate discomfort.',
            image: 'https://th.bing.com/th/id/OIP.CH0J4ZNf8gOJrHUGrEtYFgHaI9?rs=1&pid=ImgDetMain', // Image path
        },
        {
            icon: <FaStethoscope className="h-16 w-16 text-teal-600" />,
            title: 'General Health Care',
            description:
                'Comprehensive health assessments, disease prevention, and personalized medical care for your overall health and well-being.',
            image: 'https://thumbs.dreamstime.com/b/view-medecine-general-healthcare-icon-displayed-technology-medical-interace-interface-m-104272875.jpg', // Image path
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-green-100 via-blue-100 to-indigo-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                    Conditions We <span className="text-blue-600">Treat</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    We offer specialized care across a wide range of medical conditions. Our expert team is
                    committed to providing innovative and personalized treatment for your health.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-6 bg-blue-200 rounded-full shadow-lg group-hover:bg-blue-300 transition-colors duration-300">
                                    {condition.icon}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative mb-6">
                                <img
                                    src={condition.image}
                                    alt={condition.title}
                                    className="w-full h-48 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {condition.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {condition.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
