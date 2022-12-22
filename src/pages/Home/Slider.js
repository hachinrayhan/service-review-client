import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/img1.png';
import image2 from '../../images/img2.png';
import image3 from '../../images/img3.png';

const Slider = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption className="w-100 h-100 bg-dark text-white bg-opacity-25 position-absolute start-0 top-0 position-relative">
                    <div className='position-absolute bottom-0 start-50 translate-middle'>
                        <h3>Welcome to HR's Window</h3>
                        <p>You can access all of my contents from your HOME</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption className="w-100 h-100 bg-dark text-white bg-opacity-25 position-absolute start-0 top-0 position-relative">
                    <div className='position-absolute bottom-0 start-50 translate-middle'>
                        <h3>Welcome to HR's Window</h3>
                        <p>You can access all of my contents from your HOME</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='position-relative'>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption className="w-100 h-100 bg-dark text-white bg-opacity-25 position-absolute start-0 top-0 position-relative">
                    <div className='position-absolute bottom-0 start-50 translate-middle'>
                        <h3>Welcome to HR's Window</h3>
                        <p>You can access all of my contents from your HOME</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;