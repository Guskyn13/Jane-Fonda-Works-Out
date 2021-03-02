import { Component } from 'react'

import './LoginForm.css'
const backendURL = 'http://localhost:3000'

class LogInForm extends Component {

    state = {
        username: "",
        password: "",
        sign_up: false
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.sign_up){
            fetch(`${backendURL}/users`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(console.log)
        } else {
            fetch(`${backendURL}/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(console.log)
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target
        name === "username" ? this.setState({ username: value }) : this.setState({ password: value })
    }

    handleClick = (event) => {
        event.preventDefault()

        this.setState({ sign_up: !this.state.sign_up})

    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                {this.state.sign_up ?  <h2>Sign Up</h2> : <h2>Log In</h2>}
                <label>Secret Alias:</label>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                <label>Magic Word:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="ENTER"/>
                {this.state.sign_up ? <button onClick={this.handleClick}>Log In</button> : <button onClick={this.handleClick}>Sign Up</button>}
            </form>
        )
    }
    
}

export default LogInForm