import FlightList from "../ListShow/FlightList";
import { useState } from "react";

export default function PopularFlight() {

    const [flights, setFlights] = useState([
        {
            id: 1,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=2e7b71d0d1c3c5b3bd68898ef796748f74272f047d339815da0855a2b478ecf0&o=",
            title : "Indonesia",
            time : "5h 30m",
            portType : "international"
        },
        {
            id: 2,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977219.webp?k=5195e2536fa76cce99b3832db957dd594556791764839bb4ac3a64278c99ff4d&o=",
            title : "Hydrobath",
            time : "5h 30m",
            portType : "domestic"
        },
        {
            id: 3,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977219.webp?k=5195e2536fa76cce99b3832db957dd594556791764839bb4ac3a64278c99ff4d&o=",
            title : "Delhi",
            time : "5h 30m",
            portType : "domestic"
        },
        {
            id: 4,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=2e7b71d0d1c3c5b3bd68898ef796748f74272f047d339815da0855a2b478ecf0&o=",
            title : "Jepan",
            time : "5h 30m",
            portType : "international"
        },
        {
            id: 5,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977219.webp?k=5195e2536fa76cce99b3832db957dd594556791764839bb4ac3a64278c99ff4d&o=",
            title : "Homwe town",
            time : "5h 30m",
            portType : "domestic"
        },
        {
            id: 6,
            img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=2e7b71d0d1c3c5b3bd68898ef796748f74272f047d339815da0855a2b478ecf0&o=",
            title : "Hawaii",
            time : "5h 30m",
            portType : "international"
        }
    ])
    const [search, setSearch] = useState("")
    const [type, setType] = useState("")
    const [searchText, setSearchText] = useState("")
    const [portType, setPortType] = useState("International")

    return (
        <div className="popularFlight">
            <div className="popularFlightHeader">
                <h1>Popular flights near you</h1>
                <p>Find deals on domestic and international flights</p>
            </div>
            <div className="popularFlightBottom">
                <div className="popularFlightType">
                    <div className="popularFlightInternationalText">
                        <div className="popularFlightInternationalh" onClick={() => setPortType("International")}>
                            International
                        </div>
                        <hr />
                    </div>
                    <div className="popularFlightDomesticText">
                        <div className="popularFlightDomestich" onClick={() => setPortType("Domestic")}>
                            Domestic
                        </div>
                        <hr />
                    </div>
                </div>
                <hr />
                <div className="popularFlightContainerList">
                    <FlightList flights={flights} portType={portType} />
                </div>
            </div>
        </div>  
    )
}