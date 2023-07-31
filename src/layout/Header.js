import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
    return(
        <header>
            <Navbar bg="primary" expand="lg">
                <Container className="portfolio_nav">
                    <Navbar.Brand>HW's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ml-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Profile</Nav.Link>
                        <Nav.Link>Skills</Nav.Link>
                        <Nav.Link>Career</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;