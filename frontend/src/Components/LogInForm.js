import { Component } from 'react'

class LogInForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        let { name, value } = event.target
        name === "username" ? this.setState({ username: value }) : this.setState({ password: value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Secret Alias:</label>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                <label>Magic Word:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="ENTER"/>
            </form>
        )
    }
    
}

export default LogInForm