import { useState } from "react"
import TrendingDestination from "./TrendingDestination"
export default function TrendingDestinationController() {

    const [trendingDestination, setTrendingDestination] = useState([
        {
            id: 1,
            name: "Dubai",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 2,
            name: "London",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 3,
            name: "Paris",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 4,
            name: "New York",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 5,
            name: "Tokyo",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        }      
    ])

    return (
        <div className="trending">
            <h2>Trending Destination</h2>
            <div className="trendingdestination">
            {
                trendingDestination.map((destination) => {
                    return <TrendingDestination key={destination.id} destination={destination} />
                })
            }
            </div>
        </div>
    )
}