import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import miLogo from "./mi-logo.ico"; // tu .ico en la misma carpeta

const Navbar = () => {
  const location = useLocation();

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Aquí SOLO invertimos el orden: primero tu logo .ico y luego la hoja + texto */}
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={miLogo} alt="Logo Vasi" style={{ width: 80, height: 80, marginRight: 8 }} />
          <i className="fas fa-leaf me-2" aria-hidden="true" style={{ fontSize: "3rem" }}></i>
          EcoTurismo Perú
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/destinos" className={location.pathname === '/destinos' ? 'active' : ''}>Destinos</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>Contacto</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
