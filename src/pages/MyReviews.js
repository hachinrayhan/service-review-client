import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [contents, setContents] = useState([]);
    const limit = 0;
    useEffect(() => {
        fetch(`https://a11-service-review-server-six.vercel.app/contents?limit=${limit}`)
            .then(res => res.json())
            .then(data => setContents(data));
    }, [limit])
    return (
        <div className='container my-5'>
            <Helmet>
                <title>HR's Windows - MyReviews</title>
            </Helmet>
            <h2>My Reviews</h2>
            {
                contents.map(content => <MyReviewsCard key={content._id} content={content}></MyReviewsCard>)
            }
        </div>
    );
};

export default MyReviews;