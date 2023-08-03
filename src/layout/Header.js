import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = ({ handleClick }) => {
    return(
        <header>
            <Navbar bg="primary" expand="lg">
                <Container className="portfolio_nav">
                    <Navbar.Brand>HW's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ml-auto">
                        <Nav.Link className='portfolio_nav_link' onClick={() => handleClick(1)}>Home</Nav.Link>
                        <Nav.Link className='portfolio_nav_link' onClick={() => handleClick(2)}>Profile</Nav.Link>
                        <Nav.Link className='portfolio_nav_link' onClick={() => handleClick(3)}>Skills</Nav.Link>
                        <Nav.Link className='portfolio_nav_link' onClick={() => handleClick(4)}>Career</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;