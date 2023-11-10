import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const productsEndpoint = "http://localhost:8080/v1/productos";
const categorysEndpoint = "http://localhost:8080/v1/categorias";
const initialProductForm = {
  nombre: "",
  descripcion: "",
  precio: 0,
  imagenes: [],
  caracteristicas: [
    {
      id: 1,
      nombre: "Calidad HD",
      descripcion: "Mejora la imagen",
    },
  ],
  categorias: [
    {
      id: 0,
      nombre: "Selecciona Categoría",
    },
  ],
};

const RegisterProduct = () => {
  const [productForm, setProductForm] = useState({ ...initialProductForm });
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [categorys, setCategorys] = useState([]);

  const file = useRef();

  const handleChangeForm = (e) => {
    setProductForm({
      ...productForm,
      [e.target.id]: e.target.value,
    });
  };
  const updateCategory = (key, value) => {
    setProductForm({
      ...productForm,
      [key]: [{...value}]
    })
  }
  const handleChangeFiles = (e) => {
    const namefiles = Array.from(e.target.files).map((file) => file.name);
    setProductForm({
      ...productForm,
      imagenes: [...namefiles],
    });
    Array.from(e.target.files).forEach((file) => {
      fetch(productsEndpoint, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
    });
  };

  const handleSubmitForm = (e, form) => {
    e.preventDefault();
    fetch(productsEndpoint, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Product Saved");
          Swal.fire("Producto guardado con éxito!", "", "success");
          setProductForm({ ...initialProductForm });
          file.current.value = null;
        } else {
          Swal.fire(
            "Error guardando producto!",
            "Ya existe el producto o intenta de nuevo",
            "error"
          );
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          "Error guardando producto!",
          "Ya existe el producto o intenta de nuevo",
          "error"
        );
      });
  };

  useEffect(() => {
    const { nombre, categorias, descripcion, precio, imagenes } = productForm;
    const validityTextFields = !!nombre && !!categorias[0]?.nombre && !!descripcion;
    const validityNumberFields = precio > 0;
    const validityFiles = imagenes.length > 0;

    setEnableSubmit(
      validityTextFields && validityNumberFields && validityFiles
    );
  }, [productForm]);

  useEffect(() => {
    fetch(categorysEndpoint, {
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
        setCategorys(resp);
      });
  }, []);

  return (
    <section className="card-container">
      <h2>Registra tú producto</h2>
      <form onSubmit={(e) => handleSubmitForm(e, productForm)}>
        <label>Nombre producto: </label>
        <input
          id="nombre"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.nombre}
        />
        <label>Categoría: </label>
        {/*         <input
          id="categoria"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.categoria}
        />
 */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {productForm.categorias[0].nombre}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categorys.map((category, idx) => (
              <Dropdown.Item
                key={idx}
                onClick={() => updateCategory("categorias",category)}
              >
                {category.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <label>Descripción: </label>
        <textarea
          id="descripcion"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.descripcion}
        />
        <label>Precio: </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            id="precio"
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            onChange={handleChangeForm}
            value={productForm.precio}
          />
        </div>
        <label>Carga imágenes del producto: </label>
        <input
          ref={file}
          className="form-control"
          id="file"
          type="file"
          multiple
          onChange={handleChangeFiles}
        />
        <button
          type="submit"
          style={{ marginTop: "40px" }}
          className="btn btn-primary btn-lg"
          disabled={!enableSubmit}
        >
          Guardar
        </button>
      </form>
    </section>
  );
};

export default RegisterProduct;
