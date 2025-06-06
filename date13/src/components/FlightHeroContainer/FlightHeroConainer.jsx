import FlightSearchBox from "../SearchBox/FlightSearchBox"
export default function FlightHeroContainer() {

    return (
        <div className="flightheroContainer">
            <div className="flightheroContainerBlock">
                <div className="flightheroContainerHeader">
                    <h1>Compare and book cheap flights with easy</h1>
                    <p>Discoure your next destination</p>
                </div>
            </div>
            <div className="flightheroContainerBottom">
                <FlightSearchBox />
            </div>
        </div>
    )
}