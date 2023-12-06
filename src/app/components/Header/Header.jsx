import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserButton from "./ProfileUserButton/UserButton";
import AdminButton from "./ProfileAdminButton/AdminButton";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultsList } from "../SearchBar/SearchResultList";
import { useState } from "react";

function Header() {
  const [results, setResults] = useState([]);
  const isAdmin = sessionStorage.getItem("role")
  const isAuth =
    sessionStorage.getItem("token") && sessionStorage.getItem("username");

  const username = sessionStorage.getItem("username");
  return (
    <Navbar
      bg="dark"
      expand="lg"
      data-bs-theme="dark"
      fixed="top"
      className="bg-body-tertiary custom-navbar"
      style={{ backgroundColor: '#0aa8bd' }}
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
            {isAuth ? (
              isAdmin === "ADMIN" ? (
                <AdminButton username={username} />
              ) : (
                <UserButton username={username} />
              )
              
            ) : (
              <>
                <Nav.Link href="/login" style={{ color: "white" }}>
                  Iniciar Sesión
                </Nav.Link>
                <Nav.Link href="/register" style={{ color: "white" }}>
                  Registrarse
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
