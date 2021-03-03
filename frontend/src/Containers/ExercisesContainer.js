import React from 'react'
import Card from '../Components/Card'

import './ExercisesContainer.css'

export default function ExercisesContainer({ exercises, addFavorite }) {

    const displayCard = () => {
        return exercises.map(exercise => {
            return <Card exercise={ exercise } key={ exercise.id } handleIT={ addFavorite }/>
        })
    }

    return (
        <div className="exercises-container">
            <h2>Exercises</h2>
            <ul className="exercises-ul">
                { displayCard() }
            </ul>
        </div>
    )
}