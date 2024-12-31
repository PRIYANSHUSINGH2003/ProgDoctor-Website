import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ConditionsWeTreat from'../components/ConditionsWeTreat';
import OurGallery from '../components/OurGallery';
import MarqueeComponent from '../components/MarqueeComponent';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <MarqueeComponent />
            <AboutUs />
            <ConditionsWeTreat />
            <Services />
            <OurGallery />
            <Contact />
            <Testimonial />
            <Footer />
        </>
    );
}
