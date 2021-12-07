//useParams nos ayuda a ver
import React,{useMemo} from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroeScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const heroe = useMemo(()=>getHeroeById(heroeId), [heroeId]) 

  if (!heroe) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    //con el menos uno lo que hace es que al momento de dar clic en el boton
    //nos retrocede donde estabamos
    //si su usaba navigate('/'), simpere nos regresa a la ventana de marvel.
    navigate(-1);
  };

  const imagePath = `/assets/heroes/${heroe.id}.jpg`;
  return (
    <>
      <div className="row mt-6 animate__animated  animate__backInLeft" >
        <div className="col-4">
          <img
            src={imagePath}
            alt="{heroe.superhero}"
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{heroe.superhero}</h3>
          <ul className="list-group ">
            <li className="list-group-item">
              <b>Alter Ego:</b> {heroe.alter_ego}{" "}
            </li>
            <li className="list-group-item">
              <b>Publisher</b> {heroe.publisher}{" "}
            </li>
            <li className="list-group-item">
              <b>First Appearance</b> {heroe.first_appearance}{" "}
            </li>
          </ul>
          <h5> Characters </h5>
          <p>{heroe.characters}</p>

          <button className="btn btn-info" onClick={handleReturn}>
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
