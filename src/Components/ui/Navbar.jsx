import React, {useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const NavBar = () => {

  //con el useContext, nos ayudara a mostrar el nombre del usuario logueado. 
  //que se encuentra HeroesApp.js
  //contextextValue, es el AuthContext y lo colocamos 
  //useContext(AuthContext)

  /**
   * función al inicio 
   * const context = useContext(AuthContext)
   * 
   * luego reemplazamos el context, porque sabemos que retorna AuthContext, podemos hacer un 
   * console.log(context) y nos mostraá lo que tiene, al saber esto, cambiamos nuestra constante por la siguiente
   * 
   */

 // const context = useContext(AuthContext)

 //la constante nos queda de la siguiente manera con esto podremos mostrar el nombre
 //nos permite extraer lo que hay. 
 const {userState} = useContext(AuthContext)


  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
        </div>
      </div>

      {/**d-flex justify-content-end esto lo que hace, es que todo tanto la información del nombre y el boton, lo envia al final  */}
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{userState.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
