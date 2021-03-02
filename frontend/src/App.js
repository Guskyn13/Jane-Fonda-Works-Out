import './App.css';

import { Component } from 'react'
import Header from './Containers/Header';

class App extends Component {

  state = {
    user: "",
    exercises: [],
    favorites: []
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  
}

export default App;
