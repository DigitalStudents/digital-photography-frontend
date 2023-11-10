import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-box">
        {" "}
        Login
        <div className="card-container">
            <h3>LOGIN</h3>
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Contraseña"
              />
              <button type="button" class="btn btn-primary">Iniciar sesión</button>
            </form>
            <div className="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>

            </div>

        </div>
      </div>

      <div className="login-photo-background"></div>
    </section>
  );
};

export default Login;
