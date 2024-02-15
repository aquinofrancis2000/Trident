import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../Functionality/ScrollToTop';
export default function Services(){
    useEffect(() => {
        AOS.init({}); // Initialize AOS
      }, []);

    const [activeChild, setActiveChild] = useState('div1'); // Change 'div1' to the ID of the child you want to be the primary one

    const handleClick = (targetId) => {
        setActiveChild(prevActiveChild => (prevActiveChild === targetId ? prevActiveChild : targetId));
    };

    useEffect(() => {
        const handleClick = (event) => {
          const targetID = event.target.getAttribute('data-target');
          const targetElement = document.getElementById(targetID);
    
          if (targetElement) {
            document.querySelectorAll('.info-container').forEach((info) => {
              info.style.display = 'none';
              info.classList.remove('slide-in');
            });
    
            targetElement.style.display = 'block';
            targetElement.classList.add('slide-in');
          } else {
            console.error(`Element with ID "${targetID}" not found.`);
          }
        };
    
        const buttons = document.querySelectorAll('.circular-button');
        buttons.forEach((button) => {
          button.addEventListener('click', handleClick);
        });
    
        return () => {
          buttons.forEach((button) => {
            button.removeEventListener('click', handleClick);
          });
        };
      }, []);

        const faqData = [
            {
            title: 'Why is the moon sometimes out during the day?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            {
            title: 'Why is the sky blue?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            {
                title: 'Why Trident?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            {
                title: 'Lorem Ipsum?',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            },
            
            // Add more objects for other FAQ items
        ];
        
        const [expanded, setExpanded] = useState(new Array(faqData.length).fill(false));
        
        const toggleAccordion = (index) => {
            const newExpanded = [...expanded];
            newExpanded[index] = !newExpanded[index];
            setExpanded(newExpanded);
        };
        
   return(
    <div>
        <div className="services3D-Parent">
            <img src="../public/images/services3d.jpg" alt="bg"/>
            <div className="services3D-child" >
                <h1>3D Modeling Services</h1>
                <p>We bring concepts to life</p>
                    <div className="services3D-buttons">
                        <a href="/contact"><button>Contact</button></a>
                        <a href="/portfolio/portfolioFurniture"><button>Portfolio</button></a>
                    </div>
            </div>
        </div>

        <div className="services3D-info-Container" >
            <div className="services3D-header" data-aos="fade-right" data-aos-duration="2000">
                <h1>OUR 3D MODELING SERVICES</h1>
                <p>With our extensive expertise in 3D product modeling, we excel in creating lifelike, intricate, and precise 3D 
                representations across various categories. Our foremost commitment is to present your product in the most optimal manner.</p>
            </div>
            <div className="services3D-details-parent" data-aos="zoom-in" data-aos-duration="2000">

                <div className="services3D-details-child2" id="div1" style={{ display: activeChild === 'div1' ? 'block' : 'none' }} onClick={() => handleClick('div1')}>
                    <img src="../public/images/slideShowFurniture4.jpg"  alt="child" />
                    <div className="services3D-child2-info">
                        <h1>Furniture Modeling</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem at eum praesentium iure earum eligendi reiciendis alias fugiat ipsum. Placeat autem corrupti expedita minima qui labore animi rem unde deleniti!</p>
                    </div>
                </div>

                <div className="services3D-details-child2"  id="div2" style={{ display: activeChild === 'div2' ? 'block' : 'none' }} onClick={() => handleClick('div2')}>
                    <img src="../public/images/Final Render.png" alt="child"/>
                    <div className="services3D-child2-info">
                        <h1>AR/VR Rendering</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem at eum praesentium iure earum eligendi reiciendis alias fugiat ipsum. Placeat autem corrupti expedita minima qui labore animi rem unde deleniti!</p>
                    </div>
                </div>

                <div className="services3D-details-child2" id="div3" style={{ display: activeChild === 'div3' ? 'block' : 'none' }} onClick={() => handleClick('div3')}>
                    <img src="../public/images/slideShowFurniture2.jpeg" alt="child"/>
                    <div className="services3D-child2-info">
                        <h1>3D Animations</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem at eum praesentium iure earum eligendi reiciendis alias fugiat ipsum. Placeat autem corrupti expedita minima qui labore animi rem unde deleniti!</p>
                    </div>
                </div>

                <div className="services3D-details-child2" id="div4" style={{ display: activeChild === 'div4' ? 'block' : 'none' }} onClick={() => handleClick('div4')}>
                    <img src="../public/images/Test Render.png" alt="child"/>
                    <div className="services3D-child2-info">
                        <h1>GLTF Modeling</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem at eum praesentium iure earum eligendi reiciendis alias fugiat ipsum. Placeat autem corrupti expedita minima qui labore animi rem unde deleniti!</p>
                    </div>
                </div>

                <div className="services3D-details-child" >
                    <div className="services3D-child-inner"   onClick={() => handleClick('div1')}>
                        <div className="services-image">
                        <img src="../public/images/iconPlaceholder.png" alt="place" />
                            </div>
                        
                        <h2>Modeling</h2>
                    </div>
                    <div className="services3D-child-inner" onClick={() => handleClick('div2')}>
                    <div className="services-image">
                        <img src="../public/images/iconPlaceholder.png" alt="place" />
                            </div>
                        <h2>Rendering</h2>
                    </div>
                    <div className="services3D-child-inner" onClick={() => handleClick('div3')}>
                    <div className="services-image">
                        <img src="../public/images/iconPlaceholder.png" alt="place" />
                            </div>
                        <h2>Animations</h2>
                    </div>
                    <div className="services3D-child-inner" onClick={() => handleClick('div4')}>
                    <div className="services-image">
                        <img src="../public/images/iconPlaceholder.png" alt="place" />
                            </div>
                        <h2>GLTF</h2>
                    </div>

                </div>
            </div>
        </div>

        <div class="services3D-choose-container" >
                <h1 data-aos="fade-right" data-aos-duration="2000">Why Trident?</h1>
                <p data-aos="fade-right" data-aos-duration="2000">Our team is equipped with everything needed to efficiently complete even the most complex modeling tasks and provide 3D models swiftly.</p>
                <div className="services3D-choose-parent" data-aos="zoom-in" data-aos-duration="2000">
                    
                    <div className="services3D-choose-child">
                        <img src="../public/images/icon_placeholder.png" alt="place"/>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, rem. Aliquid est eos suscipit dignissimos a nisi, pariatur 
                            ipsum fugiat esse ipsam, odio ea quia nam! Accusamus recusandae nam illum!</p>
                    </div>

                    <div className="services3D-choose-child">
                        <img src="../public/images/icon_placeholder.png" alt="place"/>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, rem. Aliquid est eos suscipit dignissimos a nisi, pariatur 
                            ipsum fugiat esse ipsam, odio ea quia nam! Accusamus recusandae nam illum!</p>
                    </div>

                    <div className="services3D-choose-child">
                        <img src="../public/images/icon_placeholder.png" alt="place"/>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, rem. Aliquid est eos suscipit dignissimos a nisi, pariatur 
                            ipsum fugiat esse ipsam, odio ea quia nam! Accusamus recusandae nam illum!</p>
                    </div>
                </div>
        </div>

        <div class="services3D-pipe-container">
        <h1 data-aos="fade-right" data-aos-duration="2000">Trident 3D Services Workflow</h1>
        <p data-aos="fade-right" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, veniam cumque illum voluptatum ratione blanditiis facilis perspiciatis? Expedita cupiditate dolorem sunt reprehenderit, incidunt vero tempore at. Iusto rerum dolor quam.</p>
            <div className="services3D-pipe-parent" data-aos="zoom-in" data-aos-duration="2000">
            
                <div className="services3D-pipe-child">
                    <img src="../public/images/line.png" alt="line"/>
                    <div className="circular-buttons">
                        <button className="circular-button" data-target="info1">1 </button>
                        <button className="circular-button" data-target="info2">2 </button>
                        <button className="circular-button" data-target="info3">3 </button>
                        <button className="circular-button" data-target="info4">4  </button>
                    </div>
                </div>

                <div className="pipeline-detail">
                    <p>Planning</p>
                    <p>Modeling</p>
                    <p>Quality Control</p>
                    <p>Delivery</p>
                </div>

                <div className="info-container" id="info1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Blanditiis fuga earum error repudiandae aliquid assumenda quibusdam sint iste culpa voluptatibus tempora veniam numquam, in minus vel nesciunt impedit harum vitae?</p>
                </div>
                <div className="info-container" id="info2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis 
                        facere dolores odio laudantium nobis animi, vero quas suscipit eaque quidem quae cumque labore</p> 
                </div>
                <div className="info-container" id="info3">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia voluptatum quisquam eveniet quos, veniam molestiae
                        excepturi deleniti! Tenetur veniam provident autem ut magni similique voluptatem eligendi dolor, aspernatur magnam.</p>
                </div>
                <div className="info-container" id="info4">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>
            </div>
        </div>

        <div className="services3D-expertise-container">
            <h1 data-aos="fade-right" data-aos-duration="2000">Our Area of Expertise in 3D Development</h1>

            <div className="services3D-expertise-parent" data-aos="zoom-in" data-aos-duration="2000">
                <div className="services3D-expertise-child">
                    <img src="../public/images/3dsmaxlogo.png" alt="3ds"/>
                    <p>3ds Max</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/Maya-Logo-2013.png" alt="3ds"/>
                    <p>Maya</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/Chaos V-Ray.png" alt="3ds"/>
                    <p>V Ray</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/blender_logo.png" alt="3ds"/>
                    <p>Blender</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/3dsmaxlogo.png" alt="3ds"/>
                    <p>3ds Max</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/Maya-Logo-2013.png" alt="3ds"/>
                    <p>Maya</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/Chaos V-Ray.png" alt="3ds"/>
                    <p>V Ray</p>
                </div>
                <div className="services3D-expertise-child">
                    <img src="../public/images/blender_logo.png" alt="3ds"/>
                    <p>Blender</p>
                </div>
                
            </div>
        </div>

        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                {/* Render accordion items using map */}
                {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <button
                    id={`accordion-button-${index}`}
                    aria-expanded={expanded[index] ? 'true' : 'false'}
                    onClick={() => toggleAccordion(index)}
                    style={{ outline: 'none' }} // Add this style to the button
                    >
                    {/* Accordion title */}
                    <span className="accordion-title">{item.title}</span>
                    <span className="icon" aria-hidden="true"></span>
                    </button>
                    {/* Accordion content */}
                    <div
                         className="accordion-content"
                         style={{
                           maxHeight: expanded[index] ? '1000px' : '0',
                           opacity: expanded[index] ? '1' : '0',
                           overflow: 'hidden',
                           transition: expanded[index] ? 'max-height 0.3s ease, opacity 0.3s ease' : 'opacity 0.3s ease',
                         }}
                        >
                    {/* FAQ content */}
                    <p>{item.content}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

    <Footer/>
    <ScrollToTopButton/>
    </div>
   );
}

