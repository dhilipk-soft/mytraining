
import { NavLink } from "react-router-dom"
export default function Trip({trip}){
    return(
        <NavLink to={`/search`} className="tripComponent">
            <img src={trip.image} alt={trip.location} />
            <div className="tripBody">
                <h3>{trip.location.split(", ")[0]}</h3>
                <p>{trip.distance}km away</p>
            </div>
        </NavLink>
    )

}