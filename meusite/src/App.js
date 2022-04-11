import React, {Component} from 'react'

import Membro from './components/Membro' //O react ja vai pegar o arquivo index dentro da pasta

class App extends Component{

    render() {
        return(
            <div>
                <Membro nome={"Visitante"} />
            </div>
        )
    }
}

export default App;