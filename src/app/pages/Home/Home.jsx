import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../../components/ProductList/ProductList";
import Hero from "../../components/HeroBanner/Hero";

function Home() {
  return (
    <>
      <Hero heroImage={"../../public/camera-hero-banner.webp"} tilte={"RENTA TU CÁMARA IDEAL"} subtitle={"Lleva tus producciones a otro nivel con nuestra gran variedad de productos"} />
      <ProductList />
    </>
  );
}

export default Home;
