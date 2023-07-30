import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return(
        <header>
            <Navbar bg="primary" expand="lg">
                <Container>
                <Navbar.Brand>PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ml-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Skills</Nav.Link>
                    <Nav.Link>Project</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;