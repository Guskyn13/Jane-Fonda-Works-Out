import React from 'react'
import ExercisesContainer from './ExercisesContainer'
import FavoritesContainer from './FavoritesContainer'

export default function Body({ exercises }) {
    return (
        <div>
            <FavoritesContainer />
            <ExercisesContainer exercises={ exercises }/>
        </div>
    )
}
