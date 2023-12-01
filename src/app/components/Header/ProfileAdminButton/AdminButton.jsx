import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AdminButton({username}) {
  return (
    <DropdownButton id="dropdown-basic-button" title={username}>
      <Dropdown.Item href="/admin">Perfil Administrador</Dropdown.Item>
    </DropdownButton>
  );
}

export default AdminButton;