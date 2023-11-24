import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchBar/SearchResultList";
import { useState } from "react";

function Header() {
  const [results, setResults] = useState([]);
  return (
    <Navbar
      bg="dark"
      expand="lg"
      data-bs-theme="dark"
      fixed="top"
      className="bg-body-tertiary custom-navbar"
    >
      <Container>
        <Navbar className="logo" href="#home">
          <img src="../../public/logo.PNG" width={55} height={30} alt="" />
          <Link to="/" className="logo">
            FilmBook
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/*         <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form> */}

          <Form className="d-flex ms-auto">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </Form>

          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/login" style={{color: 'white'}}>Iniciar Sesion</Nav.Link>
            <Nav.Link href="/register" style={{color: 'white'}}>Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
