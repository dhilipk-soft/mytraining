
import {useState,useContext} from 'react'
import { SearchContext } from '../../Context/SearchContext'
import HorItem from './HorItem'
import GridItem  from './GridItem'

//     id: 1,
//     name: "Tent 1",
//     image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
//     property: "Castle",
//     trip: { location: "Vadodara, India", distance: 850, price: "$4410" },
//     rooms: [
//       {
//         id: 1,
//         name: "Room 1 - Vadodara",
//         price: 522,
//         rating: 4.2,
//         discount: 10,
//         image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
//         location: "Vadodara",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         reviews: 177,
//         availability: "Sold Out",
//

export default function PreferedList({hotelData}) {

    const {search, setSearch} = useContext(SearchContext)
    const [showMode, setShowMode] = useState(true);

     const filteredHotels = hotelData.filter(trip =>
        trip.rooms.some(room => room.location === search)
    )

    return (
        <div className="preferedList">
            <div className="preferedSearchTitleContainer">
                <div className="preferedSearchTit">
                    <h2>{search}:{filteredHotels.length+" exact matches"}</h2>
                </div>
                <div className="prefredSearchShow">
                    <input type="checkbox" onClick={() => setShowMode(!showMode)}/>
                    <label htmlFor="preferedSearchShow">Grid/List</label>
                </div>
            </div>
            <div className="SearchedItem">
                {
                    showMode ? filteredHotels
                    .map((hotel) => {
                        return <HorItem key={hotel.id} hotel={hotel} />
                    }) : filteredHotels
                    .map((hotel) => {
                        return <GridItem key={hotel.id} hotel={hotel} />
                    })
                }
            </div>
        </div>
    )
}