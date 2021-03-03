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

  setUser = (user) => {
    this.setState({ user: {
      user_id: user.id,
      username: user.username
    }})
  }

  setFavorites = (favorites) => {
    this.setState({ favorites })
  }

  removeFavorite = (exercise) => {
    const favorites = this.state.favorites.filter(favorite => favorite !== exercise)
    this.setState({ favorites })
    fetch(`${backendURL}/favorites/${exercise.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(console.log)
  }


  addFavorite = (exercise) => {
    const foundFav = this.state.favorites.find(favorite => favorite === exercise)
    if(!foundFav){
      this.setState({
        favorites: [...this.state.favorites, exercise]
      })
      fetch(`${backendURL}/favorites`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user.user_id,
          exercise_id: exercise.id
        })
      })
        .then(response => response.json())
        .then(console.log)
    }
  }

  render() {
    return (
      <div className="App">
        <Header setUser={this.setUser} set setFavorites={ this.setFavorites }/>
        { this.state.user 
        ? <Body exercises={ this.state.exercises } favorites={ this.state.favorites } addFavorite={ this.addFavorite } removeFavorite= { this.removeFavorite } />
        : null }
      
      </div>
    );
  }
}
export default App;
