import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import './footer.css';
import facebookLogo from '/src/assets/images/icon-facebook.svg'
import twitterLogo from '/src/assets/images/icon-twitter.svg'
import instagramLogo from '/src/assets/images/icon-instagram.svg'
import footerLogo from '/src/assets/images/footerLogo.jpeg'

const Footer = () => {

  const [show, setShow] = useState(false);
  const [showTerminosModal, setShowTerminosModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showDataProcessingModal, setShowDataProcessingModal] = useState(false);
  const [showTutorialsModal, setShowTutorialsModal] = useState(false);
  const [showSiteMapModal, setShowSiteMapModal] = useState(false);


  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleOpenTerminos = () => setShowTerminosModal(true);
  const handleCloseTerminos = () => setShowTerminosModal(false);

  const handleOpenFAQ = () => setShowFAQModal(true);
  const handleCloseFAQ = () => setShowFAQModal(false);

  const handleOpenSupport = () => setShowSupportModal(true);
  const handleCloseSupport = () => setShowSupportModal(false);

  const handleOpenDataProcessing = () => setShowDataProcessingModal(true);
  const handleCloseDataProcessing = () => setShowDataProcessingModal(false);

  const handleOpenTutorials = () => setShowTutorialsModal(true);
  const handleCloseTutorials = () => setShowTutorialsModal(false);

  const handleOpenSiteMap = () => setShowSiteMapModal(true);
  const handleCloseSiteMap = () => setShowSiteMapModal(false);

  return (
    <footer>
      <section className="content">
        <div className="imgfooter">
          <div className="logofooter">
            <img src={footerLogo} alt="Logo" />
          </div>
          <h1 className="contacto">contacto@filmbook.com</h1>

          <div className="iconosfooter">
            <a href="https://www.facebook.com"><img src={facebookLogo} alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src={twitterLogo} alt="Twitter" /></a>
            <a href="https://www.instagram.com"><img src={instagramLogo} alt="Instagram" /></a>
          </div>
        </div>

        <div className="menufooter">
          <nav className="navfooter">
            <ul className="ul2">
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenSupport}>Soporte</a></li>
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenFAQ}>Preguntas Frecuentes</a></li>
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenTutorials}>Tutoriales</a></li>
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenSiteMap}>Mapa del sitio</a></li>
            </ul>
          </nav>

          <nav className="navfooter">
            <ul className="ul2">
              <li className="lifooter"><a className="linkfooter" onClick={handleOpen}>Política de privacidad</a></li>
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenDataProcessing}>Procesamiento de datos</a></li>
              <li className="lifooter"><a className="linkfooter" onClick={handleOpenTerminos}>Términos y condiciones</a></li>
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

      <Modal show={showTerminosModal} onHide={handleCloseTerminos} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Términos y condiciones</h5>

    <p style={{ textAlign: 'justify' }}>
      Bienvenido a FilmBook. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones. Lea detenidamente la siguiente información antes de continuar utilizando nuestros servicios.
    </p>

    <h6>1. Uso del sitio web</h6>
    <p style={{ textAlign: 'justify' }}>
      El uso de este sitio web está sujeto a las siguientes condiciones de uso:
      <ul>
        <li>La información proporcionada en este sitio web es solo para fines generales. Está sujeta a cambios sin previo aviso.</li>
        <li>Ni nosotros ni terceros garantizamos la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio para cualquier propósito particular.</li>
        <li>Usted reconoce que dicha información y materiales pueden contener inexactitudes o errores, y excluimos expresamente la responsabilidad por cualquier inexactitud o error en la máxima medida permitida por la ley.</li>
      </ul>
    </p>

    <h6>2. Privacidad</h6>
    <p style={{ textAlign: 'justify' }}>
      Su privacidad es importante para nosotros. Al utilizar nuestro sitio, usted acepta las prácticas descritas en nuestra política de privacidad. Revise nuestra política de privacidad para obtener más información sobre cómo recopilamos y utilizamos la información.
    </p>

  
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseTerminos}>
      Aceptar
    </Button>
    <Button variant="secondary" onClick={handleCloseTerminos}>
      Rechazar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showFAQModal} onHide={handleCloseFAQ} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Preguntas frecuentes</h5>

    <p style={{ textAlign: 'justify' }}>
      ¡Bienvenido a nuestra sección de Preguntas Frecuentes (FAQ)! Aquí encontrarás respuestas a las preguntas más comunes que nuestros usuarios suelen tener.
    </p>

    <h6>1. ¿Cómo puedo registrarme en FilmBook?</h6>
    <p style={{ textAlign: 'justify' }}>
      Para registrarte en FilmBook, sigue estos sencillos pasos: ...
    </p>

    <h6>2. ¿Cómo restablezco mi contraseña?</h6>
    <p style={{ textAlign: 'justify' }}>
      Si olvidaste tu contraseña, puedes restablecerla haciendo lo siguiente: ...
    </p>

    <h6>3. ¿Cómo puedo subir mi propio contenido multimedia?</h6>
    <p style={{ textAlign: 'justify' }}>
      Para compartir tu contenido en FilmBook, inicia sesión y navega a la sección de carga. Desde allí, sigue las indicaciones para cargar tu contenido multimedia.
    </p>

    <h6>4. ¿Cuáles son las ventajas de ser un miembro premium?</h6>
    <p style={{ textAlign: 'justify' }}>
      Los miembros premium disfrutan de beneficios exclusivos, como acceso anticipado a contenido, calidad de transmisión mejorada y descuentos en eventos especiales. Para obtener más información, visita nuestra página de membresía premium.
    </p>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseFAQ}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showSupportModal} onHide={handleCloseSupport} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Soporte</h5>

    <p style={{ textAlign: 'justify' }}>
      Si tiene algún problema, por favor, no dude en enviar un correo electrónico a <a href="mailto:contacto@filmbook.com">contacto@filmbook.com</a>. Estamos aquí para ayudarle y resolver cualquier inconveniente que pueda tener.
    </p>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseSupport}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showDataProcessingModal} onHide={handleCloseDataProcessing} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Procesamiento de datos</h5>

    <p style={{ textAlign: 'justify' }}>
      En FilmBook, nos tomamos en serio la privacidad y la seguridad de sus datos. El procesamiento de datos se realiza de acuerdo con las leyes de protección de datos aplicables. Si tiene preguntas sobre cómo procesamos y protegemos sus datos personales, no dude en contactarnos en <a href="mailto:contacto@filmbook.com">contacto@filmbook.com</a>.
    </p>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseDataProcessing}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showTutorialsModal} onHide={handleCloseTutorials} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Tutoriales</h5>

    <p style={{ textAlign: 'justify' }}>
      Bienvenido a nuestra sección de Tutoriales. Aquí encontrarás guías paso a paso y recursos útiles para aprovechar al máximo la experiencia en FilmBook. Si tienes alguna pregunta específica o necesitas ayuda adicional, no dudes en ponerte en contacto con nosotros en <a href="mailto:contacto@filmbook.com">contacto@filmbook.com</a>.
    </p>

    <h6>Cómo empezar</h6>
    <p style={{ textAlign: 'justify' }}>
      Si eres nuevo en FilmBook, este tutorial te guiará a través de los primeros pasos para comenzar a explorar y compartir contenido.
    </p>

    <h6>Cómo cargar tu propio contenido</h6>
    <p style={{ textAlign: 'justify' }}>
      Aprende cómo subir tus propias fotos y videos a FilmBook con nuestro tutorial detallado sobre el proceso de carga.
    </p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseTutorials}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showSiteMapModal} onHide={handleCloseSiteMap} centered="true" size="xl">
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body style={{ fontFamily: 'verdana' }}>
    <h5 style={{ textAlign: 'center' }}>Mapa del sitio</h5>

    <p style={{ textAlign: 'justify' }}>
      Nuestro sitio web está estructurado para proporcionar una experiencia clara y organizada. A continuación, se presenta un resumen de las principales secciones del sitio:
    </p>

    <ul>
      <li>Inicio</li>
      <li>Explorar</li>
      <li>Perfil</li>
      <li>Contenido Destacado</li>
    </ul>

    <p style={{ textAlign: 'justify' }}>
      Si tienes alguna pregunta específica sobre la estructura del sitio o necesitas ayuda para encontrar algo en particular, no dudes en contactarnos en <a href="mailto:contacto@filmbook.com">contacto@filmbook.com</a>.
    </p>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseSiteMap}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

    </footer>




  );



}
  
export default Footer;
