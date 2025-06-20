import { useState, useContext } from "react";
import { SearchContext } from "../../Context/SearchContext.jsx";

export default function MainSearchBox() {
    const [adultCount, setAdultCount] = useState(2);
    const [childCount, setChildCount] = useState(0);
    const [roomCount, setRoomCount] = useState(1);

    const { search, setSearch } = useContext(SearchContext);
    

    return (
        <div className="searchbox">
            <div className="inputfield">
                <span className="icon">🛏️</span>
                <input className="searchbar" placeholder="Where are you going?" value={search} onChange={(e) => setSearch(e.target.value) } type="text" />
            </div>

            <div className="inputfield datebar">
                <span className="icon">📅</span>
                <span className="date-text">Check-in date — Check-out date</span>
            </div>

            <div className="inputfield choosemember">
                <span className="icon">👤</span>
                <span>{adultCount} adult · {childCount} children · {roomCount} room</span>
            </div>

            <button className="searchbtn">Search</button>
        </div>
    );
}
