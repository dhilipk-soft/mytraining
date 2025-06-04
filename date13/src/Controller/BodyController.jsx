
import Body from "../components/Body/Body"
import FlightBody from "../components/Body/FlightBody.jsx"

export default function BodyController({activeDashboard}) {


    return <div className="bodyController">
        {
            activeDashboard === "stays"   && <Body /> 
        }
        {
            activeDashboard === "flights"   && <FlightBody /> 
        }

    </div>
}