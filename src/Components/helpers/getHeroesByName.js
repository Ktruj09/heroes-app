

import {heroes} from '../data/heroe';

 export const getHeroesByName = ( name= '')=>{
    
   if(name === ''){
      return [];
   }else{

      name = name.toLocaleLowerCase();

      return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
  
   }
   
 
}

