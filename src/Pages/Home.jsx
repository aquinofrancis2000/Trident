import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../Functionality/ScrollToTop';


export default function Home() {
    useEffect(() => {
        AOS.init({}); // Initialize AOS
      }, []);

    return (
        <div>
            <div className="intro-parent">
                    <div className="intro-child" data-aos="fade-left" data-aos-duration="2000">
                        <h1>Welcome to Trident!</h1>
                    </div>
                
                
            </div>
       <Footer/>
       <ScrollToTopButton/>
       </div>
    ); 
}