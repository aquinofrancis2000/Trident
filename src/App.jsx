import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Config from "./Pages/Config"
import NavigationBar from "./components/Navigation"
import './Functionality/slider'
import './App.css';
import Portfolio from "./Pages/Portfolio"
import PortfolioFurniture from "./Functionality/PortfolioFurniture"
import PortfolioGLTF from "./Pages/PortfolioGLTF"
import GLTFViewer from "./Pages/GLTFViewer"
import Car from "./Pages/Car"
import PortfolioAR from "./Pages/PortfolioAR"
import Services from "./Pages/Services"
import '@fortawesome/fontawesome-free/css/all.css';




function App(){
  let component 
    switch (window.location.pathname){
      case "/":
        component = <Home/>
        break
       case "/portfolio/portfolioFurniture":
          component = <Portfolio/>
          break
       case "/portfolio/portfolioGLTF":
          component = <PortfolioGLTF/>
       break
       case "/portfolio/portfolioARVR":
          component = <PortfolioAR/>
       break
       case "/services/main":
        component = <Services/>
       break
       case "/gltfviewerCar":
        component = <Car/>
        break
      case "/about":
        component = <About/>
        break
      case "/configurator":
        component = <Config/> 
        break
      case "/contact":
        component = <Contact/> 
        break
      
    }



    return( 
    <> 
    <NavigationBar/>
    {component}

    </>
    )
}
export default App
