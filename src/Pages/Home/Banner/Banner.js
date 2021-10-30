import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Carosel/carousel-1.jpg'
import img2 from '../../../Images/Carosel/carousel-2.jpg'
import img3 from '../../../Images/Carosel/carousel-3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="carousel-title">Amazing Tour In Coxs Bazar</h2>
                            <p className="carousel-description">It is famous mostly for its long natural sandy beach.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className="carousel-title">Amazing Tour In Moheskhali</h2>
                        <p className="carousel-description">Moheshkhali Island is well known to the tourists for its tranquil and enchanting beauty.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-title">Amazing Tour In Saint Martin</h2>
                        <p className="carousel-description">Saint Martin is generally known as “Narikel Zinzira” in Bengali, means 'Coconut Island' and this is the only coral reef island in Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;