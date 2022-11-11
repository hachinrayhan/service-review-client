import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const MyReviewsCard = ({ content }) => {
    const { user } = useContext(AuthContext);
    const { name, reviews } = content;
    const rvws = reviews.filter(rvws => rvws.name === user?.displayName);

    return (
        <div className='mb-3'>
            {
                rvws.length > 0 ?
                    <div className='border border-rounded'>
                        <h4>Reviews for {name}</h4>
                        {
                            rvws.map((rvw, idx) => <h6 className='bg-light p-3' key={idx}>{rvw.review} <button className='btn btn-danger'>Delete</button> <button className='btn btn-info'>Edit</button></h6>)
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default MyReviewsCard;