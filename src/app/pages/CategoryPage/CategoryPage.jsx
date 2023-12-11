import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import './CategoryPage.css';
import BreadcrumbProductDetail from '../../components/BreadcrumProductDetail/BreadcrumProductDetail';

export default function CategoryPage() {
    // Suponiendo que 'productId' realmente debería ser 'categoryId'
    let { categoryId } = useParams();
    const [categorias, setCategorias] = useState([]);

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}productos/filtrar-por-categorias?categoriaNombres=${categoryId}`)
            .then(r => r.json())
            .then(r => {
                console.log(r);
                setProductos(r);
            })
        fetch(`${import.meta.env.VITE_BACKEND_URL}categorias`)
            .then(r => r.json())
            .then(r => {
                console.log(r);
                setCategorias(r);
            })
    }, [])

    return (
        <Container className="category-page-container">
            <Row>
                <Col>
                    {/* El Breadcrumb probablemente debería estar fuera de las columnas y mostrar categorías */}
                    <BreadcrumbProductDetail name={categoryId} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    {/* Lista de Categorías */}
                    <ListGroup>
                        {categorias && categorias.map((c, index) => (
                            <ListGroup.Item key={index} action href={`/categoria/${c.nombre}`}>
                                {c.nombre}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col xs={12} md={8}>
                    {/* Detalles de Productos de la Categoría */}
                    <Row>
                        {(productos.length) ? productos.map((producto) => (
                            <Col key={producto.id} sm={12}>
                                <Card className="mb-3" style={{margin: 0, width:"auto"}}>
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Categoría: {producto.categorias[0].nombre}</Card.Subtitle>
                                        <Card.Text>
                                            Descripción: {producto.descripcion}
                                        </Card.Text>
                                        <h3 className="product-price">Precio: {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: "USD"
                                        }).format(producto.precio)} por día</h3>
                                        <Container>
                                            <Row className="justify-content-*-between">
                                                <Col>
                                                    <Button variant="success" className="me-1">Alquilar Ahora</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="primary">Añadir al carrito</Button>
                                                </Col>
                                            </Row>
                                        </Container>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <div>No hay productos en esta categoria</div>}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
} 