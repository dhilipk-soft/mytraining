import { useState } from 'react'

export default function FilterBox() {

    const [facilities, setFacilities] = useState([{
        id: 1,
        name: "Parking",
        checked: false
    },
    {
        id: 2,
        name: "Restaurant",
        checked: false
    },
    {
        id: 3,
        name: "Room  Service",
        checked: false
    },
    {
        id: 4,
        name: "24 Hour Front Desk",
        checked: false
    },
    {
        id: 5,
        name: "Swimming Pool",
        checked: false
    },
    {
        id: 6,
        name: "Bar",
        checked: false
    },
    {
        id: 7,
        name: "Gym",
        checked: false
    },
    
]);
    const [meals, setMeals] = useState([{
        id: 1,
        name: "Selt catering",
        checked: false
    },
    {
        id: 2,
        name: "Breakfast included",
        checked: false
    },
    {
        id: 3,
        name: "Dinner",
        checked: false
    },
    {
        id: 4,
        name: "All Meals included",
        checked: false
    },
    {
        id: 5,
        name: "Room Only",
        checked: false
    },

    ]);    

    const [facilitiesshow, setFacilitiesshow] = useState(false)
    const [bedcount, setBedcount] = useState(1)
    const [bathcount, setBathcount] = useState(1)

    const facilitiesList = facilitiesshow ? facilities : facilities.slice(0, 5)

    return (
        <div className="filterBox">

            <div className="filterFacilities">
                <div className="filterTitle">Filter
                </div>
                <div className="filterFacilitiesCheck">
                    {
                        facilitiesList.map((facility) => {
                            return <div className="filterFacility" key={facility.id}>
                                <input type="checkbox" id={facility.name} name={facility.name}
                                    checked={facility.checked} value={facility.name} />
                                <label htmlFor={facility.name}>{facility.name}</label>
                            </div>
                        })
                    }
                    <div className="filterFacilityShow" onClick={() => setFacilitiesshow(!facilitiesshow)}>
                        {facilitiesshow ? `Show Less ${ facilitiesList.length } ⬆️` : `Show More ${ facilitiesList.length }⬇️ `}

                    </div>
                </div>
            </div>
            <hr />
            <div className="bedandbath">
                <div className="bedandbathTitle">
                    Bedrooms and bathrooms
                </div>
                <div className="bedandbathcount">
                    <div className="bedrooms">
                        <div className="bedtitle">
                            Bedrooms
                        </div>
                        <div className="bathtitle">
                            Bathrooms
                        </div>
                    </div>
                    <div className="bathrooms">
                        <div className="bedcount">
                            <div className={`bedcountminus ${bedcount === 0? 'disabled' : ''}`} onClick={bedcount < 1 ? '' : ()=>setBedcount(bedcount-1)}>
                                -
                            </div>
                            <div className="bedcountvalue">
                                {bedcount}
                            </div>
                            <div className="bedcountplus" onClick={()=>setBedcount(bedcount+1)}>
                                +
                            </div>
                        </div>
                        <div className="bathcount">
                            <div className={`bathcountminus ${bathcount === 0? 'disabled' : ''}`} onClick={bathcount < 1  ? '' : () => setBathcount(bathcount-1)} >
                                -
                            </div>
                            <div className="bathcountvalue">
                                {bathcount}
                            </div>
                            <div className="bathcountplus" onClick={() => setBathcount(bathcount+1)}>
                                +
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="meals">
                <div className="mealsTitle">
                    Meals
                </div>
                <div className="mealslist">
                    {
                        meals.map((meal, index) => {
                            return (
                                <div className="meal" key={index}>
                                    
                                    <div className="mealcheckbox">
                                        <input type="checkbox" checked={meal.checked} onChange={() => setMealChecked(meal.id)} />
                                    </div>
                                    <div className="mealstype">
                                        {meal.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>       
            <div className="reviews">
                
            </div>
      
        </div>
    )
}