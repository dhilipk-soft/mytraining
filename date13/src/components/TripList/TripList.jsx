import  { useRef } from "react"
import Trip from "./Trip"
export default function TripList({hotelData}) {

     const listRef = useRef(null);

     

    return (
       <div className="triplist" >
        {
            hotelData && hotelData.map((hotel, index) => (
                <Trip key={index} hotel={hotel} />
            ))
       }
      </div>
    )
}