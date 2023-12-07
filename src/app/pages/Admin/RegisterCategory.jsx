import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const categorysEndpoint = `${import.meta.env.VITE_BACKEND_URL}categorias`;
const initialcategoryForm = {
  nombre: "",
  descripcion: "",
};

const RegisterCategory = () => {
  const [categoryForm, setCategoryForm] = useState({ ...initialcategoryForm });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const file = useRef();

  const handleChangeForm = (e) => {
    setCategoryForm({
      ...categoryForm,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmitForm = (e, form) => {
    e.preventDefault();
    fetch(categorysEndpoint, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Categoria Guradada");
          Swal.fire("Categoria guardada con éxito!", "", "success");
          setCategoryForm({ ...initialcategoryForm });
        } else {
          Swal.fire(
            "Error guardando categoria!",
            "Ya existe la categoria o intenta de nuevo",
            "error"
          );
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          "Error guardando categoria!",
          "Ya existe la categoría o intenta de nuevo",
          "error"
        );
      });
  };

  useEffect(() => {
    const { nombre, descripcion } = categoryForm;
    const validityTextFields = !!nombre && !!descripcion;

    setEnableSubmit(
      validityTextFields
    );
  }, [categoryForm]);

  return (
    <section className="card-container" style={{ maxWidth: "150vh",height: "70vh",marginBottom:"6%" }}>
      <h2>Registra tú Categoria</h2>
      <form onSubmit={(e) => handleSubmitForm(e, categoryForm)}>
        <label>Nombre categoria: </label>
        <input
          id="nombre"
          className="form-control"
          onChange={handleChangeForm}
          value={categoryForm.nombre}
        />
        <label>Descripción: </label>
        <textarea
          id="descripcion"
          className="form-control"
          onChange={handleChangeForm}
          value={categoryForm.descripcion}
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

export default RegisterCategory;
