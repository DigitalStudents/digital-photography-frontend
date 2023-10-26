
import {useParams} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductDetail.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
export default function ProductDetail(){
    // Asi llega el parametro de la URL con el id del producto
    let {productId} = useParams();

    // Cuando el backend este listo se reemplaza esto por la consulta al producto real
    const producto = {
            "id": 1,
            "nombre": "Canon EOS 5D Mark IV",
            "tipo": "Cámara",
            "descripcion": "DSLR de 30.4 MP, grabación 4K",
            "precio_por_dia": 100,
            "imagen": "https://placehold.co/400x400",
            "productImages": [ // Propiedad necesaria para la galeria de imagenes
                "https://placehold.co/100",
                "https://placehold.co/200",
                "https://placehold.co/300",
                "https://placehold.co/400",
                "https://placehold.co/500",
                "https://placehold.co/600"
            ]
    }

    return (
            <div className="product-detail-container">
                <Card className="product-detail-card">
                    <ImageGallery productImages={producto.productImages} />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Tipo: {producto.tipo}</Card.Subtitle>
                        <Card.Text>
                            Descripción: {producto.descripcion}
                        </Card.Text>
                        <h3 className="product-price">Precio: ${producto.precio_por_dia} por día</h3>
                        <Button variant="primary">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
    
                {/* Puedes agregar aquí más detalles sobre el producto, como comentarios, especificaciones, etc. */}
    
            </div>
        );
}