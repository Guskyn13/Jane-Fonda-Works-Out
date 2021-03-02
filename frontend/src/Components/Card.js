import React from 'react'

export default function Card({ exercise }) {
    return (
        <div>
            <h2>{ exercise.name }</h2>
            <img src={ exercise.image } alt={ exercise.name } />
        </div>
    )
}
