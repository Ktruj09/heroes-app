
import {heroes} from '../data/heroe'

export const getHoresByPublisher = (publisher) =>{

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(validPublishers.includes(publisher)){
       console.log('Error')
    }
    
    return heroes.filter(heroe => heroe.publisher === publisher)
};