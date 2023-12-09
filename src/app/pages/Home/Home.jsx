import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../../components/ProductList/ProductList";
import Hero from "../../components/HeroBanner/Hero";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}categorias`
        );
        const data = await response.json();
        const filteredCategorys = data.filter((category) => !category.deleted);
        setCategories(filteredCategorys);
      } catch (error) {
        console.error("Error al obtener los categorias", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    
    <Navbar expand="lg" className="bg-color sticky-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto mt-0"> 
            {categories.map((c) => (
              <Nav.Link key={c.nombre} href={`/categoria/${c.nombre}`} className="me-4 font-weight-bold">
                {c.nombre}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Hero heroImage={"/camera-hero-banner.webp"} tilte={"RENTA TU CÁMARA IDEAL"} subtitle={"Lleva tus producciones a otro nivel con nuestra gran variedad de productos"} />
      
      <h1 className="title-container">Productos que pueden interesarte</h1>

      <ProductList />
    </>
  );
}

export default Home;