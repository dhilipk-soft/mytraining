export default function Categories({setActiveDashboard}) {

    return (
        <div className="categories">
            <div className="categorie stays" onClick={() => setActiveDashboard("stays")}>
                Stays
            </div>
            <div className="categorie flights" onClick={() => setActiveDashboard("flights")}>
                Flights
            </div>
            <div className="categorie filght-hotel" >
                Flight + Hotel
            </div>
            <div className="categorie car-rents " onClick={() => setActiveDashboard("car-rents")}>
                Car rentals
            </div>
            <div className="categorie attractions " onClick={() => setActiveDashboard("attractions")}>
                Attractions
            </div>
            <div className="categorie airport-taxis " onClick={() => setActiveDashboard("airport-taxis")}>
                Airport Taxis
            </div>
        </div>
    )
}