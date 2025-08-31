import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      
      {/* Sección de introducción */}
      <section className="container my-5">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Bienvenidos a EcoTurismo Perú</h2>
            <p className="lead">Descubre destinos increíbles mientras contribuyes a la conservación del medio ambiente y el desarrollo de comunidades locales.</p>
            <p>Nuestro compromiso es ofrecer experiencias turísticas sostenibles que permitan disfrutar de la riqueza natural y cultural de Perú de manera responsable.</p>
          </Col>
        </Row>
      </section>

      {/* Sección de características */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <i className="fas fa-tree fa-3x text-primary mb-3" aria-hidden="true"></i>
                  <Card.Title as="h3" className="h5">Turismo Sostenible</Card.Title>
                  <Card.Text>Todas nuestras actividades están diseñadas para minimizar el impacto ambiental y contribuir a la conservación de ecosistemas.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <i className="fas fa-users fa-3x text-primary mb-3" aria-hidden="true"></i>
                  <Card.Title as="h3" className="h5">Apoyo a Comunidades</Card.Title>
                  <Card.Text>Trabajamos directamente con comunidades locales, asegurando que los beneficios económicos lleguen a quienes preservan estos espacios.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <i className="fas fa-map-marked-alt fa-3x text-primary mb-3" aria-hidden="true"></i>
                  <Card.Title as="h3" className="h5">Experiencias Auténticas</Card.Title>
                  <Card.Text>Ofrecemos vivencias genuinas, fuera de los circuitos turísticos convencionales, para conectar realmente con la naturaleza y cultura local.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Destinos destacados */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Destinos Destacados</h2>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="destination-card">
              <Card.Img variant="top" src="https://rialta.org/wp-content/uploads/2021/08/machu-picchu-pedro-szekely-creative-commons-.jpg" alt="Santuario Histórico de Machu Picchu con ruinas incas y montañas" />
              <Card.Body>
                <Card.Title as="h3" className="h5">Machu Picchu, Cusco</Card.Title>
                <Card.Text>Ciudadela inca declarada Patrimonio de la Humanidad y una de las Siete Maravillas del Mundo Moderno.</Card.Text>
                <Button as={Link} to="/destinos#machu-picchu" variant="outline-primary">Explorar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="destination-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_fSEbi071o8Dw-inegLkcc-gRolOLkMn2A&s" alt="Lago Titicaca con islas flotantes de los Uros" />
              <Card.Body>
                <Card.Title as="h3" className="h5">Lago Titicaca, Puno</Card.Title>
                <Card.Text>El lago navegable más alto del mundo, hogar de comunidades quechuas y aymaras que mantienen tradiciones ancestrales.</Card.Text>
                <Button as={Link} to="/destinos#lago-titicaca" variant="outline-primary">Explorar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="destination-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtRKasoeuKXXmDf5RCGwcSxxr09nMC_M2ZA&s" alt="Reserva Nacional de Tambopata con río y selva amazónica" />
              <Card.Body>
                <Card.Title as="h3" className="h5">Reserva de Tambopata, Madre de Dios</Card.Title>
                <Card.Text>Una de las regiones con mayor biodiversidad de Perú, hogar de comunidades nativas que preservan la selva amazónica.</Card.Text>
                <Button as={Link} to="/destinos#tambopata" variant="outline-primary">Explorar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button as={Link} to="/destinos" variant="primary">Ver todos los destinos</Button>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Experiencias de Viajeros</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonial-item text-center p-4">
                      <p className="testimonial-text">"Una experiencia inolvidable que cambió mi forma de ver el turismo. Conocer las comunidades andinas y aprender de su relación con la naturaleza fue extraordinario."</p>
                      <p className="testimonial-author fw-bold">- María Rodríguez</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-item text-center p-4">
                      <p className="testimonial-text">"Los guías locales son increíbles, su conocimiento sobre el ecosistema amazónico y las tradiciones incas hizo que nuestro viaje fuera mucho más enriquecedor."</p>
                      <p className="testimonial-author fw-bold">- Carlos Vargas</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-item text-center p-4">
                      <p className="testimonial-text">"Me encantó saber que mi viaje contribuyó a la conservación de estos hermosos lugares. Definitivamente volveré a viajar con EcoTurismo Perú."</p>
                      <p className="testimonial-author fw-bold">- Laura Castillo</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="container my-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card>
              <Card.Body className="p-4">
                <Card.Title className="text-center">Suscríbete a nuestro boletín</Card.Title>
                <p className="text-center">Recibe información sobre nuevos destinos, promociones y consejos para viajes sostenibles.</p>
                <form id="newsletterForm" className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="tucorreo@ejemplo.com" required />
                    <div className="invalid-feedback">Por favor, introduce un correo electrónico válido.</div>
                    <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie más.</div>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="privacyCheck" required />
                    <label className="form-check-label" htmlFor="privacyCheck">Acepto la política de privacidad</label>
                    <div className="invalid-feedback">Debes aceptar la política de privacidad para continuar.</div>
                  </div>
                  <div className="d-grid">
                    <Button type="submit" variant="primary">Suscribirme</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
