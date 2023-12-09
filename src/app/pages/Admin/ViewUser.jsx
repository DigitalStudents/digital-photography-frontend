import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const ViewUser= () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_USERS_URL}users`
        );
        const data = await response.json();
        const filteredUsers = data.filter((user) => !user.deleted);
        setCategories(filteredUsers);
      } catch (error) {
        console.error("Error al obtener los usuarios", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser= (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BACKEND_URL}user/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedUsers = categories.filter(
              (user) => user.id !== id
            );
            setCategories(updatedUsers);

            Swal.fire("Usero eliminado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al eliminar el user", error.message, "error");
            console.error("Error al eliminar el user", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El user no ha sido eliminado.", "error");
      }
    });
  };

  return (
    <div className="card-container" style={{ maxWidth: "150vh",height: "auto",marginBottom:"6%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email/Username</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.descripcion}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.id)}
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

export default ViewUser;
