import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ContentSection from './ContentSection';
import ReviewSection from './ReviewSection';

const ContentDetails = () => {
    const content = useLoaderData();
    const { name, reviews } = content;
    return (
        <div className='container my-5'>
            {/* Content Section */}
            <section>
                <h2>{name}</h2>
                <ContentSection content={content}></ContentSection>
            </section>
            {/* Review Section */}
            <section className='mt-5'>
                <h1>Reviews from my pupils on this course</h1>
                <div className='my-3 text-start'>
                    <Button>Add a review</Button>
                </div>
                <div>
                    {
                        reviews.map((rvw, idx) => <ReviewSection key={idx} rvw={rvw}></ReviewSection>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ContentDetails;