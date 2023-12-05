import React, { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const layoutClass = {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
};

const UserLayout = () => {
  const [user, setUser] = useState({}); // Inicializamos user como un objeto vacío
  const idUser = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_USERS_URL}${id}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener el usuario');
        }

        const userData = await response.json();
        setUser(userData); // Asignamos directamente el usuario obtenido a setUser
      } catch (error) {
        console.error(error.message);
        // Manejo de errores: mostrar un mensaje de error, redireccionar, etc.
      }
    };

    fetchData(idUser);
  }, [idUser]);

  return (
    <Fragment>
      <section style={layoutClass}>
        <div style={{ height: "100%" }}>
          <Sidebar name={user.firstName} /> {/* Asegúrate de que user tenga la propiedad firstName */}
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </Fragment>
  );
};

export default UserLayout;

