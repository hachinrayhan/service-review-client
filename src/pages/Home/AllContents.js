import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ContentCart from './ContentCart';

const AllContents = () => {
    const [contents, setContents] = useState([]);
    const limit = 0;
    useEffect(() => {
        fetch(`https://a11-service-review-server-six.vercel.app/contents?limit=${limit}`)
            .then(res => res.json())
            .then(data => setContents(data));
    }, [limit])
    return (
        <div className='container my-5'>
            <h2>My created contents for you</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    contents.map(content => <ContentCart key={content._id} content={content}></ContentCart>)
                }
            </Row>
        </div>
    );
};

export default AllContents;