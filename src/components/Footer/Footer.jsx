import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
        <section class="imgfooter">
          <div class="logofooter">
            <img src="/src/components/Footer/svg/logo.jpeg"/>
          </div>
          <h1 class="contacto">contacto@filmbook.com </h1>

            <div class="iconosfooter">
              <a href="https://www.facebook.com"><img src="/src/components/Footer/svg/icon-facebook.svg"/></a>
              
              <a href="https://www.twitter.com"><img src="/src/components/Footer/svg/icon-twitter.svg"/></a>
              
              <a href="https://www.instagram.com"><img src="/src/components/Footer/svg/icon-instagram.svg"/></a>
           </div>  
            
          </section>

          <section class="menufooter">
            <nav class="navfooter">
                <ul class="ul2">
                    <li class="lifooter"><a href="#" class="linkfooter">Soporte</a></li>
                    <li class="lifooter"><a href="#" class="linkfooter" >Preguntas frecuentes</a></li>
                    <li class="lifooter"><a href="#" class="linkfooter">Tutoriales</a></li>
                    <li class="lifooter"><a href="#" class="linkfooter">Mapa del sitio</a></li>
                </ul>
            </nav>

            <nav class="navfooter">
                <ul class="ul2">
                    <li class="lifooter"><a href="#" class="linkfooter">Política de privacidad</a></li>
                    <li class="lifooter"><a href="#" class="linkfooter">Procesamiento de datos</a></li>
                    <li class="lifooter"><a href="#" class="linkfooter">Términos y condiciones</a></li>
                </ul>
            </nav>
          <p>

          </p>
            <p id="copyright"> Copyright 2023. All Rights Reserved 2023
            </p>
    </section>
      </footer>
    );
  }

export default Footer
