import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "./components/Header";

import Home from './pages/Home'
import Error from './pages/Error'

const Rotas = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas