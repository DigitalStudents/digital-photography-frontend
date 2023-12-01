import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
  const isAuth = sessionStorage.getItem("token") && sessionStorage.getItem("username") && "ADMIN" ===sessionStorage.getItem("role")
  return (
    isAuth ? children : <NotAdminAuthenticated />
  )
}

const NotAdminAuthenticated = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  }, [])
  

  return (
    <div>
      <h1>USUARIO NO AUTORIZADO</h1>
      <h3>Redirigiendo a login...</h3>
    </div>
  )
}
export default PrivateRouter