import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function ProductBox({
  nombre,
  id,
  imagen,
  tipo,
  descripcion,
  precio_por_dia,
}) {
  return (
    <Link to={`product/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
