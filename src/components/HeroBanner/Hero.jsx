import "./Hero.css";

function Hero() {
  return (
    <div className="hero-banner">
      <img
        className="hero-img"
        src="../../public/camera-hero-banner.webp"
        alt="camera"
      />
      <div className='overlay'></div>
      <div className="hero-text">
        <h1>RENTA TU CAMARA IDEAL</h1>
        <p>
          Lleva tus producciones a otro nivel con nuestra gran cantidad de
          productos
        </p>
      </div>
    </div>
  );
}

export default Hero;
