import React from 'react'
import CommunistSymbol from './assets/communist_symbol.png'
import App from './App'

  

export default function HomePage() {
    return (
        <div className="container">
                    <h1 className="header-text">The Communist Manifesto</h1>
                    
                    <img className="cover-image" src={ CommunistSymbol } alt="Hammer & Sickle" />
                    <button className="button">Welcome Comrade</button>
                    {/* <button className="button">Welcome Comrade</button> */}
                     
             </div>
    )
}

