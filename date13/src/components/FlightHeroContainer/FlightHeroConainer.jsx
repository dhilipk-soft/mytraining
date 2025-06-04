
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
                        <div className="flightheroBottomCheckList">
                            <div> <input type="checkbox" for="roundtrip" id="roundtrip" className="checkFlight roundtrip" /> 
                                <label htmlFor="roundtrip">Round-trip</label>
                            </div>
                            <div> <input type="checkbox" for="oneway" id="oneway" className="checkFlight oneway" />
                                <label htmlFor="oneway">One-way</label>
                            </div>
                            <div> <input type="checkbox" for="multicity" id="multicity" className="checkFlight multicity" />
                                <label htmlFor="multicity">Multi-city</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}