import React from "react";
import Progress from "../../components/ProgressBar/ProgressBar";

const ReservationConfirm = () => {
  const email = sessionStorage.getItem("username");
  return (
    <div style={{ paddingTop: "200px", textAlign: "center" }}>
      <div>
        <h4>
          ¡Haz realizado tu reserva con exito! Hemos enviado un mail a {email}{" "}
          con todos los detalles de tu reserva.
        </h4>
      </div>
      <div style={{marginBottom:"50px"}}>
        <a href="/user/reservations">Ver mis reservas</a>
      </div>
      <div className="progressBar-container">
        <Progress animated1={true} animated2={true} animated3={true}/>
      </div>
    </div>
  );
};

export default ReservationConfirm;
