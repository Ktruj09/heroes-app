import React, {useMemo} from "react";
import HeroCard from "./HeroCard";
import { getHoresByPublisher } from "../helpers/getHeroesByPublisher";

//le pasaremos por las props el publisher y será destructurado
export const HeroList = ({ publisher }) => {
  const heroes = useMemo( () => getHoresByPublisher(publisher), [publisher])

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__backInDown">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
