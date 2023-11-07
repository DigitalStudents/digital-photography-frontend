import React, { useState, useEffect } from 'react'
import ProductBox from "../../../components/ProductBox/ProductBox"
import '../../../components/ProductList/ProductList.css'

const ViewProduct = () => {
  const [products, setProducts] = useState([])

    const fetchData = async () => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}productos`)
        .then(response => response.json())
        .then(data => data)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}productos`)
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

export default ViewProduct
