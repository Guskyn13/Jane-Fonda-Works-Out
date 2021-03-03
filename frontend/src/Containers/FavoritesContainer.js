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
        <div className="favorites-container">
            <h2>Favorites</h2>
            <ul className="favorites-ul">
                { displayCard() }
            </ul>
        </div>
    )
}