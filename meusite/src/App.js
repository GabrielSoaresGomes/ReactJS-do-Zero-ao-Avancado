import React from 'react'

const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem-Vindo(a) {props.nome} </h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    )
}

function App() {
    return (
        <div>
            <p>Olá</p>
            <BemVindo nome="Gabriel" idade={18} />
            <BemVindo nome="Gabriel" idade={17} />
        </div>
    )
}

export default App