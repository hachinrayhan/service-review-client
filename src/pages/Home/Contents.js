import React, { useContext, useEffect, useState } from 'react';
import ContentCart from './ContentCart';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Contents = () => {
    const { loading } = useContext(AuthContext);
    const [contents, setContents] = useState([]);
    const limit = 3;
    useEffect(() => {
        fetch(`https://a11-service-review-server-six.vercel.app/contents?limit=${limit}`)
            .then(res => res.json())
            .then(data => setContents(data));
    }, [limit])
    return (
        <div className='container my-5'>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <></>
            }
            <h2>My created contents for you</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    contents.map(content => <ContentCart key={content._id} content={content}></ContentCart>)
                }
            </Row>
            <Link to={'/contents'}><Button className='mt-3 w-25' variant="info">See All</Button></Link>
        </div>
    );
};

export default Contents;