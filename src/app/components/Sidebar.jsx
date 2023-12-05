import React from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { path: "/admin/register-product", text: "Registrar producto" },
  { path: "/admin/view-product", text: "Listar productos" },
  { path: "/admin/register-category", text: "Registrar Categoria" },
  { path: "/admin/view-category", text: "Listar Categorias" },
  { path: "/admin/register-caracteristica", text: "Registrar Característica" },
  { path: "/admin/view-caracteristica", text: "Listar Características" },
  { path: "/admin/register-inventory", text: "Registrar Inventario" },
  { path: "/admin/view-reservation", text: "Listar Reservaciones" },
  { path: "/admin/register-reservation", text: "Registrar Reservacion" },
  { path: "/admin/view-user", text: "Listar Usuarios" },
  { path: "/admin/register-user", text: "Registrar Usuarios" },
];

const UserOptions = [
  { path: "/user/profile", text: "Perfil" },
  { path: "/user/favorites", text: "Productos Favoritos" },
  { path: "/user/reservations", text: "Reservaciones" },
];

const Sidebar = ({name}) => {
  const isAdmin = sessionStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <nav className="sidebar-container">
      <h4 className="sidebar-title">Hola, {name}</h4>
      <hr />
      <ul className="sidebar-box">
        {(isAdmin === 'ADMIN' ? options : UserOptions).map((option, id) => (
          <li key={id}>
            <button
              onClick={() => navigate(option.path)}
              style={{ width: "100%" }}
              type="button"
              className="btn btn-primary"
            >
              {option.text}
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
