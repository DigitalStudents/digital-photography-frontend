import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "../../components/ProductList/ProductList.css";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const categoriesEndpoint = `${import.meta.env.VITE_BACKEND_URL}categorias`;

const ViewProduct = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({nombre: "xxx"});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [formNewProduct, setFormNewProduct] = useState({
    id: 0,
    nombre: "",
    precio: 0,
    descripcion: "",
    categorias: [],
  })

  useEffect(() => {

    fetch(categoriesEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("Response", resp);
        setSelectedCategory(resp[0])
        setCategories(resp);
      });

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}productos`
        );
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
        fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${id}`, {
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

  const handleClose = () => setShow(false);

  const handleChangeForm = (e) => {
    setFormNewProduct({ ...formNewProduct, [e.target.name]: e.target.value });
  }

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleSelectedCategory = (categoryId) => {
    setSelectedCategory(categories.find((c) => c.id == categoryId));
  };

  const handleUpdateProduct = () => {
    console.log(formNewProduct)
    // fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${id}`, {
    //       method: "PUT",
    //       body: formNewProduct
    //     })
    //       .then(() => {
    //         const updatedProducts = products.filter(
    //           (product) => product.id !== id
    //         );
    //         setProducts(updatedProducts);

    //         Swal.fire("Producto acutalizado con éxito!", "", "success");
    //       })
    //       .catch((error) => {
    //         Swal.fire("Error al actualizar el producto", error.message, "error");
    //       });
  };

  return (
    <div className="card-container"  style={{ maxWidth: "150vh",height: "auto",marginBottom:"6%" }}>
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
                <Button style={{ width: '80px', marginBottom:"5px" }} onClick={() => handleSelectedProduct(product)}>
                  Editar
                </Button>
                <Button style={{ width: '80px' }} variant="danger" onClick={() => handleDeleteProduct(product.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto: {selectedProduct.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                name="nombre"
                type="name"
                placeholder="Nuevo producto"
                value={formNewProduct.nombre}
                onChange={handleChangeForm}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                name="descripcion"
                type="name"
                placeholder="Alguna descripcion"
                value={formNewProduct.descripcion}
                onChange={handleChangeForm}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                name="precio"
                type="number"
                placeholder="1.00"
                value={formNewProduct.precio}
                onChange={handleChangeForm}
              />
            </Form.Group>
          </Form>

          <label>Categoría: </label>
          <Dropdown onSelect={handleSelectedCategory}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedCategory.nombre}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                categories.map((category, idx) => (
                  <Dropdown.Item eventKey={category.id}>
                    {category.nombre}
                  </Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateProduct}>
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProduct;
