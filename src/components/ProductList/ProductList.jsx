import React, { useState, useEffect } from 'react'
import ProductBox from "../ProductBox/ProductBox"
import './ProductList.css'

const ProductList = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        await fetch('http://localhost:8080/v1/productos')
        .then(response => response.json())
        .then(data => data)
    }

    useEffect(() => {
        fetch('http://localhost:8080/v1/productos')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    products.forEach(p => console.log(p.imagenes[0]))

    return(
        <div className="product-list">
            {
                products.map(p => <ProductBox key={p.id} nombre={p.nombre} id={p.id} description={p.description} imagen={p.imagenes[0]} />)
            }
        </div>
    )
}

export default ProductList;
