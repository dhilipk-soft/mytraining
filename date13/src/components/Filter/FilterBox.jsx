import { useEffect, useState } from 'react'
import FBox from './FBox';

export default function FilterBox() {

    const [facilities, setFacilities] = useState([{
        id: 1,
        name: "Parking",
        checked: false,
        category: "Facilities"
    },
    {
        id: 2,
        name: "Restaurant",
        checked: false,
        category: "Facilities"
    },
    {
        id: 3,
        name: "Room  Service",
        checked: false,
        category: "Facilities"
    },
    {
        id: 4,
        name: "24 Hour Front Desk",
        checked: false,
        category: "Facilities"
    },
    {
        id: 5,
        name: "Swimming Pool",
        checked: false,
        category: "Facilities"
    },
    {
        id: 6,
        name: "Bar",
        checked: false,
        category: "Facilities"
    },
    {
        id: 7,
        name: "Gym",
        checked: false,
        category: "Facilities"
    },
    
]);
    const [meals, setMeals] = useState([{
        id: 1,
        name: "Selt catering",
        checked: false,
        category: "Meals"
    },
    {
        id: 2,
        name: "Breakfast included",
        checked: false,
        category: "Meals"
    },
    {
        id: 3,
        name: "Dinner",
        checked: false,
        category: "Meals"
    },
    {
        id: 4,
        name: "All Meals included",
        checked: false,
        category: "Meals"
    },
    {
        id: 5,
        name: "Room Only",
        checked: false,
        category: "Meals"
    },

    ]);    
    const [checkedList, setCheckedList] = useState([])

    const [facilitiesshow, setFacilitiesshow] = useState(false)
    const [bedcount, setBedcount] = useState(1)
    const [bathcount, setBathcount] = useState(1)

    const facilitiesList = facilitiesshow ? facilities : facilities.slice(0, 5)


    useEffect(() => {
        
        const newfacilitiesCheckedList = facilities.filter((f) => f.checked)
        const newmealsCheckedList = meals.filter((m) => m.checked)

        setCheckedList([...newfacilitiesCheckedList, ...newmealsCheckedList])
       
    },[facilities,meals])


    return (
        <div className="filterBox">

            <div className="checkedList">
                <div className="checkedListhead">
                    Filter By
                </div>
            </div>
            {
                checkedList.length > 0 && <FBox fName={"Filter By"} selected={checkedList} setSelected={setCheckedList}/>
            }
            <hr />
            <div className="filterFacilities">
                <div className="filterTitle">Filter
                </div>
                <div className="filterFacilitiesCheck">
                    {
                        facilitiesList.map((facility) => {
                            return <div className="filterFacility" key={facility.id} >
                                <input type="checkbox" id={facility.name} name={facility.name}
                                    checked={facility.checked} value={facility.name}
                                    onChange={() => {
                                        const newFacilities = facilities.map((f) => {
                                            if (f.id === facility.id) {
                                                return { ...f, checked: !f.checked }
                                            }
                                            return f
                                        })
                                        setFacilities(newFacilities)
                                        
                                    }} />
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
                            <div className={`bedcountminus ${bedcount === 0? 'disabled' : ''}`} onClick={bedcount < 1 ? ()=>{} : ()=>setBedcount(bedcount-1)}>
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
                            <div className={`bathcountminus ${bathcount === 0? 'disabled' : ''}`} onClick={bathcount < 1  ? ()=>{} : () => setBathcount(bathcount-1)} >
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
                <FBox fName={"Meals"} selected={meals} setSelected={setMeals} />
            </div>       
            <div className="reviews">

            </div>
      
        </div>
    )
}