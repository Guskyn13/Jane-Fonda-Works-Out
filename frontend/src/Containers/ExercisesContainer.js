import React from 'react'
import Card from '../Components/Card'

export default function ExercisesContainer({exercises}) {

    const displayCard = () => {
        return exercises.map(exercise => {
            return <Card exercise={ exercise } key={ exercises.id }/>
        })
    }

    return (
        <ul>
            { displayCard() }
        </ul>
    )
}
