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

  // useEffect(() => {
  //   // Check localStorage to set initial state
  //   const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
  //   if (favoritosLocalStorage.includes(id)) {
  //     setIsFavorito(true);
  //   }
  // }, [id]);

  // const handleToggleFavorito = async (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   if (isLoggedIn) {
  //     try {
  //       const url = isFavorito
  //         ? `${import.meta.env.VITE_BACKEND_USERS_URL}removerFavorito/${id}`
  //         : `${import.meta.env.VITE_BACKEND_USERS_URL}agregarFavorito/${id}`;

  //       const response = await fetch(url, {
  //         method: "POST",
  //       });

  //       if (response.ok) {
  //         // Update local state
  //         setIsFavorito(!isFavorito);

  //         // Update localStorage
  //         const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
  //         localStorage.setItem(
  //           "favoritos",
  //           isFavorito
  //             ? JSON.stringify(favoritosLocalStorage.filter((favId) => favId !== id))
  //             : JSON.stringify([...favoritosLocalStorage, id])
  //         );
  //       } else {
  //         console.error("Error al realizar la solicitud al backend");
  //       }
  //     } catch (error) {
  //       console.error("Error al realizar la solicitud al backend", error);
  //     }
  //   } else {
  //     alert("Debe iniciar sesión para agregar a favoritos");
  //   }
  // };

  const handleToggleFavorito = (event) => {
   
    event.stopPropagation();

    if (isLoggedIn) {
      setIsFavorito(!isFavorito);
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
            zIndex: "2"
          }}
          onMouseDown={handleToggleFavorito}
        >
          {isFavorito ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </Card>
    </Link>
  );
}