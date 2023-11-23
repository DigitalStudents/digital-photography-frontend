import React, { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';
import ProductBox from "../ProductBox/ProductBox";
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10; // Asumiendo 10 productos por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}productos/paginacion?pagina=${currentPage}&cantidad=${itemsPerPage}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.content) {
          setProducts(data.content.filter((product) => !product.deleted));
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            nombre={product.nombre}
            id={product.id}
            descripcion={product.descripcion}
            precio_por_dia={product.precio}
            imagen={product.imagenes[1]}
          />
        ))}
      </div>

      <div className="pagination-controls">
        <Pagination>
          <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 0} />
          <Pagination.Item>{currentPage + 1}</Pagination.Item>
          <span className="pagination-info">Página {currentPage + 1} de {totalPages}</span>
          <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages - 1} />
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
