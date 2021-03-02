import { Component } from 'react'

import LogInForm from '../Components/LogInForm'
import Logo from '../Components/Logo'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <h1>JANE FONDA WORKS OUT</h1>
                <LogInForm />
            </header>
        )
    }
}

export default Header