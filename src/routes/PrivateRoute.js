import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../Components/auth/authContext";

//en el {children} recibimos los hijos
/**
 * 

dentro de AppRouter.js
 hemos creado lo siguiente  
 
 este es el padre
  <PrivateRoute>
        este es el hijo
        <DashboardRoutes/>
  </PrivateRoute>

  y siempre que pasamos dentro de un componente, otro componente, tiene que pasarse por los props
  que en este caso lo hemos pasado como {children}

 */
export const PrivateRoute = ({ children }) => {

    const { userState } = useContext(AuthContext);

    console.log(userState)

    return userState.logged
     ? children
     : <Navigate to='/login'/>


};