import react from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export const Header = (props) => {
    return (
        <div>
            <header>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/profile'>profile</Link></Nav.Link>
                            <Nav.Link><Link to='/chats'>chats</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}
