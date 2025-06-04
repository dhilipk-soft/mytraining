import { Link } from "react-router-dom"
export default function Categories() {

    return (
        <div className="categories">
            <Link to={"/"}>
                <div className="categorie stays" >
                    Stays
                </div>
            </Link>
            <Link to={"/flights"}>
                <div className="categorie flights" >
                    Flights
                </div>
            </Link>
            <Link to={"/stays"}>
                <div className="categorie filght-hotel" >
                    Flight + Hotel
                </div>
            </Link>
            <Link to={"/car-rents"}>
                <div className="categorie car-rents " >
                    Car rentals
                </div>
            </Link>
            <Link to={"/attractions"}>
                <div className="categorie attractions " >
                    Attractions
                </div>
            </Link>
            <Link to={"/airport-taxis"}>
                <div className="categorie airport-taxis " >
                    Airport Taxis
                </div>
            </Link>
                
        </div>
    )
}