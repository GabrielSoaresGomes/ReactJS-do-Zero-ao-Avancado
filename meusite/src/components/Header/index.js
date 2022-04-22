import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                Header Meu Projeto
                <Link to="/">Home </Link>
                <Link to="/sobre">Sobre</Link>
                <hr/>
            </div>
        )
    }
}

export default Header