import React, {Component} from 'react'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nome:"",
            email:"",
            senha:"",
            error:"",
        }
        this.mudarNome = this.mudarNome.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        const {nome, email, senha} = this.state

        if(nome !== '' && email !== '' && senha !== ""){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        }else {
            this.setState({"error": "Opa, esqueceu de preencher algo!"})
        }

        

        event.preventDefault()
    }

    mudarNome(e) {
        this.setState({'nome':e.target.value})
    }

    render() {
        return(
            <div>
               <h1>Novo Usuário</h1>
               {this.state.error && <p>{this.state.error}</p> }
               <form onSubmit={this.cadastrar}>
                   <label for="nome">Nome: </label>
                   <input type="text" name="nome" value={this.state.nome} onChange={this.mudarNome} /> <br/>
                   <label for="email">Email: </label>
                   <input type="email" name='email' value={this.state.email} onChange={(e) => {this.setState({'email':e.target.value})}} /> <br/>
                   <label for="senha">Senha: </label>
                   <input type="password" name='senha' value={this.state.senha} onChange={(e) => {this.setState({'senha': e.target.value})}} /> <br/>
                   <button type='submit'>Cadastrar</button>

               </form>
            </div>
        )
    }
}

export default App;