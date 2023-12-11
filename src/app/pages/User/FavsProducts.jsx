import React, { useState, useEffect } from "react";
import ProductBox from "/src/app/components/ProductBox/ProductBox";
import "./FavsProducts.css";

export default function FavoritosList() {
  const [favoritos, setFavoritos] = useState([]);
  const userId = sessionStorage.getItem('userId');
  const productosFavsEndpoint = `${import.meta.env.VITE_BACKEND_USERS_URL}${userId}/productosFavoritos`;

  useEffect(() => {
    const fetchFavoritos = async () => {
      try {
        const response = await fetch(productosFavsEndpoint, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const favoritosData = await response.json();
          setFavoritos(favoritosData);
        } else {
          console.error('Error al obtener productos favoritos del backend');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud al backend', error);
      }
    };

    fetchFavoritos();
  }, [productosFavsEndpoint]);

  return (
    <div>
      <h2 className="favoritos-title">Tus productos favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No tienes productos favoritos</p>
      ) : (
        <div className="favoritos-list" style={{margin:"0"}}>
          {favoritos.map((favorito) => (
            <ProductBox
              key={favorito.id}
              nombre={favorito.nombre}
              id={favorito.id}
              descripcion={favorito.descripcion}
              precio_por_dia={favorito.precio}
              imagen={favorito.imagenes[0]} // Ajusta el índice según la estructura de tu producto
            />
          ))}
        </div>
      )}
    </div>
  );
}
