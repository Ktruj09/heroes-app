import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//importaciones componentes

import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes'
import {PrivateRoute} from './PrivateRoute'
export const AppRouter = () => {
    return (
        <>
            {/**BrowserRouter solo se usa en una sola vez, que sería en el padre */}
            <BrowserRouter>


                <Routes>
                     {/** esta ruta es publica */}
                    <Route path="/login" element={<LoginScreen />} />
                   
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