import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from '../../src/assets/images/AboutUs_one.jpg';
import '../css/About.css';

const About = () => {
    return (
        <div className="About">
            <h1>
                <span>about</span> us
            </h1>
            <div className="About-content">
                <div className="About-content_img">
                    <div className="before"></div>
                    <img src={AboutImg} alt="" />
                </div>
                <div className="About-text">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, fugiat in nemo dolores optio, deserunt minima
                        amet voluptatem delectus sequi eius dolore natus porro?
                        Omnis incidunt dicta corrupti inventore reiciendis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo, fugiat in nemo dolores optio, deserunt minima
                        amet voluptatem delectus sequi eius dolore natus porro?
                        Omnis incidunt dicta corrupti inventore reiciendis.
                    </p>
                    <Link to="/CompanyInfo">
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
