import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { login, googleProviderLogin, loading, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Congrats! Login Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Congrats! Login Successful');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div className='container my-5'>
            <Helmet>
                <title>HR's Windows - Login</title>
            </Helmet>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <></>
            }
            <h2 className='text-center'>Login</h2>
            <ButtonGroup vertical className='w-50'>
                <Button onClick={googleLogin} variant='outline-primary' className='mb-3 fs-1 fw-bold'><FaGoogle /> Login with Google</Button>
            </ButtonGroup>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto text-start bg-light border rounded-2 p-4 fw-bold'>
                <h2 className='text-center'>Login with email and password</h2>
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
                <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
            </Form>
        </div>
    );
};

export default Login;