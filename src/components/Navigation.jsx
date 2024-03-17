import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/Header.module.css"

function Navigation() {
  async function routeChange(route) {
    switch (route) {
      case "about":
        window.location.href = "/";
        break;
      case "portfolio":
        window.location.href = "/portfolio";
        break;
      case "contact":
        window.location.href = "/contact";
        break;
    }
  }

  return (
    <>
            <Nav.Link onClick={() => routeChange("about")} href="#about" className={`${styles.a} ${window.location.href.split("/")[3] === "" ? 'text-white text-decoration-none' : 'text-decoration-none'}`}>About Me</Nav.Link>
            <Nav.Link onClick={() => routeChange("portfolio")} href="#portfolio" className={`${styles.a} ${window.location.href.split("/")[3] === "portfolio" ? 'text-white text-decoration-none' : 'text-decoration-none'}`}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => routeChange("contact")} href="#resume" className={`${styles.a} ${window.location.href.split("/")[3] === "contact" ? 'text-white text-decoration-none' : 'text-decoration-none'}`}>Contact</Nav.Link>
    </>
  );
}

export default Navigation;
