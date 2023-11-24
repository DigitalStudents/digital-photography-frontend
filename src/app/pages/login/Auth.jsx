import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const Auth = () => {
  const { pathname } = useLocation()

  return (
    <section className="login-container">
      <div className="login-box">
        <div className="card-container">
          <div>
            <div className="logo-container"></div>

          </div>
          {
            pathname === '/login' && <Login />

          }
          {
            pathname === '/register' && <Register />
          }

        </div>
      </div>

      <div className="login-photo-background"></div>
    </section>
  );
};

export default Auth;

const Login = () => {
  const [form, setForm] = useState({ user: '' })
  const [enableSubmit, setEnableSubmit] = useState(false)

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }
  useEffect(() => {
    const { user } = form;
    const isValidUser = user.match(emailRegex)
    const isValidForm = !!isValidUser
    setEnableSubmit(isValidForm)
  }, [form])
  return (
    <section>
      <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Inicio Sesión</h3>
      <form style={{ marginTop: '100px', padding: '50px' }}>
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
          id="user"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: '20px' }}
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="pass"
        />
        <button disabled={!enableSubmit} style={{ width: '100%', marginTop: '40px' }} type="button" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>
  )
}

const Register = () => {
  const [form, setForm] = useState({ user: '' })
  const [enableSubmit, setEnableSubmit] = useState(false)

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }
  useEffect(() => {
    const { user } = form;
    const isValidUser = user.match(emailRegex)
    const isValidForm = !!isValidUser
    setEnableSubmit(isValidForm)
  }, [form])
  return (
    <section>
      <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Registro</h3>
      <form style={{ padding: '50px' }}>
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          className="form-control"
          placeholder="Nombre"
          id="name"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          className="form-control"
          placeholder="Apellido"
          id="surname"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          className="form-control"
          placeholder="Correo Electrónico"
          id="user"
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: '20px' }}
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="pass"
        />
        <input
          style={{ marginBottom: '20px' }}
          type="password"
          className="form-control"
          placeholder="Confirmar Contraseña"
          id="confirm-pass"
        />
        <button disabled={!enableSubmit} style={{ width: '100%', marginTop: '40px' }} type="button" className="btn btn-primary">Registrarse</button>
      </form>
    </section>
  )
}