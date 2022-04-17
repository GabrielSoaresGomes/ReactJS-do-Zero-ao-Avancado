import React from 'react'
import TodoItems from "./TodoItems";

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tarefa:"",
            items: [],
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }

    addItem(e) {
        e.preventDefault()
        let state = this.state
        if (this._tarefaInput.value !== ""){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({items: [...state.items, newItem], tarefa:"" })

        }
    }

    deleteItem(key){
        let filtro = this.state.items.filter( (item) => {
            return(item.key !== key)
        })
        this.setState({items: filtro})

    }

    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova Tarefa?" name="tarefa"
                           value={this.state.tarefa}
                           onChange={(e) => {this.setState({tarefa:e.target.value})}}
                           ref={ (e) => this._tarefaInput = e  }
                    />
                    <button type="submit" >
                        Adicionar
                    </button>
                </form>

                <button onClick={(e) => {
                    console.log(this.state.items)
                }}>LOG</button>

                <TodoItems items={this.state.items} delete={this.deleteItem} />

            </div>
        )
    }
}

export default TodoList