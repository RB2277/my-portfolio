import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from "./Navigation";
import styles from "../styles/Header.module.css"


function Header() {
  return (
    <header>
  <Navbar expand="md" bg="dark" variant='dark'>
        <Container fluid className={styles.header}>
          <Navbar.Brand className={styles.name}>Riley Burns</Navbar.Brand>
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
