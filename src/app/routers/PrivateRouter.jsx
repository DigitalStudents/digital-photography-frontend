import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouter = ({children}) => {
  const isAuth = sessionStorage.getItem("token") && sessionStorage.getItem("username")
  return (
    isAuth ? children : <></>
  )
}

export default PrivateRouter