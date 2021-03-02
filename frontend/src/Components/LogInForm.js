import { Component } from 'react'

class LogInForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (target) = {
        target.name === username ? this.setState({ username: target.value }) : this.setState({ password: target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="username">Secret Alias:</label>
                <input type="text" name="username" id="username" value={this.state.password} onChange={handleChange}/>
                <label for="password">Magic Word:</label>
                <input type="password" name="password" id="password" value={this.state.username} onChange={handleChange}/>
                <input type="submit" value="ENTER"/>
            </form>
        )
    }
    
}

export default LogInForm