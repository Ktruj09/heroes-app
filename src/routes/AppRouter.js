import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//importaciones componentes

import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes'
import {PrivateRoute} from './PrivateRoute'
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
    return (
        <>
            {/**BrowserRouter solo se usa en una sola vez, que sería en el padre */}
            <BrowserRouter>


                <Routes>
                     {/** esta ruta es publica */}
                     
                    {/** esto estaba antes de la siguiente forma<Route path="/login" element={<LoginScreen />} /> */}
                    
                    {/**Nueva estructura de ruta */}
                    <Route path="/login" element={
                       
                       <PublicRoute>
                           <LoginScreen/>
                       </PublicRoute>
                   
                   }     
                       />

                   
                    {/** esta ruta tiene que ser privada, ya que si el usuario no esta logueado, no puede mostrar nada */}
                    {/**El PrivateRoute será quien verificará si el usuario estar autenticado */}
                    <Route path="/*" element={
                       
                    <PrivateRoute>
                        <DashboardRoutes/>
                    </PrivateRoute>
                
                }     
                    />
                    {/** <Route path="/*" element={<DashboardRoutes />} />*/}
                    
                </Routes>
            </BrowserRouter>

        </>
    )
};