import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";

const ViewCategory = () => {
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

  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este categoria?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BACKEND_URL}categorias/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedCategorys = categories.filter(
              (category) => category.id !== id
            );
            setCategories(updatedCategorys);

            Swal.fire("Categoryo eliminado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al eliminar el categoria", error.message, "error");
            console.error("Error al eliminar el categoria", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El categoria no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <div className="card-container" style={{ maxWidth: "150vh",height: "120vh",marginBottom:"6%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.nombre}</td>
              <td>{category.descripcion}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteCategory(category.id)}
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

export default ViewCategory;
