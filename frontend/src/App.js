import './App.css';
import Body from './Containers/Body'
import { Component } from 'react'

import Header from './Containers/Header';

class App extends Component {

  state = {
    user: "",
    exercises: [],
    favorites: []
  }

  componentDidMount() {
    fetch('https://wger.de/api/v2/exerciseinfo?language=2', {
      method: "GET",
      headers: {
        "Authorization": "Token e3d5c86b1a79d3bb902b6a31376c627c16c46145"
      }
    })
      .then(response => response.json())
      .then(({ results }) => {
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
