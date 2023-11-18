import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section className="content">
        <div className="imgfooter">
          <div className="logofooter">
            <img src="/src/app/components/Footer/svg/logo.jpeg" alt="Logo" />
          </div>
          <h1 className="contacto">contacto@filmbook.com</h1>

          <div className="iconosfooter">
            <a href="https://www.facebook.com"><img src="/src/app/components/Footer/svg/icon-facebook.svg" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/src/app/components/Footer/svg/icon-twitter.svg" alt="Twitter" /></a>
            <a href="https://www.instagram.com"><img src="/src/app/components/Footer/svg/icon-instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        <div className="menufooter">
          <nav className="navfooter">
            <ul className="ul2">
              <li className="lifooter"><a href="#" className="linkfooter">Soporte</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Preguntas frecuentes</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Tutoriales</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Mapa del sitio</a></li>
            </ul>
          </nav>

          <nav className="navfooter">
            <ul className="ul2">
              <li className="lifooter"><a href="#" className="linkfooter">Política de privacidad</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Procesamiento de datos</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Términos y condiciones</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="firma">
        <p id="copyright"> Copyright 2023. All Rights Reserved 2023 </p>
      </section>
    </footer>
  );
}

export default Footer;
