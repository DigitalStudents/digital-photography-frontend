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

];
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar-container">
      <h4 className="sidebar-title">Hola, Admin</h4>
      <hr/>
      <ul className="sidebar-box">
        {options.map((option, id) => (
          <li key={id}>
            <button
                onClick={() => navigate(option.path)}
              style={{ width: "100%" }}
              type="button"
              className="btn btn-primary"
            >
              {option.text}
            </button>
            <hr/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
