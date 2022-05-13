import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './filme-info.css'

const Filme = (props) => {
    const [filme, setFilme] = useState([])

    const { id } = useParams()

    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
    useEffect( () => {
        fetch(url).then( (response) => response.json() ).then( (json) => {
            setFilme(json)
            console.log(json)
        } )
    },[url])

    return (
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={`Foto do filme ${filme.nome}`} />
            {filme.length !== 0 && 
            <h2>Sinopse</h2>}
            <p>{filme.sinopse}</p>
        </div>
    )
}

export default Filme