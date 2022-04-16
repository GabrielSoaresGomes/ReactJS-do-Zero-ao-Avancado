import React, {Component} from 'react'

class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            form: {
                nome: "Matheus",
                email: "matheus@sujeito.com",
                senha:"123",
                sexo: "masculino",
            }
        }

        this.dadosForm = this.dadosForm.bind(this)
    }

    dadosForm(e){
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    render() {
        return(
            <div>
               <h1>Novo Usuário</h1>
               {this.state.error && <p>{this.state.error}</p> }
               <form onSubmit={this.cadastrar}>
                   <label for="nome">Nome: </label>
                   <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} /> <br/>
                   <label for="email">Email: </label>
                   <input type="email" name='email' value={this.state.form.email} onChange={this.dadosForm} /> <br/>
                   <label for="senha">Senha: </label>
                   <input type="password" name='senha' value={this.state.form.senha} onChange={this.dadosForm} /> <br/>
                   <label for="sexo">Sexo: </label>
                   <select name='sexo' id='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
                       <option value={"masculino"}>Masculino</option>
                       <option value={"feminino"}>Feminino</option>
                   </select>
                   <button type='submit'>Cadastrar</button>



               </form>
            </div>
        )
    }
}

export default App;