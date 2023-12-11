import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import "./ProductBox.css"

export default function ProductBox({
  nombre,
  id,
  imagen,
  tipo,
  descripcion,
  precio_por_dia
}) {
  const [isFavorito, setIsFavorito] = useState(false);
  const isAuth = sessionStorage.getItem('token');

  useEffect(() => {
    // Check localStorage to set initial state
    const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritosLocalStorage.includes(id)) {
      setIsFavorito(true);
    }
  }, [id]);
  
  const handleToggleFavorito = async (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    if (isAuth) {
      try {
        const url = isFavorito
          ? `${import.meta.env.VITE_BACKEND_USERS_URL}removerFavorito/${id}`
          : `${import.meta.env.VITE_BACKEND_USERS_URL}agregarFavorito/${id}`;
  
        const response = await fetch(url, {
          method: "POST",
        });
  
        if (response.ok) {
          // Update local state
          setIsFavorito(!isFavorito);
  
          // Update localStorage
          const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
          localStorage.setItem(
            "favoritos",
            isFavorito
              ? JSON.stringify(favoritosLocalStorage.filter((favId) => favId !== id))
              : JSON.stringify([...favoritosLocalStorage, id])
          );
        } else {
          console.error("Error al realizar la solicitud al backend");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud al backend", error);
      }
    } else {
      alert("Debe iniciar sesión para agregar a favoritos");
    }
  };
  

  return (
    
    <Card style={{ width: "13rem", height:"23rem", position: "relative" }}>

    <Link className="link" to={`/product/${id}`} style={{marginLeft: 0, display: "contents"}}>
      
        <Card.Img style={{ width: "auto", height:"12rem" }} variant="top" src={imagen} />
        <Card.Body className="ProductCard" style={{ color: "black"}}>
          <Card.Title className="title">{nombre}</Card.Title>
          <Card.Text className="text" style={{fontWeight:500}} >Precio por día: $ {precio_por_dia}</Card.Text>
        </Card.Body>

        </Link>

        <div
        className="heart-icon-container"
        style={{
          display: "flex",
          position: "absolute",
          height: "5px",
          top: 5,
          right: 10,
          paddingBottom: 16,
          borderRadius: "100%",
          backgroundColor: "white",
          zIndex: "2"
        }}
          onMouseDown={handleToggleFavorito}
        >
          {isFavorito ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </Card>

    
  );
}