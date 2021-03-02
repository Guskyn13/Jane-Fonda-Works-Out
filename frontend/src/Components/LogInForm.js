import { Component } from 'react'

import './LoginForm.css'

class LogInForm extends Component {

    state = {
        username: "",
        password: "",
        sign_up: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
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