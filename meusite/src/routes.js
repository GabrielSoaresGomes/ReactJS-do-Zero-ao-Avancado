import React from "react";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import HOCTaskDetail from "./pages/Produto";
import Erro from './pages/Erro'

import Header from "./components/Header";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/produto/:id" element={<HOCTaskDetail/>} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas