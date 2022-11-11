import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const profile = { displayName: name, photoURL: photoURL }
        const email = form.email.value;
        const password = form.password.value;
        setError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(profile)
                    .then(() => { console.log('updated user') })
                    .catch(error => {
                        setError(error.message);
                    })
                toast.success('Congrats! Signup Successful');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <></>
            }
            <Form onSubmit={handleSubmit} className='container w-50 text-start my-5 bg-light border rounded-2 p-4 fw-bold'>
                <h2 className='text-center'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photourl' type="text" placeholder="Enter Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className='text-warning'>{error}</p>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
            </Form>
        </div>
    );
};

export default Signup;