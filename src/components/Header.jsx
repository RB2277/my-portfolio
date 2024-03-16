import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from "./Navigation";


function Header() {
  return (
    <header>
  <Navbar expand="md" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#about">Riley Burns</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Navigation />
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>

  );
}

export default Header;
