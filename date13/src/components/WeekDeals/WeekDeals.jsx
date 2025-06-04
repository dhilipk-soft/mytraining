import { useState } from "react"
import HotelContainer from "./HotelContainer";

export default function WeekDeals(){

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
        <div className="weekdeals">
            <div className="weekdealhead">
                <h2>Deals for the weekend</h2>
                <p>save on stays</p>
            </div>
            <div className="weekdealbody">
                {rooms.map((room) => (<HotelContainer key={room.id} room={room} display={true} />))}
            </div>
        </div>
    )
}