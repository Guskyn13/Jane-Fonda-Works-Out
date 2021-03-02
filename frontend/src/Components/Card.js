import React from 'react'

import './Card.css'

export default function Card({ exercise }) {
    return (
        <li className = "exercise-card">
        <img src={ exercise.image } alt={ exercise.name } />
            <h2>{ exercise.name }</h2>
        </li>
    )
}
