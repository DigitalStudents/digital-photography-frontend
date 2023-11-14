import React, { useState, useEffect } from "react";


const DigitalSLR = () =>{
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
        <div>
            <h1>DigitalSLR</h1>
        </div>

    )
}

export default DigitalSLR;