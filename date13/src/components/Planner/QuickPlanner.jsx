import { useState } from "react"
import QuickPlannerCategory from "./QuickPlannerCategory"
import TripList from "../TripList/TripList"
export default function QuickPlanner({hotelData}) {

    return (
        <div className="quickPlanner">
            <div className="quickplanner-top">
                <h1>Quick and easy trip planner</h1>
                <p>Pick a vibe and explore top destination in india</p>
            </div>
            <QuickPlannerCategory />
            <TripList hotelData={hotelData} />
        </div>
    )
}