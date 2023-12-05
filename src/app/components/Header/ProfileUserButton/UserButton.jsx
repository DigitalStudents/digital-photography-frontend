import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function UserButton({username}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/home");
        window.location.reload();
    }
  return (
    <DropdownButton id="dropdown-basic-button" title={username} variant="outline-light">
      <Dropdown.Item href="/user/profile">Perfil</Dropdown.Item>
      <Dropdown.Item href="/user/favorites">Favoritos</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Reservas</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <button onClick={handleLogout}>
            Cerrar Sesion
        </button>
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default UserButton;