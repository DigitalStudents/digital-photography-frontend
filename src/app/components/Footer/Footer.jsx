import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import './footer.css';

const Footer = () => {

  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

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
              <li className="lifooter"><a className="linkfooter" onClick={handleOpen}>Política de privacidad</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Procesamiento de datos</a></li>
              <li className="lifooter"><a href="#" className="linkfooter">Términos y condiciones</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="firma">
        <p id="copyright"> Copyright 2023. All Rights Reserved 2023 </p>
      </section>

      <Modal show={show} onHide={handleClose} centered="true" size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{fontFamily: 'verdana'}}>

        <h5 style={{textAlign: 'center'}}>Politica de privacidad</h5>
<p style={{textAlign: 'justify'}}>El presente Política de Privacidad establece los términos en que FilmBook usa y protege la información
que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está
comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de
información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se
empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad
puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar
continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
Información que es recogida
Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto
como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario
podrá ser requerida información específica para procesar algún pedido o realizar una entrega o
facturación.</p>
<br />
<h5 style={{textAlign: 'center'}}>Uso de la información recogida</h5>
<p style={{textAlign: 'justify'}}>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible,
particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar
nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a
través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que
consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos
serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
FilmBook está altamente comprometido para cumplir con el compromiso de mantener su información
segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que
no exista ningún acceso no autorizado.</p>
<br />
<h5 style={{textAlign: 'center'}}>Cookies</h5>
<p style={{textAlign: 'justify'}}>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse
en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información
respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen
las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor
servicio personalizado de su web.</p>

<p style={{textAlign: 'justify'}}>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su
frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información
se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su
ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no
dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la
proporcione directamente . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de
navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web.</p>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Rechazar
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}

export default Footer;
