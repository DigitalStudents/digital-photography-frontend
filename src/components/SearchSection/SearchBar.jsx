import "./SearchBar.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function SearchBar() {
  return (
    <div className="search-section">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Photography</Dropdown.Toggle>
        <Dropdown.Menu style={{ color: 'white', backgroundColor: '#0aa8bd', borderBlockColor: '#0aa8bd'}}>
          <Dropdown.Item style={{ color: 'white'}}>Digital SLR Cameras</Dropdown.Item>
          <Dropdown.Item style={{ color: 'white'}}>Mirrorless Cameras</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Pro Video</Dropdown.Toggle>
        <Dropdown.Menu style={{ color: 'white', backgroundColor: '#0aa8bd', borderBlockColor: '#0aa8bd'}}>
          <Dropdown.Item>Camcorders</Dropdown.Item>
          <Dropdown.Item>Cinema</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Drones</Dropdown.Toggle>
        <Dropdown.Menu style={{ color: 'white', backgroundColor: '#0aa8bd', borderBlockColor: '#0aa8bd'}}>
          <Dropdown.Item>Prosumer</Dropdown.Item>
          <Dropdown.Item>Cinema Profesional</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>PoV</Dropdown.Toggle>
        <Dropdown.Menu style={{ color: 'white', backgroundColor: '#0aa8bd', borderBlockColor: '#0aa8bd'}}>
          <Dropdown.Item>GoPro</Dropdown.Item>
          <Dropdown.Item>Action Cameras</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SearchBar;
