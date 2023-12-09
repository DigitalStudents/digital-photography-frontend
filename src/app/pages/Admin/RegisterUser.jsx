import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const usersEndpoint = `${import.meta.env.VITE_BACKEND_AUTH}/user/crud/register`;
const initialuserForm = {
    "firstName": "Vanesa",
    "lastName": "Perez",
    "username": "testuser@dispostable.com",
    "password": "password",
    "role": "ADMIN"
};

const RegisterUser = () => {
    const [userForm, setUserForm] = useState({ ...initialuserForm });
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [selectedRole, setSelectedRole] = useState(initialuserForm.role);

    const handleChangeForm = (e) => {
        setUserForm({
            ...userForm,
            [e.target.id]: e.target.value,
        });
    };


    const handleSubmitForm = (e, form) => {
        e.preventDefault();
        fetch(usersEndpoint, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("Usuario Guradado");
                    Swal.fire("Usuario guardado con éxito!", "", "success");
                    setUserForm({ ...initialuserForm });
                } else {
                    Swal.fire(
                        "Error guardando user!",
                        "Ya existe la user o intenta de nuevo",
                        "error"
                    );
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire(
                    "Error guardando user!",
                    "Ya existe el usuario o intenta de nuevo",
                    "error"
                );
            });
    };

    useEffect(() => {
        const { firstName, lastName, username, role } = userForm;
        const validityTextFields = !!firstName && !!username && !!lastName && !!role;

        setEnableSubmit(
            validityTextFields
        );
    }, [userForm]);

    return (
        <section className="card-container" style={{ maxWidth: "150vh",height: "auto",marginBottom:"6%" }}>
            <h2>Registrar Usuario</h2>
            <form onSubmit={(e) => handleSubmitForm(e, userForm)}>
                <label>Nombre: </label>
                <input
                    id="firstName"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={userForm.firstName}
                />
                <label>Apellido: </label>
                <textarea
                    id="lastName"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={userForm.lastName}
                />
                <label>Email (Sera tu username): </label>
                <input
                    id="username"
                    type="email"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={userForm.username}
                />
                <label>Contraseña: </label>
                <input
                    id="password"
                    className="form-control"
                    onChange={handleChangeForm}
                    value={userForm.password}
                />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="role">
                        {selectedRole}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item key={'ADMIN'} value="ADMIN" onClick={() => setSelectedRole("ADMIN")}>
                            ADMIN
                        </Dropdown.Item>
                        <Dropdown.Item key={'USER'} value="USER" onClick={() => setSelectedRole("USER")}>
                            USER
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default RegisterUser;
