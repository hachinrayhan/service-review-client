import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ContentCart = ({ content }) => {
    const { name, price, image, about } = content;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>{about.slice(0, 99)}...</span> <br /> <span>Price: ${price}</span>
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ContentCart;