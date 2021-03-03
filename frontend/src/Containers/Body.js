import React from 'react'

import ExercisesContainer from './ExercisesContainer'
import FavoritesContainer from './FavoritesContainer'

import './Body.css'

export default function Body({ exercises, favorites, addFavorite, removeFavorite }) {
    return (
        <div className = "body">
            <FavoritesContainer favorites={ favorites } removeFavorite={ removeFavorite }/>
            <ExercisesContainer exercises={ exercises } addFavorite={ addFavorite }/>
        </div>
    )
}