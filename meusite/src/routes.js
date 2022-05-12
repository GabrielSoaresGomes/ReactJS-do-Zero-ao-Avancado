import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from "./pages/Home/Home";
import Painel from "./pages/Painel/Painel";

import {autenticado} from "./auth"
const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/painel" element={<Painel/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas