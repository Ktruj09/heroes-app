import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

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

    //con esto podemos ver en que path estamos. 
    //ejemplo código antes de la destructuración const location = useLocation();

    //ejemplo haciendo un console.log
   // console.log(location)

   const {pathname, search} = useLocation();
    
    //acá decimos que nos cree el laastPath y que guarde el location.pathname 
    //que es el nombre con el cual aparece donde nos encontramos 
    //con esto veremos la ultima ruta navegada y será almacenado
    //luego nos vamos al login para hacer una modificación loginScreen
    localStorage.setItem('lastPath', pathname + search);


    
    




    return userState.logged
     ? children
     : <Navigate to='/login'/>


};