
export default function FlightHeroContainer() {

    return (
        <div className="flightheroContainer">
            <div className="flightheroContainerBlock">
                <div className="flightheroContainerHeader">
                    <h1>Compare and book cheap flights with easy</h1>
                    <p>Discoure your next destination</p>
                </div>
                <div className="flightheroContainerBottom">
                    <div className="flightheroBottomCheck">
                        <ul className="flightheroBottomCheckList">
                            <li> <input type="checkbox" for="roundtrip" id="roundtrip" /> 
                                <label htmlFor="roundtrip">Round-trip</label>
                            </li>
                            <li> <input type="checkbox" for="oneway" id="oneway" />
                                <label htmlFor="oneway">One-way</label>
                            </li>
                            <li> <input type="checkbox" for="multicity" id="multicity" />
                                <label htmlFor="multicity">Multi-city</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}