import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../../contexts/AuthProvider';
import ContentCart from './ContentCart';

const AllContents = () => {
    const { loading } = useContext(AuthContext);
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
            {
                loading ?
                    <Spinner animation="border" variant="info" />
                    :
                    <></>
            }
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                {
                    contents.map(content => <ContentCart key={content._id} content={content}></ContentCart>)
                }
            </Row>
        </div>
    );
};

export default AllContents;