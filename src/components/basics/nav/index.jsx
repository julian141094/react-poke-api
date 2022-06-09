import React from "react";
import { Nav } from "react-bootstrap";

const CustomNav = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      {/* <Nav.Item>
        <Nav.Link href="/home">Ver todos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Mis Pokemons</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
};

export default CustomNav;
