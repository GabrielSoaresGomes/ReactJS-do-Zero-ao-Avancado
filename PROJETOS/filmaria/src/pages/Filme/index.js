import React, {Component} from 'react'
import { useParams } from 'react-router-dom'


function extrairId(component) {
    function ID(props) {
        let params = useParams()
        return <Component {...props} params={params} />
    }
    return ID
}

class Filme extends Component{

    constructor(props){
        super(props)

        this.state = {
            filme: [],
            id: ""
        }
    }

   

    componentDidMount() {
        this.setState({ id: this.props.params.id })
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${this.state.id}`
        fetch(url).then( (r) => r.json() ).then( (json) => {
            this.setState({ filme:json })
            console.log(json)
        } )
    }

    static getDerivedStateFromProps(nextProps) {
        return {
          id : nextProps.params.id
        }
      }
      fetchData = id => {
          // ...
      };

    render() {
        return (
            <div>
                    <h1>Filme Unico</h1>
            </div>
        )
    }
}

const HOCTaskDetail = extrairId(Filme);
export default HOCTaskDetail;