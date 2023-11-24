import { useParams } from "react-router-dom";
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import BreadcrumbProductDetail from "../../components/BreadcrumProductDetail/BreadcrumProductDetail";
import Share from "../../components/ShareButtons/Share";
import { FaWifi } from "react-icons/fa";
import { Ri4KFill } from "react-icons/ri";
import { VscScreenFull } from "react-icons/vsc";
import { CgScreenShot } from "react-icons/cg";
import { useEffect, useState } from "react";
import DatePickerForm from "../../components/DatePickerBookings/DatePicker";

export default function ProductDetail() {
  // Asi llega el parametro de la URL con el id del producto
  let { productId } = useParams();
  const [producto, setProducto] = useState(null);

  // Cuando el backend este listo se reemplaza esto por la consulta al producto real
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${productId}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setProducto(r);
      });
  }, []);

  const iconosCaracteristicas = {
    "Wi-Fi Compatibility": FaWifi,
    "4K Video Resolution": Ri4KFill,
    "1080 HD Video Resolution": VscScreenFull,
    "3.2'' LCD Screen Size": CgScreenShot,
    "3.0'' LCD Screen Size": CgScreenShot,
  };

  if (!producto) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <Container className="product-detail-container">
        <Row>
          <Col>
            <BreadcrumbProductDetail name={producto.nombre} />
          </Col>
        </Row>
        <Row style={{ display: "flex", width: "100%" }}>
          <Col>
            <Card className="product-detail-card">
              {producto.imagenes && (
                <ImageGallery
                  productImages={producto.imagenes}
                  id={producto.id}
                />
              )}
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body style={{ width: "100%" }}>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Categoria: {producto.categorias.nombre}
                </Card.Subtitle>
                <h3 className="product-price">
                  Precio por día: $ {producto.precio}
                </h3>
                <div>
                  <Button variant="success" className="me-1">
                    Alquilar Ahora
                  </Button>
                  <Button variant="primary">Añadir al carrito</Button>
                  <Share title = {producto.nombre} />
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <DatePickerForm productId={productId}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ display: "flex", marginTop: "20px", width: "100%"}}>
          {producto.caracteristicas.map((caracteristica) => (
            <Col key={caracteristica.id} style={{ display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#0aa8bd"}}>
              <Card style={{ width: "250px", textAlign: "center" }}>
                <Card.Body>
                  <Card.Title>
                    {iconosCaracteristicas[caracteristica.nombre] && (
                      <span style={{ marginRight: "5px" }}>
                        {React.createElement(
                          iconosCaracteristicas[caracteristica.nombre]
                        )}
                      </span>
                    )}
                    {caracteristica.nombre}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Card>
              <Card.Body style={{width: "100%"}}>
                <Card.Title>Descripcion</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
