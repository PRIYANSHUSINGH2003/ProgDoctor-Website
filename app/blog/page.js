import { FaStethoscope, FaHeartbeat, FaUserMd, FaNotesMedical, FaSyringe, FaMicroscope, FaPills, FaHospital, FaAmbulance, FaBriefcaseMedical } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../blog/Navbar';
import Shortfooter from './Shortfooter';

const blogPosts = [
    {
        id: 1,
        title: 'Advancements in Cardiology',
        excerpt: 'Discover the latest technologies transforming heart care.',
        icon: <FaHeartbeat className="text-red-500" />,
        link: '/blog/advancements-in-cardiology',
    },
    {
        id: 2,
        title: 'Telemedicine: The Future of Healthcare',
        excerpt: 'How virtual consultations are reshaping patient-doctor interactions.',
        icon: <FaStethoscope className="text-blue-500" />,
        link: '/blog/telemedicine-future-healthcare',
    },
    {
        id: 3,
        title: 'Understanding Diabetes Management',
        excerpt: 'Effective strategies to manage and prevent diabetes.',
        icon: <FaSyringe className="text-green-500" />,
        link: '/blog/understanding-diabetes-management',
    },
    {
        id: 4,
        title: 'The Role of Genetics in Medicine',
        excerpt: 'Exploring how genetics influence treatment plans.',
        icon: <FaMicroscope className="text-purple-500" />,
        link: '/blog/role-of-genetics-in-medicine',
    },
    {
        id: 5,
        title: 'Mental Health Awareness',
        excerpt: 'Breaking the stigma and promoting mental well-being.',
        icon: <FaUserMd className="text-yellow-500" />,
        link: '/blog/mental-health-awareness',
    },
    {
        id: 6,
        title: 'Pediatric Care Essentials',
        excerpt: 'Key considerations for child healthcare.',
        icon: <FaPills className="text-pink-500" />,
        link: '/blog/pediatric-care-essentials',
    },
    {
        id: 7,
        title: 'Emergency Response Preparedness',
        excerpt: 'Steps to handle medical emergencies effectively.',
        icon: <FaAmbulance className="text-orange-500" />,
        link: '/blog/emergency-response-preparedness',
    },
    {
        id: 8,
        title: 'Innovations in Surgery',
        excerpt: 'Minimally invasive techniques improving recovery times.',
        icon: <FaHospital className="text-teal-500" />,
        link: '/blog/innovations-in-surgery',
    },
    {
        id: 9,
        title: 'Nutrition and Wellness',
        excerpt: 'The impact of diet on overall health.',
        icon: <FaNotesMedical className="text-indigo-500" />,
        link: '/blog/nutrition-and-wellness',
    },
    {
        id: 10,
        title: 'Occupational Health Safety',
        excerpt: 'Ensuring health in the workplace environment.',
        icon: <FaBriefcaseMedical className="text-gray-500" />,
        link: '/blog/occupational-health-safety',
    },
];

export default function Blog() {
    return (
        <>
        <Navbar />
        <section className="bg-gradient-to-r from-indigo-200 via-blue-100 to-green-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Latest Blog Posts</h2>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 p-6">
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-blue-200 rounded-full">
                                    {post.icon}
                                </div>
                                <h3 className="ml-4 text-2xl font-bold text-gray-700">{post.title}</h3>
                            </div>
                            <p className="text-gray-600 text-base mb-6">{post.excerpt}</p>
                            <Link href={post.link} legacyBehavior>
                                <a className="text-blue-500 hover:text-blue-700 font-semibold text-lg">Read More &rarr;</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Shortfooter />
        </>
    );
}
