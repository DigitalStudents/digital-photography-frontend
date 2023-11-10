import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../../components/SearchSection/SearchBar";
import ProductList from "../../components/ProductList/ProductList";
import Hero from "../../components/HeroBanner/Hero";

function Home() {
  return (
    <>
      
      <SearchBar /> 
      <Hero />
      <ProductList />
    </>
  );
}

export default Home;
