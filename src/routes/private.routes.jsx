import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const privateRoutes = () => {
  const isLogged = localStorage.getItem('user')

  return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default privateRoutes
