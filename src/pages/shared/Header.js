import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

function Header() {
    const { user, logout } = useContext(AuthContext);

    const logoutUser = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">HR's Window</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link to={'/'} className='text-decoration-none text-white me-4'>Home</Link>
                        <Link to={'/contents'} className='text-decoration-none text-white me-4'>Contents</Link>
                        <Link to={'/blog'} className='text-decoration-none text-white me-4'>Blog</Link>
                        {
                            user?.email ?
                                <>
                                    <Link to={'/my-reviews'} className='text-decoration-none text-white me-4'>My Reviews</Link>
                                    <Link to={'/add-content'} className='text-decoration-none text-white me-4'>Add Content</Link>
                                    <Link onClick={logoutUser} className='text-decoration-none text-white me-4'>Logout</Link>
                                </>
                                :
                                <Link to={'/login'} className='text-decoration-none text-white me-4'>Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;