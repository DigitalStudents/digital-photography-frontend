import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";

const ViewReservation= () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}reservations`
        );
        const data = await response.json();
        const filteredReservations = data.filter((reservation) => !reservation.deleted);
        setCategories(filteredReservations);
      } catch (error) {
        console.error("Error al obtener las características", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteReservation= (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este reservation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BACKEND_URL}reservation/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedReservations = categories.filter(
              (reservation) => reservation.id !== id
            );
            setCategories(updatedReservations);

            Swal.fire("Reservationo eliminado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al eliminar el reservation", error.message, "error");
            console.error("Error al eliminar el reservation", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El reservation no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <div className="card-container" style={{ maxWidth: "150vh",height: "320vh",marginBottom:"6%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>productID</th>
            <th>userID</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.productId}</td>
              <td>{reservation.userId}</td>
              <td>{reservation.startDate}</td>
              <td>{reservation.endDate}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteReservation(reservation.id)}
                  style={{ marginTop: "4px", marginLeft: "24%", color: "white" }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewReservation;
