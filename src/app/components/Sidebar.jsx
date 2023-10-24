import React from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { path: "/admin/register-product", text: "Registrar producto" },
  { path: "/admin/view-product", text: "Listar productos" },
  { path: "/", text: "Eliminar producto" },
];
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar-container">
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
