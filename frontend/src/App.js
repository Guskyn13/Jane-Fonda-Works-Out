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
    fetch('https://rickandmortyapi.com/api/character/?page=2')
      .then(response => response.json())
      .then(({ results }) => {
          this.setState({exercises: results})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}
export default App;
