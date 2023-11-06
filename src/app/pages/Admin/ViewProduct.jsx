import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/v1/productos");
        const data = await response.json();
        const filteredProducts = data.filter((product) => !product.deleted);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchData();
  }, []);


  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/v1/productos/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedProducts = products.filter(
              (product) => product.id !== id
            );
            setProducts(updatedProducts);

            Swal.fire("Producto eliminado con éxito!", "", "success");
          })
          .catch((error) => {
            Swal.fire("Error al eliminar el producto", error.message, "error");
            console.error("Error al eliminar el producto", error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El producto no ha sido eliminado.", "error");
      }
    });
  };


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
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

export default ViewProduct;
