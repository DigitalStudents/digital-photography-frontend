import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const productsEndpoint = `${import.meta.env.VITE_BACKEND_URL}productos`;
const initialProductForm = {
  nombre: "",
  categoria: "",
  descripcion: "",
  precio: 0,
  imagenes: [],
};
const RegisterProduct = () => {
  const [productForm, setProductForm] = useState({ ...initialProductForm });
  const [enableSubmit, setEnableSubmit] = useState(false);
  const file = useRef();

  const handleChangeForm = (e) => {
    setProductForm({
      ...productForm,
      [e.target.id]: e.target.value,
    });
  };
  const handleChangeFiles = (e) => {
    const namefiles = Array.from(e.target.files).map((file) => file.name);
    setProductForm({
      ...productForm,
      imagenes: [...namefiles],
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
    const { nombre, categoria, descripcion, precio, imagenes } = productForm;
    const validityTextFields = !!nombre && !!categoria && !!descripcion;
    const validityNumberFields = precio > 0;
    const validityFiles = imagenes.length > 0;

    setEnableSubmit(
      validityTextFields && validityNumberFields && validityFiles
    );
  }, [productForm]);

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
        <input
          id="categoria"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.categoria}
        />
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
          style={{marginTop: '40px'}}
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
