import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const reservationsEndpoint = `${import.meta.env.VITE_BACKEND_URL}reservations`;
const productsEndpoint = `${import.meta.env.VITE_BACKEND_URL}productos`;
const usersEndpoint = import.meta.env.VITE_BACKEND_USERS_URL;
const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YW5lcGVnOEBnbWFpbC5jb20iLCJpYXQiOjE3MDA3NzI1OTcsImV4cCI6MTcwMDc3NjE5N30.J9JAaZlHIpUN34QjR1XYHWPWY1PIxp_vWs7WPDLUMgM';

const initialReservationForm = {
    productId: "",
    userId: "",
    startDate: "",
    endDate: ""
};

const RegisterCategory = () => {
    const [reservationForm, setReservationForm] = useState({ ...initialReservationForm });
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch(productsEndpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => console.error(err));
        fetch('http://localhost:8080/user/crud/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                'Origin': '*',
                "Authorization": "Bearer " + authToken
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => console.error(err));
    }, []);

    const updateProducto = (product) => {
        setSelectedProduct(product);
        setReservationForm({
            ...reservationForm,
            productId: product.id
        });
    };

    const updateUser = (product) => {
        setSelectedUser(product);
        setReservationForm({
            ...reservationForm,
            userId: user.id
        });
    };

    const handleChangeForm = (e) => {
        setReservationForm({
            ...reservationForm,
            [e.target.id]: e.target.value,
        });
    };

    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1), // Los meses en JavaScript comienzan en 0
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        // Si el día o el mes son menores a 10, añadir un cero al inicio
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [month, day, year].join('-');
    }

    const handleSubmitForm = (e, form) => {
        e.preventDefault();
        fetch(reservationsEndpoint + `?productId=${form.productId}&userId=${form.userId}&startDate=${formatDate(form.startDate)}&endDate=${formatDate(form.endDate)}`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("Reservation Guradada");
                    Swal.fire("Reservation guardada con éxito!", "", "success");
                    setReservationForm({ ...initialReservationForm });
                } else {
                    Swal.fire(
                        "Error guardando reservation!",
                        "Ya existe la reservation o intenta de nuevo",
                        "error"
                    );
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire(
                    "Error guardando reservation!",
                    "Ya existe la reservation o intenta de nuevo",
                    "error"
                );
            });
    };

    useEffect(() => {
        console.log(reservationForm)
        const { productId, userId, startDate, endDate } = reservationForm;
        const validityTextFields = !!productId && !!userId && !!startDate && !!endDate;

        setEnableSubmit(
            validityTextFields
        );
    }, [reservationForm]);

    return (
        <section className="card-container" style={{ maxWidth: "150vh",height: "100vh",marginBottom:"6%" }}>
            <h2>Registra tú Reservation</h2>
            <form onSubmit={(e) => handleSubmitForm(e, reservationForm)}>

                <label>Seleccione Producto: </label>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedProduct ? selectedProduct.nombre : "Seleccione un producto"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productos.map((product, idx) => (
                            <Dropdown.Item key={idx} onClick={() => updateProducto(product)}>
                                {product.nombre}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <label>Selecciona el Usuario: </label>
                <input
                    id="userId"
                    type="number"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={reservationForm.userId}
                />
                {/*
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedUser ? selectedUser.nombre : "Seleccione un usuario"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {users.map((user, idx) => (
                            <Dropdown.Item key={idx} onClick={() => updateUser(user)}>
                                {user.nombre}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                */}
                <label>Selecciona la fecha Inicial: </label>
                <input
                    id="startDate"
                    type="date"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={reservationForm.startDate}
                />
                <label>Selecciona la Fecha Final: </label>
                <input
                    type="date"
                    id="endDate"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={reservationForm.endDate}
                />
                <button
                    type="submit"
                    style={{ marginTop: "40px" }}
                    className="btn btn-primary btn-lg"
                    disabled={!enableSubmit}
                >
                    Guardar
                </button>
            </form>
        </section>
    );
};

export default RegisterCategory;
