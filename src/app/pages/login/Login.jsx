import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-box">
        <div className="card-container">
            <div>
            <div className="logo-container"></div>

            </div>
            <h3 style={{textAlign:'center', marginTop:'50px'}}>Inicio Sesión</h3>
            <form style={{marginTop: '100px', padding:'50px'}}>
              <input
                style={{marginBottom: '20px'}}
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
              />
              <input
                style={{marginBottom: '20px'}}
                type="password"
                className="form-control"
                placeholder="Contraseña"
                
              />
              <button style={{width:'100%', marginTop:'40px'}} type="button" class="btn btn-primary">Iniciar sesión</button>
            </form>

        </div>
      </div>

      <div className="login-photo-background"></div>
    </section>
  );
};

export default Login;
