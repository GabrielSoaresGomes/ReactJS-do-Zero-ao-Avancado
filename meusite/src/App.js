import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {    
            email: '',
            senha: '',
            sexo: 'masculino'
        }
        this.trocaEmail = this.trocaEmail.bind(this)
        this.mostrarDados = this.mostrarDados.bind(this)
        this.trocarSexo = this.trocarSexo.bind(this)
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado})
    }

    mostrarDados() {
        document.getElementById('dados').style.display === 'block' ?
        document.getElementById('dados').style.display = 'none':
        document.getElementById('dados').style.display = 'block'
    }
    
    trocarSexo(e) {
        this.setState({sexo: e.target.value})
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail} /> <br/>
                Senha:
                <input id='inputSenha' type="password" name='senha' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
                <button onClick={() => {
                        document.getElementById('inputSenha').getAttribute('type') === "password" ? 
                        document.getElementById('inputSenha').setAttribute('type', 'text') :
                        document.getElementById('inputSenha').setAttribute('type', 'password')
                    }} >Mostrar Senha</button>
                <br/>
                Sexo:
                <select name="sexo" onChange={this.trocarSexo} value={this.state.sexo}>
                    <option value='masculino'>Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <button onClick={this.mostrarDados}>Mostrar Dados</button>
                <p style={{display: 'none'}} id='dados'>EMAIL:{this.state.email} <br/> SENHA:{this.state.senha} <br/> SEXO:{this.state.sexo} </p>
            </div>
        )
    }
}

export default App;