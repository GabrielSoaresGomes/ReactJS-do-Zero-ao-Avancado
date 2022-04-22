import React, {Component} from 'react'
import Rotas from './routes'

import './style.css'

class App extends Component {
  render() {
    return(
      <div className='app'>
          <Rotas />
      </div>
    )
  }
}

export default App