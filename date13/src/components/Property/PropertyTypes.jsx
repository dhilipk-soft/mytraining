
import { NavLink } from "react-router-dom"
export default function PropertyTypes({ propertyType }) {
    return (
        <NavLink to={`/search`} className="propertyTypes">
            <img src={propertyType.image} alt={propertyType.name} />
            <h3>{propertyType.name}</h3>
        </NavLink>
    )
}