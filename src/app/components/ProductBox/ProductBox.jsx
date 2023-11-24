import React, { useState } from "react";
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
  precio_por_dia,
  isLoggedIn, 
}) {
  const [isFavorito, setIsFavorito] = useState(false);

  const handleToggleFavorito = () => {
    if (isLoggedIn) {
      setIsFavorito(!isFavorito);
      // agregar a favoritos en tu backend
    } else {
      alert("Debe iniciar sesión para agregar a favoritos");
    
    }
  };

  return (
    
    <Link className="link" to={`/product/${id}`}>
      
      <Card style={{ width: "12.5rem", height:"23rem", position: "relative" }}>
        <Card.Img style={{ width: "12.5rem", height:"12rem" }} variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="title" >{nombre}</Card.Title>
          <Card.Text className="text">Precio por día: $ {precio_por_dia}</Card.Text>
          <div className="center-button">
            <Button variant="primary" >Ver más</Button>
          </div>
        </Card.Body>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "8px",
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          onClick={handleToggleFavorito}
        >
          {isFavorito ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </Card>
    </Link>
  );
}