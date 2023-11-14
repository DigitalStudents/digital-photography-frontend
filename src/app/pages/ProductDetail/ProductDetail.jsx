
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductDetail.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import BreadcrumbProductDetail from '../../components/BreadcrumProductDetail/BreadcrumProductDetail';
export default function ProductDetail() {
    // Asi llega el parametro de la URL con el id del producto
    let { productId } = useParams();

    // Cuando el backend este listo se reemplaza esto por la consulta al producto real
    const producto = {
        "id": 1,
        "nombre": "Canon EOS 5D Mark IV",
        "categoria": "Cámara",
        "descripcion": "DSLR de 30.4 MP, grabación 4K",
        "precio_por_dia": 100,
        "imagen": "https://placehold.co/400x400",
        "productImages": [ // Propiedad necesaria para la galeria de imagenes
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYwG1Rn1w9bK-PG850KEYSssdy1NJ6yxaJLOLvk9PRNTH0Ws-35DE_JvS_4avqNcul_pjW1HlAIa8gpTd3TSzIPeICymEv",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaC0Glml5wTTZlC14cECt8ZJCLkbJgG4BjSpbalUCG13WBXu86a8XUT0vGBP6Mot2dQjwCSjZtt_2StNMbiCH1ytcxHpdd",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRridruHp3Oo3gASrdWjbtifMGBvY3VXMebWKYSRzxpY0wOJ6Z0revPbZ8fCL9gmKeKiZnNEuOtF8hHtqFBOSj0s8Rfh9R1",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXEt0_VgbcCPD4aOU3x-LlzfCSSMyauR2PrUPpk3EBJrdItXsT2oaAZY4xxtCQgVh6AsYU7XEkTis34c3EqJ48y2Hpbeqj",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4FO7J7yaC6nyOPXGyVmbpf82EEaJKzgwKHxTFLdH9EwjOf4Pq1_KEbY23zLVY3DCznVQv9Wwp7lphwUXbyVRAhgwXZJ0G",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2UKX2VBAWQ_OrhbxTNIZcbBxSYPX6ZCPWjdFIB_w8j4VMEirSbUxxkhv0-BdKpbGnXND4CTq7A6oluBRM9OQ9whyXDMGzsg"
        ]
    }

    return (
        <Container className="product-detail-container">
            <Row>
                <Col>
                    <BreadcrumbProductDetail name={producto.nombre}/>
                </Col>
            </Row>
            <Row>
                <Col><Card className="product-detail-card">
                    <ImageGallery productImages={producto.productImages} />
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