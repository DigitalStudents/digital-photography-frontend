import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchSection/SearchBar";
import ProductList from "../../components/ProductList/ProductList";

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <ProductList />
    </>
  );
}

export default Home;
