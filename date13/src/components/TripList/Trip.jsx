import React, { useContext } from "react"
import { SearchContext } from "../../Context/SearchContext.jsx"
import { NavLink } from "react-router-dom"


export default function Trip({ hotel }) {
  const { setSearch } = useContext(SearchContext)

  // console.log(hotel+"Rendered")

  const location = hotel.trip.location.split(", ")[0] // e.g., "Vadodara"
  const distance = hotel.trip.distance
  const image = hotel.image

  return (
    <NavLink
      to={{
        pathname: "/search",
        search: `?location=${location}`,
      }}
      onClick={() => setSearch(location)}
      className="tripComponent"
    >
      <img src={image} alt={location} />
      <div className="tripBody">
        <h3>{location}</h3>
        <p>{distance} km away</p>
      </div>
    </NavLink>
    // <div>

    // </div>
  )
}
