import React from 'react'
import { Container, Head, Titulo, BemVindo } from './styles'

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styles Components</Titulo>
      </Head>

      <BemVindo cor="00ff00" tamanhoFonte="40">
        Bem vindo(a)
      </BemVindo>

    </Container>
  );
}

export default App;

/*
<div className="container">
      <header className="header">
        <a className="titulo">Projeto Styles Components</a>
      </header>

      <h1>Bem vindo ao sistema!</h1>

    </div>
*/
