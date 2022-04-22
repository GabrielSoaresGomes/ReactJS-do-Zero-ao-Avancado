import React, {Component} from 'react';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouter(props) {
      let params = useParams()
      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}

class Produto extends Component{

    state={
        id : ""
      }
      componentDidMount() {
        this.setState({
          id : this.props.params.id
        })
        console.log(this.state.id)
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
          return <div>Produto {this.state.id}</div>;
      }
  }
  
  
  const HOCTaskDetail = withRouter(Produto);
  
  export default HOCTaskDetail;
  