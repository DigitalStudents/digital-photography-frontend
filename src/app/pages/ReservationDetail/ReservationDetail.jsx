import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { format, differenceInDays } from "date-fns";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaCamera, FaCalendarAlt } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Progress from "../../components/ProgressBar/ProgressBar";
import "../../components/DatePickerBookings/DatePicker.css";

registerLocale("es", es);

const ReservationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const parts = pathname.split("/"); // Dividir la URL por las barras
  const productId = parts[parts.length - 2]; // Obtener el elemento antes del último '/'

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [product, setProduct] = useState({});

  const reservationEndpoint = `${import.meta.env.VITE_BACKEND_URL}reservations`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}productos/${productId}`
        );
        const data = await response.json();
        console.log(data); // Verifica la respuesta en la consola

        if (data) {
          setProduct(data);
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
            navigate("/reservationConfirm");
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

  const calculatePrice = (productPrice) => {
    if (startDate && endDate) {
      const daysDifference = differenceInDays(endDate, startDate);
      // Suponiendo que el precio es $12 por día
      const price = daysDifference * productPrice; // Precio final según la cantidad de días
      return price;
    }
    return 0; // Valor predeterminado si no hay fechas seleccionadas
  };

  const imagen =
    product.imagenes && product.imagenes.length > 0
      ? product.imagenes[0]
      : null;

  return (
    <section>
      <div className="reservation-container">
        <div className="reservation-data">
          <form onSubmit={handleSubmit} className="datepicker">
            <div>
              <label>
                <FaCalendarAlt /> Selecciona Fecha y Hora de Inicio:{" "}
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                timeInputLabel="Time:"
                dateFormat="yyyy-MM-dd h:mm aa"
                showTimeInput
              />
            </div>
            <div>
              <label>
                <FaCalendarAlt /> Selecciona Fecha y Hora de Fin:{" "}
              </label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                timeInputLabel="Time:"
                dateFormat="yyyy-MM-dd h:mm aa"
                showTimeInput
              />
            </div>
            <div>
              <p>
                <IoIosPricetags /> <strong>Precio Estimado: </strong>$
                {calculatePrice(product.precio)}
              </p>
            </div>

            <button type="submit">Confirmar Reserva</button>
          </form>
          <div className="data-container">
            <h4 style={{ textAlign: "center" }}>Datos de la Reserva</h4>
            <p>
              <FaUser /> <strong>Nombre completo: </strong>Tomas Esposito
            </p>
            <p>
              <MdEmail /> <strong>Email: </strong> tomyesposito15@gmail.com
            </p>
            <p>
              <FaCamera /> <strong>Producto: </strong>
              {product.nombre}
            </p>
          </div>
        </div>
        <div className="productCard-container">
          <div>
            <h4>{product.nombre} </h4>
            <img src={imagen} alt="foto producto" />
          </div>
          <div className="productCard-data">
            <p>Precio por dia: ${product.precio}</p>
            <p>{product.descripcion}</p>
          </div>
        </div>
      </div>
      <div className="progressBar-container">
        <Progress animated1={true} animated2={true} animated3={false}/>
      </div>
    </section>
  );
};

export default ReservationDetail;
