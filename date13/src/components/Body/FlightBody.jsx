import PopularFlight from "../Popular/PopularFlight";

import SignContainer from "../SignContainer/SignContainer";

export default function FlightBody() {
  return <div className="flightBody">
    <PopularFlight />
    <SignContainer />
  </div>;
}