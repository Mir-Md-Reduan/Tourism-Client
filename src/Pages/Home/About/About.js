import React from 'react';
import './About.css';
import aboutUsImage from '../../../Images/aboutUs.jpg';

const About = () => {
    return (
        <div id="about" className="my-5" >
            <div className="container">
                <div className="row">
                    <div className=" about-container">
                        <div className="image col-lg-12 col-md-7">
                            <img src={aboutUsImage} alt="" />
                        </div>
                        <div className="about-description col-lg-12 col-md-6">
                            <h2 className="aboutUs-title">About US</h2>
                            <p className="aboutUS-description">We are Oprating Tour in Coxs Bazar as long as whole country. With pioneering in travelling sector. We have skilled Tour Operator.Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;