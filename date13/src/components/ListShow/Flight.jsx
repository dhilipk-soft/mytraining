
export default function Flight({flight}){
    return(
        <div className="flight">
            <div className="flightimg">
                <img src={flight.img} alt="" />
            </div>
            <div className="flightbottom">
                <div className="flighttitle">
                    {flight.title}
                </div>
                <div className="flighttime">
                    {flight.time}
                </div>
            </div>
        </div>
    )
}