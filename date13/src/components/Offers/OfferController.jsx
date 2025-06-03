import { useState } from "react"
import Offers from "./Offers"

export default function OffersController() {

    const [offer, setOffer] = useState([
        {
            id: 1,
            title: "Quick escape, quality time",
            description: "Promotions, deals, and special offers for you",
            discount: 20,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        }
    ])

    return (
        <div className="offersController">
            <h2>Offers</h2>
            <p>Promotions, deal, and special offers for you</p>
            {
                offer.map((offer) => (
                    <Offers key={offer.id} offer={offer} />
                ))
            }
        </div>
    )
}