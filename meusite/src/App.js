import React, {Component} from 'react'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nome:"",
            email:"",
            senha:"",
        }
        this.mudarNome = this.mudarNome.bind(this)
    }

    mudarNome(e) {
        this.setState({'nome':e.target.value})
    }

    render() {
        return(
            <div>
               <h1>Novo Usuário</h1>
               <form>
                   <label for="nome">Nome: </label>
                   <input type="text" name="nome" value={this.state.nome} onChange={this.mudarNome} />
               </form>
            </div>
        )
    }
}

export default App;