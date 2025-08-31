import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { destinationsData } from '../utils/destinationsData';

const Destinos = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [regionFilter, setRegionFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState('');

  const handleFilter = () => {
    let filtered = destinationsData;

    if (regionFilter) {
      filtered = filtered.filter(dest => 
        dest.category.includes(regionFilter.toLowerCase())
      );
    }

    if (activityFilter) {
      filtered = filtered.filter(dest => 
        dest.category.includes(activityFilter.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  };

  const resetFilters = () => {
    setRegionFilter('');
    setActivityFilter('');
    setFilteredDestinations(destinationsData);
  };

  return (
    <>
      {/* Cabecera */}
      <header className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4">Nuestros Destinos</h1>
              <p className="lead">Descubre los mejores lugares para practicar ecoturismo en Perú</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Filtros */}
      <section className="container my-5">
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 mb-3">Filtrar destinos</h2>
                <Form>
                  <Row className="g-3">
                    <Col md={4}>
                      <Form.Label htmlFor="regionFilter">Región</Form.Label>
                      <Form.Select 
                        id="regionFilter" 
                        value={regionFilter}
                        onChange={(e) => setRegionFilter(e.target.value)}
                      >
                        <option value="">Todas las regiones</option>
                        <option value="costa">Costa</option>
                        <option value="sierra">Sierra</option>
                        <option value="selva">Selva</option>
                        <option value="andes">Andes</option>
                      </Form.Select>
                    </Col>
                    <Col md={4}>
                      <Form.Label htmlFor="activityFilter">Actividad</Form.Label>
                      <Form.Select 
                        id="activityFilter"
                        value={activityFilter}
                        onChange={(e) => setActivityFilter(e.target.value)}
                      >
                        <option value="">Todas las actividades</option>
                        <option value="senderismo">Senderismo</option>
                        <option value="observacion">Observación de fauna</option>
                        <option value="acuaticas">Actividades acuáticas</option>
                        <option value="cultural">Turismo cultural</option>
                        <option value="arqueologia">Arqueología</option>
                      </Form.Select>
                    </Col>
                    <Col md={4} className="d-flex align-items-end">
                      <Button variant="primary" className="w-100 me-2" onClick={handleFilter}>
                        Filtrar
                      </Button>
                      <Button variant="outline-secondary" onClick={resetFilters}>
                        Limpiar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Lista de destinos */}
      <section className="container my-5">
        <Row className="g-4">
          {filteredDestinations.map((destination) => (
            <Col md={6} lg={4} key={destination.id} id={destination.id}>
              <DestinationCard destination={destination} />
            </Col>
          ))}
        </Row>
      </section>

      {/* Mapa */}
      <section className="container my-5">
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="h4 mb-4">Mapa de destinos ecoturísticos</h2>
            <div className="ratio ratio-16x9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064472.473155411!2d-77.07173273052864!3d-9.189624110562505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses!2spe!4v1625678901234!5m2!1ses!2spe"
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Mapa de destinos ecoturísticos en Perú"
              ></iframe>
            </div>
            <p className="mt-3 text-muted">Este mapa muestra la ubicación aproximada de nuestros principales destinos ecoturísticos en Perú.</p>
          </Card.Body>
        </Card>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h2>¿Listo para vivir una experiencia inolvidable?</h2>
              <p className="lead mb-4">Contáctanos para planificar tu próxima aventura ecoturística en Perú</p>
              <Button as={Link} to="/contacto" variant="light" size="lg">Contactar ahora</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Destinos;
