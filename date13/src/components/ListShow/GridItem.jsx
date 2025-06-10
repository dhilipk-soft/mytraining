
export default function GridItem({hotel, getRatingLabel}) {
    return (
        <div className="gridItem">
            <div className="gridItemImage">
                <img src={hotel.image} alt="" />
            </div>
            <div className="gridItemBody">
                <div className="gridBodyUp">
                    <div className="hotelNameGrid">
                        <h2>{hotel.name}</h2>
                    </div>
                    <div className="hotelRateGrid">
                        <div className="gridItemRating">
                            {hotel.rooms[0].rating}
                        </div>
                        <div className="gridItemRatingClas">
                            {getRatingLabel(hotel.rooms[0].rating)}
                        </div>
                    </div>
                    <div className="gridHotelLocation">
                        <p>{hotel.trip.location}</p>
                    </div>
                </div>
                <hr />
                <div className="gridBodyDown">
                        <div className="gridRoomDetailsLeft">
                        <div className="gridRoomStyle">
                            <p>Deluxe TWins Room</p>
                        </div>  
                        <div className="gridRoomCancellation">
                            <p>✅ Free cancellation</p>
                        </div>
                    </div>
                    <div className="gridDownPrice">
                        <h2>₹ {hotel.rooms[0].price}</h2>
                        <p>Includes taxes and fees</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}