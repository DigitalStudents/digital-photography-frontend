
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductDetail.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import BreadcrumbProductDetail from '../../components/BreadcrumProductDetail/BreadcrumProductDetail';
import { useEffect, useState } from 'react';
export default function ProductDetail() {
    // Asi llega el parametro de la URL con el id del producto
    let { productId } = useParams();
    const [producto, setProducto] = useState(null);

    // Cuando el backend este listo se reemplaza esto por la consulta al producto real
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${productId}`)
            .then(r => r.json())
            .then(r => {
                console.log(r);
                setProducto(r);
            })
    }, [])

    if (!producto) {
        return <h4>Loading...</h4>
    } else {

        return (
            <Container className="product-detail-container">
                <Row>
                    <Col>
                        <BreadcrumbProductDetail name={producto.nombre} />
                    </Col>
                </Row>
                <Row>
                    <Col><Card className="product-detail-card">
                        {
                            producto.imagenes &&
                            <ImageGallery productImages={producto.imagenes} id={producto.id} />
                        }
                    </Card></Col>
                    <Col><Card>
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Categoria: {producto.categoria}</Card.Subtitle>
                            <Card.Text>
                                Descripción: {producto.descripcion}
                            </Card.Text>
                            <h3 className="product-price">Precio: ${producto.precio_por_dia} por día</h3>
                            <Button variant="success" className="me-1">Alquilar Ahora</Button>
                            <Button variant="primary">Añadir al carrito</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>

            </Container>
        );
    }
}