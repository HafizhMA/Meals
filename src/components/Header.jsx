import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Meals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="mx-3" href="#home">
              <Link to="/" className="nav-link text-decoration-none text-black">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-3">
              <Link
                to="/favorite"
                className="nav-link text-decoration-none text-black"
              >
                Favorite
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
