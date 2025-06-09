
import Flight from "./Flight"
export default function FlightList({flights, portType}) {
    return (
        <div className="flightList">
            <div className="flightlistContainer">
                {flights
                    .filter(flight => flight.portType.toLowerCase() === portType.toLowerCase())
                    .map(flight => <Flight key={flight.id} flight={flight} />)
                }
            </div>
        </div>
    )
}