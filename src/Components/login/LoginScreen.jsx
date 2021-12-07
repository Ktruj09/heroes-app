import React from "react";
import { useNavigate } from "react-router-dom";
export const LoginScreen = () => {

    //navigate esta en version 6 a superior
    // permite navegar a otras pantallas.
   const navigate = useNavigate()

    const handleLogin = () =>{
        navigate('/', {
            replace: true
        });
    }
  return (
    <>
      <div className="container mt-5">
        <h1>Login Heroes App</h1>
        <hr/>
        <button
        className="btn btn-info"
        onClick={handleLogin}
        >
            Login
        </button>
      </div>
    </>
  );
};
