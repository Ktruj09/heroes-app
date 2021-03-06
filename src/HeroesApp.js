import React, { useReducer, useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { authReducer } from './Components/auth/authReducer'
import { AuthContext } from './Components/auth/authContext'


const init = () => {
   /**
    * esto se había creado de prueba al principio para ver que todo corra bien
    *
     return {
       logged: true,
       name: 'Kevin Temporal'
    }
    *  */

   //si el userState no existe, entonces el logged: estará en false
   return JSON.parse(localStorage.getItem('userState')) || { logged: false }

}
export const HeroesApp = () => {

   /**
    * dentro de la constante creada, se llama al authReducer va a tener el userState y dispatch, 
    * luego de ello  el init, el cual en su momento nos retornará 
    
   const init = () => {
   return {
      logged: true,
      name: 'Kevin Temporal'
   }
}
   }
    */
   const [userState, dispatch] = useReducer(authReducer, {}, init)


   //para grabar en el localsotare necesitamos usar useEffect
   useEffect(() =>{
      
      //si el usario no existe, que no haga nada. 
      if(!userState) return; 

      //si el usuario si existe, solicitamos que lo guarde en el locastorage
      localStorage.setItem('userState', JSON.stringify(userState));

   }, [userState])

   return (
      <>
         <AuthContext.Provider value={{
            userState,
            dispatch
         }}>
            <AppRouter />
         </AuthContext.Provider>

      </>
   )

}//end HeroesApp