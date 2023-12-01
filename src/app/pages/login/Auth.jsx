import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const loginEndpoint = `${import.meta.env.VITE_BACKEND_AUTH}/user/auth/login`;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const Auth = () => {
  const { pathname } = useLocation();

  return (
    <section className="login-container">
      <div className="login-box">
        <div className="card-container">
          <div>
            <div className="logo-container"></div>
          </div>
          {pathname === "/login" && <Login />}
          {pathname === "/register" && <Register />}
        </div>
      </div>

      <div className="login-photo-background"></div>
    </section>
  );
};

export default Auth;

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    setLoading(true)
    fetch(loginEndpoint, {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status == 200) return resp.text();
        throw ('Error -> ' + resp.status)
      })
      .then((token) => {
        sessionStorage.setItem("username", e.username);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", "USER");
        navigate("/home")
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false)
      }) 
  };
  useEffect(() => {
    const { username, password } = form;
    const isValidUser = username.match(emailRegex);
    const isValidForm = !!isValidUser && password > 3;
    setEnableSubmit(isValidForm);
  }, [form]);
  return (
    <section>
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>Inicio Sesión</h3>
      <form style={{ marginTop: "100px", padding: "50px" }}>
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
          id="username"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="password"
          onChange={onChangeForm}
        />
        <button
          disabled={!enableSubmit || loading}
          style={{ width: "100%", marginTop: "40px", height: '50px' }}
          type="button"
          className="btn btn-primary"
          onClick={() => handleLogin(form)}
        >
          { loading ?
            <div class="spinner-border" role="status"></div>
            : "Iniciar Sesión"
          }
        </button>
      </form>
    </section>
  );
};

const Register = () => {
  const [form, setForm] = useState({ user: "" });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    const { user } = form;
    const isValidUser = user.match(emailRegex);
    const isValidForm = !!isValidUser;
    setEnableSubmit(isValidForm);
  }, [form]);
  return (
    <section>
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>Registro</h3>
      <form style={{ padding: "50px" }}>
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Nombre"
          id="name"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Apellido"
          id="surname"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Correo Electrónico"
          id="user"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="pass"
        />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          className="form-control"
          placeholder="Confirmar Contraseña"
          id="confirm-pass"
        />
        <button
          disabled={!enableSubmit}
          style={{ width: "100%", marginTop: "40px" }}
          type="button"
          className="btn btn-primary"
        >
          Registrarse
        </button>
      </form>
    </section>
  );
};
