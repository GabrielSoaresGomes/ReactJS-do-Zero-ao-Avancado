import React from "react";
import { Link } from "react-router-dom";

class Sobre extends React.Component{
    render() {
        return(
            <div>
                <h2>Sobre</h2>
                <Link to="/">Ir para home</Link>
            </div>
        )
    }
}

export default Sobre