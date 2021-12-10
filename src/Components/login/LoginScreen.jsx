import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";


//importamos componentes a usar
import { types } from "../types/types";
import { AuthContext } from "../auth/authContext";


export const LoginScreen = () => {

    //navigate esta en version 6 a superior
    // permite navegar a otras pantallas.
   const navigate = useNavigate()
  
   //el dispatch lo tenemos useContext y hacemos llamado a AuthContext
   //destructuramos y solo llamamos al dispatch
   const {dispatch} = useContext(AuthContext)



    const handleLogin = () =>{
     
      const action = {
        //llamamos a nuestro types login
        type: types.login,
        //acá llamamos el payload que lo definimos en el authReducer
        //solo hacemos llamado al name nada más
        payload: {name: 'Kevin'}
      }

      
      //disparamos la acción
      dispatch(action);
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
