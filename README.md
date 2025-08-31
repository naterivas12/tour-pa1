# EcoTurismo Perú - Aplicación React

Una aplicación web moderna desarrollada en React que promociona el turismo sostenible en Perú. Esta aplicación presenta destinos ecoturísticos, información de contacto y una experiencia de usuario completamente responsive.

## 🌿 Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación SPA**: Navegación fluida entre páginas sin recargas
- **Componentes Modulares**: Arquitectura de componentes reutilizables
- **Bootstrap Integration**: Interfaz moderna con Bootstrap 5
- **Filtros Interactivos**: Sistema de filtrado de destinos por región y actividad
- **Formularios Validados**: Formularios de contacto y newsletter con validación
- **Accesibilidad**: Implementación de mejores prácticas de accesibilidad web

## 🚀 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.js       # Barra de navegación
│   ├── Footer.js       # Pie de página
│   ├── HeroCarousel.js # Carrusel principal
│   └── DestinationCard.js # Tarjeta de destino
├── pages/              # Páginas principales
│   ├── Home.js         # Página de inicio
│   ├── Destinos.js     # Página de destinos
│   └── Contacto.js     # Página de contacto
├── utils/              # Utilidades y datos
│   └── destinationsData.js # Datos de destinos
├── App.js              # Componente principal
├── index.js            # Punto de entrada
└── index.css           # Estilos globales
```

## 📦 Dependencias Principales

- **React 19.1.1**: Biblioteca principal de UI
- **React Router DOM**: Navegación entre páginas
- **Bootstrap 5.3.8**: Framework CSS
- **React Bootstrap**: Componentes de Bootstrap para React
- **Font Awesome**: Iconos vectoriales

## 🛠️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios.\
También verás cualquier error de lint en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Optimiza la construcción para el mejor rendimiento.

### `npm test`

Ejecuta las pruebas en modo interactivo.

## 🎨 Páginas Implementadas

### 1. **Inicio (Home)**
- Carrusel hero con imágenes de destinos
- Sección de características del servicio
- Destinos destacados
- Testimonios de clientes
- Formulario de newsletter

### 2. **Destinos**
- Sistema de filtros por región y actividad
- Tarjetas expandibles con información detallada
- Mapa interactivo de ubicaciones
- Información de comunidades locales

### 3. **Contacto**
- Formulario de contacto completo con validación
- Información de contacto y ubicación
- Mapa de ubicación de oficinas
- Sección de preguntas frecuentes (FAQ)
- Enlaces a redes sociales

## 🌍 Características Sostenibles

La aplicación promueve:
- Turismo responsable y sostenible
- Apoyo a comunidades locales
- Conservación del medio ambiente
- Experiencias auténticas fuera del turismo masivo

## 🚀 Cómo Ejecutar

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

3. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

La aplicación está optimizada para:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🎯 Próximas Mejoras

- Sistema de reservas en línea
- Galería de fotos interactiva
- Blog de experiencias
- Sistema de reseñas de usuarios
- Integración con redes sociales
