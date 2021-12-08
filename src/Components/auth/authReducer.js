//importar componentes
import { types } from '../types/types'


/**
 Definimos como queremos que luzca el state
const state = {
    name: 'Kevin ',
    logged: true
}

**/

//un redeucer es una simple función pura, en esta función estamos mandando un state que lo igualamos a un objeto vacio 
//y una acción es la que modificará el state.
export const authReducer = (state = {}, action) => {

    //en esto nos servirá para evaluar el tipo de acción que hemos creado 
    //en la carpeta types y dentro de types.js
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        
            //si en dado caso no esta haciendo ninguna de las acciones 
            //que estan definidas, regresara el state tal y como este
        default:
            return state;
    }


}