import React, {useMemo} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import queryString from 'query-string'

import { getHeroesByName } from '../helpers/getHeroesByName';
import HeroCard from '../hero/HeroCard'


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    
    //console.log(location)
    //con esto obtenemos el nombre de lo que la persona esta buscando
    //en el location.search es lo que muestra dentro de location y es lo que necesitamos.
    const {q = ''} = queryString.parse(location.search);
    

    const [formValues, handleInputChange] = useForm({
        //con esto nos ayudará para llevar el control en nuestro input
        searchText: q,
    });

    //en este parte mandamos el query a buscar
    //el memo hára reducir el consumo de memoria de nuestra aplicación
    //y solo se disparará si llega a ver un cambio en el query => q
    const heroesFilter = useMemo(() => getHeroesByName(q), [q])


    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)

        //acá con el navigate al momento de colocar en el input algun caracter
        //automáticamente lo muestra en el url 
        /**
         * Ejemplo: 
         * http://localhost:3000/search =>este es el url normal.
         * 
         * al colocar Batman y dar en el boton Buscar, queda de la siguiente forma
         * http://localhost:3000/search?q=Batman
         * 
         * enviamos el query params 
         */
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>

                        <input
                        type="text"
                            className="form-control"
                            placeholder="Buscar héroe"
                            name="searchText"
                            autoComplete="off"
                            value= { searchText }
                            onChange={handleInputChange}
                        />

                        
                        <button
                            className="btn btn-outline-primary mt-4"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un Héroe </div>
                            : (heroesFilter.length === 0)
                                 && <div className="alert alert-danger">No hay resultados a buscar: {q}</div>
                        }

                    {
                        heroesFilter.map(hero => (
                            //es importante mandarle el Id dentro del key
                            <HeroCard
                            key={hero.id}
                            //destructuramos los valores para que nos muestre todos los elementos

                            {...hero}
                            
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
};