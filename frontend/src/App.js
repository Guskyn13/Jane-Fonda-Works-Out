import logo from './logo.svg';
import './App.css';
import Body from './Containers/Body'
import { Component } from 'react'

class App extends Component {

  state= {
    exercises: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/?page=2')
      .then(response => response.json())
      .then(({ results }) => {
          this.setState({exercises: results})
      })
  }

  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}
export default App;
