import React from 'react';
import './ReviewSection.css';

const ReviewSection = ({ rvw }) => {
    const { photo, name, review } = rvw;
    return (
        <div className='review d-flex align-items-center border rounded p-3 mb-3'>
            <div className='border rounded-circle me-2'>
                <img src={photo} alt="" />
            </div>
            <div className='text-start'>
                <h5>{name}</h5>
                <p className='mb-0'>{review}</p>
            </div>
        </div>
    );
};

export default ReviewSection;