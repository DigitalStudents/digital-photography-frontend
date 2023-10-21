import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar  bg="dark" data-bs-theme="dark" fixed="top" className="custom-navbar">
      <Container>
        <Navbar className="logo" href="#home">FilmBook</Navbar>
        <Nav className="ms-auto">
          <Nav className="link" href="#home">Iniciar Sesion</Nav>
          <Nav className="link" href="#features">Registrase</Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
