import PropertyTypes from "./PropertyTypes"
import { useState } from "react"
export default function PropertyController() {

    const [propertyType, setPropertyType] = useState([
        {
            id: 1,
            name: "Country House",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 2,
            name: "Apartment",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 3,
            name: "Villa",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 4,
            name: "Penthouse",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 5,
            name: "Hotel",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 6,
            name: "Resort",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 7,
            name: "Mansion",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 8,
            name: "Cottage",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 9,
            name: "House",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },{
            id: 10,
            name: "Farm House",
            image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        }      
    ])

    return (
        <div className="propertyController">
            <h2>Browse by Property Type</h2>
            <div className="propertyList">
                {
                propertyType.map((propertyType) => (
                    <PropertyTypes propertyType={propertyType} key={propertyType.id}/>
                ))
            }
            </div>
            
        </div>
    )
}