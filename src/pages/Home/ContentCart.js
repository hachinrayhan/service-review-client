import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ContentCart = ({ content }) => {
    const { _id, name, price, image, about } = content;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>{about.slice(0, 99)}...</span> <br /> <span className='text-danger'>Price: ${price}</span>
                    </Card.Text>
                    <Link to={`/contents/${_id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ContentCart;