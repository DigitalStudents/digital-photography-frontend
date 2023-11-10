import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import './CategoryPage.css';
import BreadcrumbProductDetail from '../../components/BreadcrumProductDetail/BreadcrumProductDetail';

export default function CategoryPage() {
    // Suponiendo que 'productId' realmente debería ser 'categoryId'
    let { categoryId } = useParams();

    // Datos simulados de categorías y productos
    const categorias = [
        {nombre: "Cámaras", slug: "camaras", id: 1}, 
        {nombre: "Lentes", slug: "lentes", id: 2}, 
        {nombre: "Accesorios", slug: "accesorios", id: 3},
        {nombre: "Discos", slug: "discos", id: 4},
        {nombre: "Otros", slug: "otros", id: 5}];

    const categoria = categorias.find((c)=>(c.slug == categoryId))

    // Suponiendo que quieres mostrar los productos de la categoría seleccionada
    const productos = [
        {
            "id": 1,
            "nombre": "Canon EOS 5D Mark IV",
            "categoria": "camaras",
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
        },
        {
            "id": 2,
            "nombre": "Canon EOS 5D Mark IV",
            "categoria": "camaras",
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
        },
        {
            "id": 3,
            "nombre": "Canon EOS 5D Mark IV",
            "categoria": "camaras",
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
        },
        {
            "id": 4,
            "nombre": "Canon EOS 5D Mark IV",
            "categoria": "camaras",
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
    ]

    // Encuentra los productos de la categoría seleccionada (esto debería provenir del backend)
    const productosDeCategoria = productos.filter(p => p.categoria === categoria.slug);

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
                        {categorias.map((c, index) => (
                            <ListGroup.Item key={index} action href={`/categoria/${c.slug.toLowerCase()}`}>
                                {c.nombre}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col xs={12} md={8}>
                    {/* Detalles de Productos de la Categoría */}
                    <Row>
                        {(productosDeCategoria.length) ? productosDeCategoria.map((producto) => (
                            <Col key={producto.id} sm={12}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Categoría: {producto.categoria}</Card.Subtitle>
                                        <Card.Text>
                                            Descripción: {producto.descripcion}
                                        </Card.Text>
                                        <h3 className="product-price">Precio: ${producto.precio_por_dia} por día</h3>
                                        <Button variant="success" className="me-1">Alquilar Ahora</Button>
                                        <Button variant="primary">Añadir al carrito</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )): <div>No hay productos en esta categoria</div>}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
