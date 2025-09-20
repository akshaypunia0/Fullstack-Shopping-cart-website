import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Outlet />
  }

  else return <Navigate to={"/"}/>


}

export default ProtectedRoutes