import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/img1.png';
import image2 from '../../images/img2.png';
import image3 from '../../images/img3.png';

const Slider = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-info'>Welcome to HR's Window</h3>
                    <p className='text-info'>You can access all of my contents from your HOME</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-info'>Welcome to HR's Window</h3>
                    <p className='text-info'>You will have a effective lesson plan</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-info'>Welcome to HR's Window</h3>
                    <p className='text-info'>You can asses yourself with different tests</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;