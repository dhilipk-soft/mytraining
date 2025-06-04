import { useState } from "react"
import HotelContainer from "../WeekDeals/HotelContainer";
export default function UniquePropertie(){

    const [rooms, setRooms] = useState([
    {
        id : 1,
        name : "Hotel 1Square",
        price : 100,
        rating : 4.5,
        discount : 10,
        image : "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location : "New York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        reviews : 100,
        availability : "Available"
    },{
        id : 2,
        name : "Super Townhouse",
        price : 100,
        rating : 4.5,
        discount : 10,
        image : "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location : "New York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        reviews : 100,
        availability : "Available"
    },{
        id : 3,
        name : "Olive Hotel HAL 2nd Stage by Embassy Group",
        price : 100,
        rating : 4.5,
        discount : 10,
        image : "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location : "New York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        reviews : 100,
        availability : "Available"
    },{
        id : 4,
        name : "Raintree, St. Mary's Road",
        price : 100,
        rating : 4.5,
        discount : 10,
        image : "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location : "New York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        reviews : 100,
        availability : "Available"
    },{
        id : 5,
        name : "Hotel 1Square",
        price : 100,
        rating : 4.5,
        discount : 10,
        image : "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location : "New York",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        reviews : 100,
        availability : "Available"
    }
    ]);

    return (
        <div className="uniqueProperty">
            <div className="uniquepropertyhead">
                <h2>Stay at our top unique properties</h2>
                <p>From castles and villas to boats and igloos, we have it all</p>
            </div>
            <div className="uniquepropertybottom">
                {
                    rooms.map((room) => {
                        return <div className="propertyContainer">
                            <HotelContainer key={room.id} room={room} display={false} /> 
                        </div>
                        
                    })
                }
            </div>
        </div>
    )
}