import React from "react";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas