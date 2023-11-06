import React, { useState, useEffect } from 'react'
import ProductBox from "../../../components/ProductBox/ProductBox"
import '../../../components/ProductList/ProductList.css'
import Pagination from './Pagination'

const ViewProduct = () => {
    
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(10)

    useEffect(() => {
        fetch('http://localhost:8080/v1/productos')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord)
    const nPages = Math.ceil(products.length / recordsPerPage)

    return(
        <div>
            <div className='container mt-5'>
            
                <div className="product-list">
                    {
                        currentRecords.map(p => <ProductBox key={p.id} nombre={p.nombre} id={p.id} description={p.description} imagen={p.imagenes[0]} />)
                    }
                </div>
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ViewProduct
