import { useState } from "react"
import OffersController from "../Offers/OfferController"
import QuickPlanner from "../Planner/QuickPlanner"
export default  function MainBody() {


    return (
        <div className="main-body">
            <OffersController />
            <QuickPlanner />
        </div>
    )
}