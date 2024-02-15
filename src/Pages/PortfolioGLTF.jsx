import PortfolioGLTFboxes from "../Functionality/PortfolioGLTFboxes";
import ScrollToTopButton from "../Functionality/ScrollToTop";
import SliderFurniture from "../Sliders/sliderFurniture";
import SliderGLTF from "../Sliders/sliderGLTF";
import Footer from "../components/Footer";


export default function PortfolioGLTF(){
    return(
        <div className="portfolio-container">
            <SliderGLTF />
            <PortfolioGLTFboxes/>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    )
}