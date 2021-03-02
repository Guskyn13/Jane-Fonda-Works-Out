import React from 'react'

import './Card.css'

export default function Card({ exercise, addFavorite }) {

    const handleClick = () => {
        addFavorite(exercise)
    }

    return (
        <li className = "exercise-card" onClick={handleClick}>
        <img src={ exercise.gif } alt={ exercise.name } />
            <h2>{ exercise.name }</h2>
        </li>
    )
}
