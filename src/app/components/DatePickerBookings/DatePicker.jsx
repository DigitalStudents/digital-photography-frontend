import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "./DatePicker.css";

registerLocale("es", es);

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
      const formattedStartDate = format(startDate, "yyyy-MM-dd HH:mm");
      const formattedEndDate = format(endDate, "yyyy-MM-dd HH:mm");

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
      alert("Por favor rellena todos los campos");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="datepicker">
        <div>
          <label>Selecciona Fecha y Hora de Inicio: </label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            timeInputLabel="Time:"
            dateFormat="yyyy-MM-dd h:mm aa"
            showTimeInput
          />
        </div>
        <div>
          <label>Fecha de Fin: </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            timeInputLabel="Time:"
            dateFormat="yyyy-MM-dd h:mm aa"
            showTimeInput
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
      <div>
        <h4>Datos de la Reserva</h4>
      </div>
    </section>
  );
};

export default DatePickerForm;
