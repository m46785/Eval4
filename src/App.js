import React from 'react';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="#" className="navbar-brand">Autos M4</a>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contactanos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quote">Cotizar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#buy">Comprar un auto</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="jumbotron">
        <div className="container">
          <h1>Bienvenido al futuro automotriz</h1>
          <p>Explora tus limites con todos nuestros modelos de ultima generacion.</p>
          <a className="btn btn-primary" href="#quote">Ver modelos</a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2>Sobre nosotros</h2>
          <p>
          En Autos m4, nuestra misión es ser líderes en la industria automotriz, ofreciendo a nuestros clientes una experiencia excepcional al adquirir vehículos avanzados y sostenibles. Nos comprometemos a proporcionar productos y servicios de la más alta calidad, garantizando la satisfacción de nuestros clientes y superando constantemente sus expectativas.
          </p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2>Nuestros servicios</h2>
          <div className="service-card">
            <h3>Mantencion de autos</h3>
            <p>Brindamos servicios expertos de mantenimiento de automóviles para mantener su vehículo en las mejores condiciones.</p>
          </div>
          <div className="service-card">
            <h3>Arriendo de vehiculos</h3>
            <p>Alquile un coche para su próxima aventura o viaje de negocios a precios competitivos.</p>
          </div>
          <div className="service-card">
            <h3>Venta de vehiculos</h3>
            <p>Descubra una amplia selección de autos de alta calidad disponibles para comprar.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Contactenos</h2>
          <p>
          Para consultas o cualquier ayuda, por favor contáctenos usando la siguiente información:
          </p>
          <ul>
            <li>Email: contacto@automotilesM4.com</li>
            <li>Celular: +569 954384218</li>
            <li>Direccion: villa portal del inca, 5432</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
