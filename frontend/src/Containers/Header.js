import LogInForm from '../Components/LogInForm'
import Logo from '../Components/Logo'

import './Header.css'

function Header({ setUser, setFavorites }) {
    return (
        <header className="header">
            <Logo />
            <h1>JANE FONDA WORKS OUT</h1>
            <LogInForm setUser={ setUser } setFavorites={ setFavorites }/>
        </header>
    )
}

export default Header