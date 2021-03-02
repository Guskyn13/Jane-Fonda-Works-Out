import React from 'react'

import ExercisesContainer from './ExercisesContainer'
import FavoritesContainer from './FavoritesContainer'

import './Body.css'

export default function Body({ exercises }) {
    return (
        <div className = "body">
            <FavoritesContainer />
            <ExercisesContainer exercises={ exercises }/>
        </div>
    )
}
