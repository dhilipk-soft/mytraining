import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Offers({offer}) {

    return (

        <div className="offers" >
            <div className="offers-left">
                <h2> {offer.title}</h2>
                <p>save up to {offer.discount}% with a Getaway Deal</p>
                <button>Save on stays</button>
            </div>
            <div className="offers-right">
                <img src={offer.image} alt={offer.title} />
            </div>
        </div>
    )
}