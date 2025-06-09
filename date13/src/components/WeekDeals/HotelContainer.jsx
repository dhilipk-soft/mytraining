
import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { SearchContext } from "../../Context/SearchContext"

export default function HotelContainer({room,display}) {

    const {setSearch} = useContext(SearchContext);

    return (
        <NavLink to={{pathname:`/search`,
            location: `?location=${room.location}`,
            room: `?room=${room.name}`,
            type: "rooms"
        }}
        
        onClick={() => setSearch(room.location)}
        className="hotelContainer">
            <div className="hotelContainerHead">
                <img src={room.image} className="hotelContainerImage" alt="" />
            </div>
            <div className="hotelContainerBody">
                <div className="hotelContainerBodyTop" style={{ marginBottom: display ? "0" : "10px" }}>
                    <div className="hotelContainerBodyTopheadtag">
                        <h2>{room.name}</h2>
                    </div>
                    <p>{room.location}</p>
                    <div className="hotelRateReview">
                        <p> {room.rating} </p>
                        <div className="hotelRateReviewRight">
                            <p>Good</p>
                            <p>{room.reviews} reviews</p>
                        </div>

                    </div>
                </div>
                {display &&
                    <div className="hotelContainerBodyBottom">
                        <div className="hotelContainerBodyBottomRight">
                            <p>₹{room.price}</p>
                            <p>₹ {room.price * (100 - room.discount) / 100}</p> 
                        </div>
                    </div>
                 }
            </div>
        </NavLink>
    )
}