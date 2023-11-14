import React, { useState, useEffect } from "react";
import ProductBox from "../ProductBox/ProductBox";
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/v1/productos");
        const data = await response.json();
        const filteredProducts = data.filter((product) => !product.deleted);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductBox
          key={p.id}
          nombre={p.nombre}
          id={p.id}
          descripcion={p.descripcion}
          precio_por_dia={p.precio}
          imagen={p.imagenes[1]}
        />
      ))}
    </div>
  );
};

export default ProductList;
