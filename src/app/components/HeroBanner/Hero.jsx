import "./Hero.css";

function Hero({heroImage, tilte, subtitle}) {
  return (
    <div className="hero-banner">
      <img
        className="hero-img"
        src={heroImage}
        alt="camera"
      />
      <div className='overlay'></div>
      <div className="hero-text">
        <h1>{tilte}</h1>
        <p>
         {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Hero;
