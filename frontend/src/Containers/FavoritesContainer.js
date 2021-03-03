import React from 'react'
import Card from '../Components/Card'
import './FavoritesContainer.css'


export default function FavoritesContainer({ favorites, removeFavorite }) {

    const displayCard = () => {
            return favorites.map(favorite => {
                return <Card className="exercise-card" exercise={ favorite } key={ favorite.id } handleIT={ removeFavorite }/>
            })
    }

    return (
        <ul className="execises-container">
            { displayCard() }
        </ul>
    )
}