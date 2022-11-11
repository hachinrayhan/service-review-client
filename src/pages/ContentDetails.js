import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ContentSection from './ContentSection';
import ReviewSection from './ReviewSection';
import Form from 'react-bootstrap/Form';
import { TbSend } from 'react-icons/tb';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const ContentDetails = () => {
    const content = useLoaderData();
    const { _id, name, reviews } = content;
    const { user } = useContext(AuthContext);

    const addReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        console.log(_id, user.photoURL, user.displayName, review);
    }

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
                <div className='my-2 text-start'>
                    {
                        user?.email ?
                            <Form onSubmit={addReview}>
                                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control name='review' placeholder="Write a review" as="textarea" rows={2} />
                                </Form.Group>
                                <Button className='btn btn-primary' type="submit"><TbSend /></Button>
                            </Form>
                            :
                            <Link to={'/login'}><Button onClick={() => { toast.error('Please Login to add a review') }}>Add a review</Button></Link>
                    }
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