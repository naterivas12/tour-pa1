import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="h5 mb-3">EcoTurismo Perú</h3>
            <p>Promoviendo un turismo responsable y sostenible en Perú desde 2010.</p>
            <ul className="list-inline social-links">
              <li className="list-inline-item">
                <a href="#" className="text-white" aria-label="Facebook">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white" aria-label="Instagram">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white" aria-label="Twitter">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="h5 mb-3">Enlaces rápidos</h3>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="text-white">Inicio</Link></li>
              <li><Link to="/destinos" className="text-white">Destinos</Link></li>
              <li><Link to="/contacto" className="text-white">Contacto</Link></li>
              <li><a href="#" className="text-white">Política de privacidad</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="h5 mb-3">Contacto</h3>
            <address>
              <p><i className="fas fa-map-marker-alt me-2" aria-hidden="true"></i> Av. Arequipa 123, Lima, Perú</p>
              <p><i className="fas fa-phone me-2" aria-hidden="true"></i> +51 1 234 5678</p>
              <p><i className="fas fa-envelope me-2" aria-hidden="true"></i> info@ecoturismoperu.com</p>
            </address>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 EcoTurismo Perú. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
