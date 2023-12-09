import React, { Fragment } from "react";


const UserProfile = () => {

  const firstName = sessionStorage.getItem("firstName");
  const lastName = sessionStorage.getItem("lastName");
  const username = sessionStorage.getItem("username");
  const initials = firstName[0] + lastName[0];

  return (
    <section className="card-container">
      <div className="initials-container">
        <h1 className="initials">{initials}</h1>
      </div>
      <div className="user-data">
        <h4>Nombre: {firstName} </h4>
        <h4>Apellido: {lastName}</h4>
        <h4>Email: {username}</h4>
      </div>
    </section>
  )
};

export default UserProfile;
