import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}favorites`
        );
        const data = await response.json();
        const filteredFavorites = data.filter((favorite) => !favorite.deleted);
        setFavorites(filteredFavorites);
      } catch (error) {
        console.error("Error al obtener la lista de favoritos", error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveFavorite = (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres quitar este favorito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, quitarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BACKEND_URL}favorites/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedFavorites = favorites.filter(
              (favorite) => favorite.id !== id
            );
            setFavorites(updatedFavorites);

            Swal.fire("Favorito quitado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al quitar el favorito", error.message, "error");
            console.error("Error al quitar el favorito", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El favorito no ha sido quitado.", "error");
      }
    });
  };

  return (
    <div className="card-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>User ID</th>
            <th>Added Date</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <td>{favorite.id}</td>
              <td>{favorite.productId}</td>
              <td>{favorite.userId}</td>
              <td>{favorite.addedDate}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFavorite(favorite.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FavoritesList;