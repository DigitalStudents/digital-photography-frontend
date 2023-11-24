import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



const DatePickerForm = ({productId}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí podrías enviar las fechas a través de una llamada a API o realizar la acción deseada
    if (startDate && endDate) {
      console.log('StartDate:', startDate);
      console.log('EndDate:', endDate);
      // Aquí puedes realizar la lógica para enviar las fechas a través de una llamada a API o realizar alguna acción
    } else {
      console.log('Por favor selecciona ambas fechas');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha de Inicio: </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="dd-MM-yyyy"
        />
      </div>
      <div>
        <label>Fecha de Fin: </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="dd-MM-yyyy"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default DatePickerForm;