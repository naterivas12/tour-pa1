import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <i className="fas fa-leaf me-2" aria-hidden="true"></i>
          EcoTurismo Perú
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/destinos" className={location.pathname === '/destinos' ? 'active' : ''}>
              Destinos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>
              Contacto
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
