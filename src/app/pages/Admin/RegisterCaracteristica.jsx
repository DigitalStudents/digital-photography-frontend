import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const caracteristicasEndpoint = `${import.meta.env.VITE_BACKEND_URL}caracteristica`;
const initialcaracteristicaForm = {
  nombre: "",
  descripcion: "",
};

const RegisterCaracteristica = () => {
  const [caracteristicaForm, setCaracteristicaForm] = useState({ ...initialcaracteristicaForm });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const file = useRef();

  const handleChangeForm = (e) => {
    setCaracteristicaForm({
      ...caracteristicaForm,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmitForm = (e, form) => {
    e.preventDefault();
    fetch(caracteristicasEndpoint, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Caracteristica Guradada");
          Swal.fire("Caracteristica guardada con éxito!", "", "success");
          setCaracteristicaForm({ ...initialcaracteristicaForm });
        } else {
          Swal.fire(
            "Error guardando caracteristica!",
            "Ya existe la caracteristica o intenta de nuevo",
            "error"
          );
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          "Error guardando caracteristica!",
          "Ya existe la categoría o intenta de nuevo",
          "error"
        );
      });
  };

  useEffect(() => {
    const { nombre, descripcion } = caracteristicaForm;
    const validityTextFields = !!nombre && !!descripcion;

    setEnableSubmit(
      validityTextFields
    );
  }, [caracteristicaForm]);

  return (
    <section className="card-container" style={{ maxWidth: "125vh",height: "auto",marginBottom:"6%" }}>
      <h2>Registra tú Caracteristica</h2>
      <form onSubmit={(e) => handleSubmitForm(e, caracteristicaForm)}>
        <label>Nombre caracteristica: </label>
        <input
          id="nombre"
          className="form-control"
          onChange={handleChangeForm}
          value={caracteristicaForm.nombre}
        />
        <label>Descripción: </label>
        <textarea
          id="descripcion"
          className="form-control"
          onChange={handleChangeForm}
          value={caracteristicaForm.descripcion}
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

export default RegisterCaracteristica;
