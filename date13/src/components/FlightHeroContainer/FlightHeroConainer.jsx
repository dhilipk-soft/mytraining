
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
                            <div> <input type="radio" name="trip" defaultChecked for="roundtrip" id="roundtrip" className="checkFlight roundtrip" /> 
                                <label htmlFor="roundtrip">Round-trip</label>
                            </div>
                            <div> <input type="radio" name="trip" for="oneway" id="oneway" className="checkFlight oneway" />
                                <label htmlFor="oneway">One-way</label>
                            </div>
                            <div> <input type="radio" name="trip" for="multicity" id="multicity" className="checkFlight multicity" />
                                <label htmlFor="multicity">Multi-city</label>
                            </div>
                            <div className="economyContainer">
                                <select name="economySelect" id="economySelect">
                                    <option value="economy" selected>Economy</option>
                                    <option value="premium">Premium Economy</option>
                                    <option value="business">Business </option>
                                    <option value="first">First Class</option>
                                </select>
                            </div>
                            <div className="directflightonlyCheckbox">
                                <input type="checkbox" name="directflightonly" id="directflightonly" />
                                <label htmlFor="directflightonly">Direct flights only</label>
                            </div>
                        </div>
                    </div>

                    <div className="flightSearchBoxContainerDefalut">
                        <div className="flightSearchBoxContainerWrapper">
                            <div className="flightSearchBoxHorizontalDefault">
                                <div className="flightSearchBoxfrom">
                                    <div>Living from</div>
                                    <div></div>
                                </div>
                                <div className="flightSearchBoxSwitch">
                                    <button>Switch</button>
                                </div>
                                <div className="flightSearchBoxto">
                                    <div>Going to</div>
                                </div>
                                <div className="flightSearchBoxDate">
                                    <div>Travel date</div>
                                    <div>Sat, Jul </div>
                                </div>
                                <div className="flightSearchBoxTraveller">
                                    <div>Travellers</div>
                                    <div>1 adult</div>
                                </div>
                            </div>
                            <div className="flightSearchBoxSearchButton">
                                <button>Search</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}