import React from "react"
import { Routes, Route } from "react-router-dom";




//importar componentes 
import { NavBar } from '../Components/ui/Navbar'
import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { DcScreen } from "../Components/Dc/DcScreen";
import { HeroeScreen } from "../Components/hero/HeroScreen";
import { SearchScreen } from "../Components/search/SearchScreen";
import {HeroList} from '../Components/hero/HeroList'


export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroeId" element={<HeroeScreen/>}/>
                <Route path="heroes" element={<HeroList/>}/>
                <Route path="/" element={<MarvelScreen />} />
            </Routes>
            </div>
          

        </>
    )
}