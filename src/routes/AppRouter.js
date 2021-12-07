import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//importaciones componentes

import { LoginScreen } from "../Components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes'
export const AppRouter = () => {
    return (
        <>
            {/**BrowserRouter solo se usa en una sola vez, que sería en el padre */}
            <BrowserRouter>


                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>

        </>
    )
};