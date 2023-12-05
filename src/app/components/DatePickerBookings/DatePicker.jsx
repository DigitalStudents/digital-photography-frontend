import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

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
    if (startDate && endDate) {
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
      
      const reservationForm = {
        productId: productId,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      };

      fetch(reservationEndpoint, {
        method: "POST",
        body: JSON.stringify(reservationForm),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          if (resp.status === 200) {
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
          Swal.fire(
            "Error al crear reserva",
            err.message || "Error desconocido",
            "error"
          );
        });
    } else {
      alert("Por favor selecciona ambas fechas");
    }
  }



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
