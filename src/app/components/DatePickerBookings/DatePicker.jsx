import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = ({ productId }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const reservationEndpoint = `${import.meta.env.VITE_BACKEND_URL}reservations`;

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationForm = {
      productId: productId,
      startDate: startDate,
      endDate: endDate,
    };
    // Aquí podrías enviar las fechas a través de una llamada a API o realizar la acción deseada
    if (startDate && endDate) {
      console.log("StartDate:", startDate);
      console.log("EndDate:", endDate);
      // Aquí puedes realizar la lógica para enviar las fechas a través de una llamada a API o realizar alguna acción
      fetch(reservationEndpoint, {
        method: "POST",
        body: JSON.stringify(reservationForm),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          if (resp.status === 201) {
            console.log("Reserva creada");
            Swal.fire("Reserva creada con éxito!", "", "success");
            setStartDate(null);
            setEndDate(null);
          } else {
            return resp.json().then((data) => {
              throw new Error(data.message || "Error en la solicitud");
            });
          }
        })
        .catch((err) => {
            console.error(err);
            Swal.fire("Error al crear reserva", err.message || "Error desconocido", "error");
        });
    } else {
      alert("Por favor selecciona ambas fechas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha de Inicio: </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <label>Fecha de Fin: </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default DatePickerForm;
