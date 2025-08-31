import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';

const DestinationCard = ({ destination }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="h-100 destination-card">
      <Card.Img variant="top" src={destination.image} alt={destination.alt} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title as="h2" className="h5">{destination.title}</Card.Title>
          <Badge bg={destination.badgeColor}>{destination.region}</Badge>
        </div>
        <Card.Text>{destination.description}</Card.Text>
        
        <div className="mb-3">
          <h3 className="h6">Actividades destacadas:</h3>
          <ul className="list-unstyled">
            {destination.activities.map((activity, index) => (
              <li key={index}>
                <i className="fas fa-check-circle text-success me-2" aria-hidden="true"></i>
                {activity}
              </li>
            ))}
          </ul>
        </div>
        
        <Button
          variant="primary"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${destination.id}-details`}
        >
          Ver más detalles
        </Button>
        
        <Collapse in={open}>
          <div id={`${destination.id}-details`} className="mt-3">
            <Card className="card-body bg-light">
              <h4 className="h6">Mejor época para visitar:</h4>
              <p>{destination.bestTime}</p>
              <h4 className="h6">Nivel de dificultad:</h4>
              <p>{destination.difficulty}</p>
              <h4 className="h6">Duración recomendada:</h4>
              <p>{destination.duration}</p>
              <h4 className="h6">Comunidades locales:</h4>
              <p>{destination.communities}</p>
            </Card>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default DestinationCard;
