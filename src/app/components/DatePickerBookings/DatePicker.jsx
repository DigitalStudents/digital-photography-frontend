import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { parse, addDays } from "date-fns";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "./DatePicker.css";

registerLocale("es", es);

const DatePickerForm = ({ productId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}reservations/product/${productId}`
        );
        const data = await response.json();
        console.log(data); // Verifica la respuesta en la consola

        if (data) {
          setReservations(data);
        } else {
          console.error(
            "La respuesta de la solicitud no contiene 'nombre' esperado"
          );
        }
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
    };

    fetchData();
  }, []);

  const generateExcludedIntervals = () => {
    const excludedIntervals = reservations.map((reservation) => {
      const formattedStartDate = reservation.startDate.substring(0, 10); // Obtener solo YYYY-MM-DD
      const formattedEndDate = reservation.endDate.substring(0, 10); // Obtener solo YYYY-MM-DD

      // Convertir las cadenas de fecha en objetos de fecha
      const parsedStartDate = parse(
        formattedStartDate,
        "yyyy-MM-dd",
        new Date()
      );
      const parsedEndDate = parse(formattedEndDate, "yyyy-MM-dd", new Date());

      // Agregar un día a la fecha de fin
      const endDatePlusOneDay = addDays(parsedEndDate, 1);

      return {
        start: parsedStartDate,
        end: endDatePlusOneDay,
      };
    });

    return excludedIntervals;
  };

  return (
    <section style={{width:"100%"}}>
      <h4>Fechas Disponibles</h4>
      <div style={{width:"100%"}}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          excludeDateIntervals={generateExcludedIntervals()}
          inline
        />
      </div>
    </section>
  );
};

export default DatePickerForm;
