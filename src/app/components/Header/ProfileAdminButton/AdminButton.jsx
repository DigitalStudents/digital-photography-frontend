import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router";
import { MdAdminPanelSettings } from "react-icons/md";

function AdminButton({ username }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/home");
    window.location.reload();
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={
        username
      }
      variant="outline-light"
    >
      <Dropdown.Item href="/admin">Perfil Administrador</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <button onClick={handleLogout}>Cerrar Sesion</button>
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default AdminButton;
