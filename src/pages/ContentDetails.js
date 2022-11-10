import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentSection from './ContentSection';
import ReviewSection from './ReviewSection';

const ContentDetails = () => {
    const content = useLoaderData();
    const { name, reviews } = content;
    return (
        <div className='container my-5'>
            <section>
                <h2>{name}</h2>
                <ContentSection content={content}></ContentSection>
            </section>
            <section className='mt-4'>
                <h1>Reviews from my pupils on this course</h1>
                {
                    reviews.map((rvw, idx) => <ReviewSection key={idx} rvw={rvw}></ReviewSection>)
                }
            </section>
        </div>
    );
};

export default ContentDetails;