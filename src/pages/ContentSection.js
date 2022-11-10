import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ContentSection = ({ content }) => {
    const { image, about, price } = content;
    return (
        <Card className='w-75 mx-auto'>
            <Card.Img className='' variant="top" src={image} />
            <Card.Body>
                <Card.Text>{about}</Card.Text>
                <Card.Text className='text-danger'>Price: ${price}</Card.Text>
                <Button variant="primary">Enroll Now</Button>
            </Card.Body>
        </Card>
    );
};

export default ContentSection;