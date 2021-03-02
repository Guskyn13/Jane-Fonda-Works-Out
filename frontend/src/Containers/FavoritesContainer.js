import React from 'react'
import Card from '../Components/Card'

export default function FavoritesContainer({ favorites }) {

    const displayCard = () => {
        return favorites.map(favorite => {
            return <Card exercise={ favorite } key={ favorite.id }/>
        })
    }

    return (
        <ul className="execises-container">
            { displayCard() }
        </ul>
    )
}