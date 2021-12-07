import { heroes } from '../data/heroe'

export const getHeroeById = (id = '') => {
    return heroes.find(heroe => heroe.id === id)
}