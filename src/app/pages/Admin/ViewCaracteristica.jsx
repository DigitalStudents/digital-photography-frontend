import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";

const ViewCaracteristica= () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}caracteristica`
        );
        const data = await response.json();
        const filteredCaracteristicas = data.filter((caracteristica) => !caracteristica.deleted);
        setCategories(filteredCaracteristicas);
      } catch (error) {
        console.error("Error al obtener las características", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCaracteristica= (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este caracteristica?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BACKEND_URL}caracteristica/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedCaracteristicas = categories.filter(
              (caracteristica) => caracteristica.id !== id
            );
            setCategories(updatedCaracteristicas);

            Swal.fire("Caracteristicao eliminado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al eliminar el caracteristica", error.message, "error");
            console.error("Error al eliminar el caracteristica", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El caracteristica no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <div className="card-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((caracteristica) => (
            <tr key={caracteristica.id}>
              <td>{caracteristica.id}</td>
              <td>{caracteristica.nombre}</td>
              <td>{caracteristica.descripcion}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteCaracteristica(caracteristica.id)}
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

export default ViewCaracteristica;
