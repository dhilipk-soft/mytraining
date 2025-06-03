
export default function Trip({trip}){
    return(
        <div className="tripComponent">
            <img src={trip.image} alt={trip.location} />
            <div className="tripComponentBody">
                <h3>{trip.location.split(",")[0]}</h3>
                <p>{trip.distance}km away</p>
            </div>
            
        </div>
    )

}