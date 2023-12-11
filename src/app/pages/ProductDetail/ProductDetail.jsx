
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import BreadcrumbProductDetail from "../../components/BreadcrumProductDetail/BreadcrumProductDetail";
import Share from "../../components/ShareButtons/Share";
import { FaWifi } from "react-icons/fa";
import { Ri4KFill } from "react-icons/ri";
import { VscScreenFull } from "react-icons/vsc";
import { CgScreenShot } from "react-icons/cg";
import "./ProductDetail.css";
import DatePickerForm from "../../components/DatePickerBookings/DatePicker";
import { Link } from 'react-router-dom';
import RatingStars from "./RatingStars";


export default function ProductDetail() {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${productId}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setProducto(r);
      });

    fetch(`${import.meta.env.VITE_BACKEND_URL}productos/${productId}/ratings`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setRatings(r);
      });
  }, [productId]);

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
          <Col md={7} className="main-content">
            <BreadcrumbProductDetail name={producto.nombre} />
            <Card className="product-detail-card">
              {producto.imagenes && (
                <ImageGallery
                  productImages={producto.imagenes}
                  id={producto.id}
                  className="img-fluid"
                />
              )}
            </Card>
          </Col>
          <Col md={4} style={{ marginTop: '3.2%' }} className="side-content">
            <Card style={{ width: "auto" }}>
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                 Categorias: {producto.categorias.map(categoria => categoria.nombre).join(", ")}
                </Card.Subtitle>
                <h3 className="product-price">
                  Precio por día: $ {producto.precio}
                </h3>
                <div className="buttons-container" style={{ gap: 10}}>
                  <Link to={`/product/${productId}/reservationDetail`}>
                    <Button variant="success" className="me-1" style={{ marginRight: "5px"}}>
                      Alquilar Ahora
                    </Button>
                  </Link>

                  <Button variant="primary" style={{ marginRight: "5px"}}>Añadir al carrito</Button>
                  <Share title={producto.nombre} />
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "37.3vh"}}>
              <Card.Body>
                <DatePickerForm productId={productId}/>
              </Card.Body>
            </Card> 
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="caracteristicas-container">
              {producto.caracteristicas.map((caracteristica) => (
                <Card key={caracteristica.id}>
                  <Card.Body>
                    <Card.Title>
                      {iconosCaracteristicas[caracteristica.nombre] && (
                        <span style={{ marginRight: "0.5rem" }}>
                          {React.createElement(
                            iconosCaracteristicas[caracteristica.nombre]
                          )}
                        </span>
                      )}
                      {caracteristica.nombre}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        <Row>

          <Col>

            <Card className="description-container">
              <Card.Body>
                <Card.Title>Descripcion</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
              </Card.Body>
            </Card>

            <Col className="ratings-container mx-auto">
              <Card.Body>
                <Card.Title className="text-center">Reseña de otros usuarios</Card.Title>
                <ul className="text-center">
                  {ratings.map((rating) => (
                    <li className="ratingCard" key={rating.id}>
                      <strong>{rating.userName}</strong> - <RatingStars rating={rating.rating} />
                      <p className="fecha">{rating.date}</p>
                      <p>{rating.comment}</p>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Col>

          </Col>

        </Row>
        
      </Container>
    );
  }
}