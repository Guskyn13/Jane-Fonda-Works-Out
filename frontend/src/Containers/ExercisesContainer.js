import React from 'react'
import Card from '../Components/Card'

import './ExercisesContainer.css'

export default function ExercisesContainer({exercises}) {

    const displayCard = () => {
        return exercises.map(exercise => {
            return <Card exercise={ exercise } key={ exercises.id }/>
        })
    }

    return (
        <ul className="execises-container">
            { displayCard() }
        </ul>
    )
}
