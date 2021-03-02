import './App.css';
import Body from './Containers/Body'
import { Component } from 'react'

import Header from './Containers/Header';
const backendURL = 'http://localhost:3000'

class App extends Component {

  state = {
    user: "",
    exercises: [],
    favorites: []
  }

  componentDidMount() {
    fetch(`${backendURL}/exercises`)
      .then(response => response.json())
      .then((results) => {
          this.setState({exercises: results})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body exercises={ this.state.exercises }/>
      
      </div>
    );
  }
}
export default App;
