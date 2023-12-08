import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';


const UserProfile = () => {

  const isAuth = sessionStorage.getItem("token") && sessionStorage.getItem("username");

  const [reservations, setReservations] = useState([]);

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}reservations/user/${sessionStorage.getItem("userId")}`
        );
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="card-container">
        <h1>User Profile</h1>

        { isAuth &&
          <div>
            <Button variant="primary" onClick={handleOpen}>Reservas</Button>
            <Modal show={show} onHide={handleClose} centered="true" size="lg">
              <Modal.Header closeButton><h4>Reservas: {sessionStorage.getItem("username")}</h4></Modal.Header>
              <Modal.Body style={{fontFamily: 'verdana'}}>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Producto</th>
                      <th>Fecha de reserva</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                  {reservations.map((reservation) => (
                    <tr>
                      <td>1</td>
                      <td>{reservation.productName}</td>
                      <td>{reservation.startDate}</td>
                      <td>{reservation.totalPrice}</td>
                    </tr>
                    ))}
                  </tbody>
                </Table>

              </Modal.Body>
            </Modal>
          </div>
        }

    </section>
  )
};

export default UserProfile;
