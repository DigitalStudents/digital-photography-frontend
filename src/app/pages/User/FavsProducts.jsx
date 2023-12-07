import React, { Fragment } from "react";

const FavsProducts = () => {
  return (
    <section className="card-container">
        <h1>Favs</h1>
    </section>
  )
};

export default FavsProducts;
// import ProductBox from "../ProductBox/ProductBox";

// const FavsProducts = () => {
//   const [favoritos, setFavoritos] = useState([]);

//   useEffect(() => {
//     // Obtén la lista de productos favoritos del almacenamiento local
//     const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
//     setFavoritos(favoritosLocalStorage);
//   }, []);

//   return (
//     <section className="card-container">
//       <h1>Favoritos</h1>
//       <div className="product-list">
//         {favoritos.map((productId) => (
//           // Aquí puedes renderizar cada producto favorito utilizando el componente ProductBox
//           <ProductBox key={productId} id={productId} isLoggedIn={true /* O establecer el estado de autenticación aquí */} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FavsProducts;