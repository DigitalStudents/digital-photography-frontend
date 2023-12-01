import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";


const loginEndpoint = `${import.meta.env.VITE_BACKEND_AUTH}/user/auth/login`;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const formInital = { firstName: "", lastName:"",username: "", password: "", "confirm-pass":"" }
const Auth = () => {
  const { pathname } = useLocation();

  return (
    <section className="login-container">
      <div className="login-box">
        <div className="card-login-container">
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
  const [form, setForm] = useState({ ...formInital});
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [loading, setLoading] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
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
        const tokenDecode = jwtDecode(token)
        sessionStorage.setItem("username", tokenDecode['sub']);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", tokenDecode['role']);
        sessionStorage.setItem("userId", tokenDecode['userId']);
        navigate("/home")
      })
      .catch((err) => {
        setErrorPassword(true)
        console.error(err);
        setTimeout(() => {
          setErrorPassword(false)
        }, 5000);
      })
      .finally(() => {
        setLoading(false)
      }) 
  };
  useEffect(() => {
    const { username, password } = form;
    const isValidUser = username.match(emailRegex);
    const isValidForm = !!isValidUser && password.length >= 3;
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
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="password"
          onChange={onChangeForm}
        />
        {
          (errorPassword) 
            &&
              <span style={{color:"red"}}>Contraseña Incorrecta</span>
        }
        <button
          disabled={!enableSubmit || loading}
          style={{ width: "100%", marginTop: "40px", height: '50px' }}
          type="button"
          className="btn btn-primary"
          onClick={() => handleLogin(form)}
        >
          { loading ?
            <div className="spinner-border" role="status"></div>
            : "Iniciar Sesión"
          }
        </button>
      </form>
    </section>
  );
};

const Register = () => {
  const [form, setForm] = useState({ ...formInital});
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleRegister = (valdiForm) => {
    setLoading(true)
    delete valdiForm["confirm-pass"]
    valdiForm['role'] = "USER"
    fetch(`${authUrl}/register`, {
      method: "POST",
      body: JSON.stringify(valdiForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        let icon
        let title
        let text
        if (resp.status === 200) {
          icon = "success"
          title = "Registro exitoso"
          text = "Por favor revisa la bandeja de entrada de tu correo para confirmar el registro"
          setForm({...formInital})
        }
        if (resp.status === 409) {
          icon = "warning"
          title = "Atención"
          text = "Este usuario ya se encuentra registrado o no se ha confirmado"
        }
        if (resp.status !== 200 && resp.status !== 409) {
          icon = "error"
          title = "Error"
          text = "Ha ocurrido un error en el registro"
        }
        Swal.fire({
          position: "center",
          icon: icon,
          title: title,
          text,
          timer: 10000
        });
      })

      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    const { firstName, lastName, password, "confirm-pass":confirm, username } = form;
    const isValidUser = username.match(emailRegex);
    const isValidPassword = password === confirm && password.length >= 3
    const isValidForm = !!isValidUser && !!firstName && !!lastName && isValidPassword;
    
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
          id="firstName"
          value={form.firstName}
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Apellido"
          id="lastName"
          value={form.lastName}
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="text"
          className="form-control"
          placeholder="Correo Electrónico"
          id="username"
          value={form.username}
          onChange={onChangeForm}
        />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          className="form-control"
          placeholder="Contraseña"
          id="password"
          value={form.password}
          onChange={onChangeForm}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Confirmar Contraseña"
          onChange={onChangeForm}
          value={form["confirm-pass"]}
          id="confirm-pass"
        />
        {
          (form["confirm-pass"] > 0 && (form["confirm-pass"] !== form.password )) 
            &&
              <span style={{color:"red"}}>Las contraseñas no coinciden</span>
        }
        <button
          disabled={!enableSubmit}
          style={{ width: "100%", marginTop: "40px" }}
          type="button"
          className="btn btn-primary"
          onClick={() => handleRegister({...form})}
        >
          { loading ?
            <div className="spinner-border" role="status"></div>
            : "Registrarse"
          }
        </button>
        <button
          style={{ width: "100%", marginTop: "10px" }}
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/login")}
        >
        Ir a Login</button>
      </form>
    </section>
  );
};
