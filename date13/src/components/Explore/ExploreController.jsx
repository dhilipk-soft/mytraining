import { useState } from "react"
import TripList from "../TripList/TripList"

export default function ExploreController(){

    const [trip, setTrip] = useState([
        {
            id: 1,
            location: "Puttaparthi, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        },{
            id: 2,
            location: "Mysore, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        },{
            id: 3,
            location: "Hassan, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        },{
            id: 4,
            location: "Cochin, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        }, {
            id: 5,
            location: "Puttaparthi, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        },{
            id: 6,
            location: "Mysore, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        },{
            id: 7,
            location: "Hassan, India",
            distance: 292,
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            price: "$2000"
        }
    ])

    return (
        <div className="exploreController">
            <div className="exploretop">
                <h2>Explore India</h2>
                <p>These popular destination have a lot to offer</p>
            </div>
            <TripList trip={trip} />
            
        </div>
    )

}