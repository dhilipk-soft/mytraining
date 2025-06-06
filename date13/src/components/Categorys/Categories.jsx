import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <NavLink to="/" className={({ isActive }) => isActive ? "categorie stays active" : "categorie stays"}>
        Stays
      </NavLink>
      <NavLink to="/flights" className={({ isActive }) => isActive ? "categorie flights active" : "categorie flights"}>
        Flights
      </NavLink>
      <NavLink to="/stays" className={({ isActive }) => isActive ? "categorie flight-hotel active" : "categorie flight-hotel"}>
        Flight + Hotel
      </NavLink>
      <NavLink to="/car-rents" className={({ isActive }) => isActive ? "categorie car-rents active" : "categorie car-rents"}>
        Car rentals
      </NavLink>
      <NavLink to="/attractions" className={({ isActive }) => isActive ? "categorie attractions active" : "categorie attractions"}>
        Attractions
      </NavLink>
      <NavLink to="/airport-taxis" className={({ isActive }) => isActive ? "categorie airport-taxis active" : "categorie airport-taxis"}>
        Airport Taxis
      </NavLink>
    </div>
  );
}
