import React from 'react'

import './Card.css'

export default function Card({ exercise, handleIT }) {

    const handleClick = () => {
        handleIT(exercise)
    }

    return (
        <li className = "exercise-card" onClick={handleClick}>
        <img src={ exercise.gif } alt={ exercise.name } />
            <h2>{ exercise.name }</h2>
        </li>
    )
}