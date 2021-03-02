import React from 'react'
import ExercisesContainer from './ExercisesContainer'
import FavoritesContainer from './FavoritesContainer'

export default function Body() {
    return (
        <div>
            <FavoritesContainer />
            <ExercisesContainer />
        </div>
    )
}
