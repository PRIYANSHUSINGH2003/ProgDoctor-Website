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
import Head from 'next/head';

export default function Home() {
    return (
        <>
        <Head>
         <meta name="google-adsense-account" content="ca-pub-8553283570584154" />
        {/* Google Adsense Script Tag */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8553283570584154" crossOrigin="anonymous"></script>
        </Head>
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
