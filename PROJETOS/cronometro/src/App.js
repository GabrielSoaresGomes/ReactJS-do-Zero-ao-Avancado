import React, { Component } from 'react'
import './style.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: 0,
            textoBtn: 'VAI',
            quantSalva: 0,
        }

        this.vai = this.vai.bind(this)
        this.limpar = this.limpar.bind(this)
        this.salvarMomento = this.salvarMomento.bind(this)
        this.limparSalvos = this.limparSalvos.bind(this)
    }

    vai() {

        if (this.timer != null) {
            clearInterval(this.timer)
            this.setState({textoBtn: "VAI"})
            this.timer = null
        } else {
            this.timer = setInterval(() => {
                let state = this.state
                state.numero += 0.1
                state.textoBtn = "PARAR"
                this.setState(state)

            }, 100)

        }
    }

    limpar() {
        clearInterval(this.timer)
        this.setState({numero:0, textoBtn:"VAI"})
    }

    limparSalvos() {
        let list = document.getElementById('listaMomentos')
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
        this.setState({quantSalva:0})
        
    }

    salvarMomento() {
        if (this.state.quantSalva < 20) {
            let li = document.createElement('li')
            li.innerHTML = this.state.numero.toFixed(1)
            document.getElementById('listaMomentos').appendChild(li)
            this.state.quantSalva ++
            this.setState(this.state)
        }
    }

    render() {
        return (
            <div className='container-all'>
                <div className='container'>
                    <img className='img' src={require('./assets/cronometro.png')} alt="Imagem Cronometro" />
                    <a className='timer'>{this.state.numero.toFixed(1)}</a>
                    <div className='areaBtn'>
                        <a className='btn' onClick={this.vai}>{this.state.textoBtn}</a>
                        <a className='btn' onClick={this.limpar}>LIMPAR</a>
                    </div>
                    <a className='btn btnSalvar' onClick={this.salvarMomento}>SALVAR</a>
                </div>
                <div>
                    <h3>Momentos Salvos</h3>
                    <ol id='listaMomentos'>

                    </ol>
                    <a className='btn' onClick={this.limparSalvos}>Limpar Lista</a>
                </div>
            </div>
        )
    }
}

export default App