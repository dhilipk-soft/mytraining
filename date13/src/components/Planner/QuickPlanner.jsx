import { useState } from "react"
import QuickPlannerCategory from "./QuickPlannerCategory"
import TripList from "../TripList/TripList"
export default function QuickPlanner() {

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
        <div className="quickPlanner">
            <div className="quickplanner-top">
                <h1>Quick and easy trip planner</h1>
                <p>Pick a vibe and explore top destination in india</p>
            </div>
            <QuickPlannerCategory />
            <TripList trip={trip} />
        </div>
    )
}