import  { useRef } from "react"
import Trip from "./Trip"
export default function TripList({trip}) {

     const listRef = useRef(null);

     const scroll = (direction) => {
        if (direction === "left") {
            listRef.current.scrollBy({ left: -200, behavior: "smooth" });
        } else {
            listRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="triplist">
            {
                trip.map((trip) => {
                    return (
                        <Trip key={trip.id} trip={trip} />
                    )
                })
            }
        </div>
    )
}