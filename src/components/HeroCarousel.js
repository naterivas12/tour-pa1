import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  const slides = [
    {
      image: "https://image-tc.galaxy.tf/wijpeg-7ellqz2uqv2l9plk30futx9jr/experiencias-machu-picchu_wide.jpg?crop=0%2C63%2C1200%2C675",
      alt: "Machu Picchu con niebla matutina y montañas andinas",
      title: "Descubre la belleza natural de Perú",
      subtitle: "Experiencias únicas en armonía con la naturaleza"
    },
    {
      image: "https://www.metropolitan-touring.com/wp-content/uploads/2024/04/machu-picchu-town-peru.webp",
      alt: "Lago Titicaca con botes tradicionales y montañas al fondo",
      title: "Paisajes impresionantes",
      subtitle: "Conecta con la naturaleza en entornos preservados"
    },
    {
      image: "https://denomades.imgix.net/destinos/cusco/336/plaza-city-tour-cusco.jpg?w=907&h=494&fit=crop&q=100&auto=format,compress&fm=webp",
      alt: "Turistas practicando senderismo en la Amazonía peruana",
      title: "Aventuras responsables",
      subtitle: "Actividades que respetan el medio ambiente"
    }
  ];

  return (
    <header className="hero-section">
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={slide.alt}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="d-none d-md-block">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
};

export default HeroCarousel;
