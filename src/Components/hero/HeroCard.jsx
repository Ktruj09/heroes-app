import React from "react";
import {Link} from 'react-router-dom'
const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card  ">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imagePath} className="card-img-top" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
                <h4 className="card-title">{superhero}</h4>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego !== characters) 
                    && <p className="text-muted">{characters}</p>
                }

                <Link to={`/hero/${id}`}>
                    Ver más
                </Link>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
