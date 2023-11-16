import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src='../public/camaraNikon.png' />
      <Card.Body>
        <Card.Title>Camaras Nikon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
  );
}

export default ProductCard;