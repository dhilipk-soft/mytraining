
export default function HorItem({hotel,getRatingLabel}) {

   

    return (
        <div className="horItem">
            <div className="horItemImage">
                <img src={hotel.image} alt="" />
            </div>
            <div className="horItemDetails">
                <div className="hotelnameWithrate">
                    <div className="hotelWithlocation">
                        <h2>{hotel.name}</h2>
                        <div className="hotellocation">
                            <p>{hotel.trip.location}</p>
                        </div>
                    </div>
                    <div className="ratingAndCacification">
                        <div className="hotelCategory">
                            <p>{getRatingLabel(hotel.rooms[0].rating)}</p>
                        </div>
                        <div className="rateingHotel">
                            {hotel.rooms[0].rating}
                        </div>
                    </div>
                </div>
                <div className="hotelRoomDetails">
                    <div className="hotelRoomDetailsLeft">
                        <div className="hotelRoomStyle">
                            <p>Deluxe TWins Room</p>
                        </div>
                        <div className="hotelRoomCancellation">
                            <p>✅ Free cancellation</p>
                        </div>
                    </div>
                    <div className="hotelRoomDetailsRight">
                        <h2>₹ {hotel.rooms[0].price}</h2>
                        <button>{"See availability"+" "+"   >"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}