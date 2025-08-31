import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Accordion } from 'react-bootstrap';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    privacidad: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente. Te contactaremos pronto.');
  };

  return (
    <>
      {/* Cabecera */}
      <header className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4">Contáctanos</h1>
              <p className="lead">Estamos aquí para ayudarte a planificar tu próxima aventura ecoturística</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Sección principal de contacto */}
      <section className="container my-5">
        <Row>
          {/* Información de contacto */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h2 className="h4 mb-4">Información de contacto</h2>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-map-marker-alt fa-2x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h6">Dirección</h3>
                    <address className="mb-0">
                      Av. Arequipa 123<br />
                      Miraflores<br />
                      Lima, Perú
                    </address>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-phone fa-2x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h6">Teléfono</h3>
                    <p className="mb-0">+51 1 234 5678</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-envelope fa-2x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h6">Correo electrónico</h3>
                    <p className="mb-0">info@ecoturismoperu.com</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-clock fa-2x text-primary" aria-hidden="true"></i>
                  </div>
                  <div className="ms-3">
                    <h3 className="h6">Horario de atención</h3>
                    <p className="mb-0">Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
                
                <hr className="my-4" />
                
                <h3 className="h5 mb-3">Síguenos en redes sociales</h3>
                <div className="social-links">
                  <Button variant="outline-primary" className="me-2" aria-label="Facebook">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </Button>
                  <Button variant="outline-primary" className="me-2" aria-label="Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </Button>
                  <Button variant="outline-primary" className="me-2" aria-label="Twitter">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </Button>
                  <Button variant="outline-primary" aria-label="YouTube">
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Formulario de contacto */}
          <Col lg={7}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h4 mb-4">Envíanos un mensaje</h2>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label htmlFor="nombre">Nombre <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="apellido">Apellido <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="email">Correo electrónico <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Text className="text-muted">No compartiremos tu correo con nadie más.</Form.Text>
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="telefono">Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        pattern="[0-9]{10}"
                      />
                      <Form.Text className="text-muted">Formato: 10 dígitos sin espacios.</Form.Text>
                    </Col>
                    <Col xs={12}>
                      <Form.Label htmlFor="asunto">Asunto <span className="text-danger">*</span></Form.Label>
                      <Form.Select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="informacion">Solicitud de información</option>
                        <option value="reservacion">Reservación</option>
                        <option value="comentario">Comentario o sugerencia</option>
                        <option value="otro">Otro</option>
                      </Form.Select>
                    </Col>
                    <Col xs={12}>
                      <Form.Label htmlFor="mensaje">Mensaje <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        required
                      />
                    </Col>
                    <Col xs={12}>
                      <Form.Check
                        type="checkbox"
                        id="privacidadCheck"
                        name="privacidad"
                        checked={formData.privacidad}
                        onChange={handleInputChange}
                        label={
                          <>
                            Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos personales <span className="text-danger">*</span>
                          </>
                        }
                        required
                      />
                    </Col>
                    <Col xs={12}>
                      <Button type="submit" variant="primary" className="me-2">Enviar mensaje</Button>
                      <Button type="reset" variant="outline-secondary">Limpiar formulario</Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Mapa */}
      <section className="container my-5">
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="h4 mb-4">Encuéntranos</h2>
            <div className="ratio ratio-16x9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.664912953913!2d-77.03805548518764!3d-12.0725685914583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8199ea33425%3A0xf5e57ab0df5a5fce!2sAv.%20Arequipa%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1625678901234!5m2!1ses!2spe"
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Ubicación de nuestras oficinas en Lima, Perú"
              ></iframe>
            </div>
          </Card.Body>
        </Card>
      </section>

      {/* FAQ */}
      <section className="container my-5">
        <h2 className="h3 mb-4 text-center">Preguntas frecuentes</h2>
        <Row>
          <Col lg={10} className="mx-auto">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Qué es el ecoturismo?</Accordion.Header>
                <Accordion.Body>
                  El ecoturismo es una forma de turismo responsable que se enfoca en visitar áreas naturales conservando el medio ambiente y mejorando el bienestar de las comunidades locales. Se caracteriza por minimizar los impactos negativos en los ecosistemas, contribuir a la conservación de la biodiversidad y generar beneficios económicos para las comunidades anfitrionas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Cómo puedo reservar un tour?</Accordion.Header>
                <Accordion.Body>
                  Puedes reservar un tour de varias maneras: completando el formulario de contacto en esta página, llamándonos directamente al +51 1 234 5678, o enviándonos un correo electrónico a info@ecoturismoperu.com. Te responderemos en un plazo máximo de 24 horas con la disponibilidad y los detalles para confirmar tu reserva.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Qué debo llevar a un tour de ecoturismo?</Accordion.Header>
                <Accordion.Body>
                  Recomendamos llevar: ropa cómoda y adecuada para el clima, calzado para caminatas, protector solar biodegradable, repelente de insectos natural, sombrero o gorra, botella de agua reutilizable, cámara fotográfica, binoculares (para observación de aves), y una pequeña mochila. Dependiendo del destino específico, te proporcionaremos una lista detallada al momento de tu reserva.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Los tours son accesibles para personas con movilidad reducida?</Accordion.Header>
                <Accordion.Body>
                  Algunos de nuestros tours están adaptados para personas con movilidad reducida. Te recomendamos contactarnos directamente para discutir tus necesidades específicas y podamos recomendarte las opciones más adecuadas. Trabajamos constantemente para hacer nuestros servicios más accesibles e inclusivos.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Contacto;
