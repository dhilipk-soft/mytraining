import { useState } from "react"
import OffersController from "../Offers/OfferController"
import QuickPlanner from "../Planner/QuickPlanner"
import PropertyController from "../Property/PropertyController"
import TrendingDestinationController from "../TrendingDestination/TrendingDestinationController"
import ExploreController from "../Explore/ExploreController"
import WeekDeals from "../WeekDeals/WeekDeals"
import UniquePropertie from "../Properties/UniquePropertie"

export default  function MainBody() {


    return (
        <div className="main-body">
            <OffersController />
            <QuickPlanner />
            <PropertyController />
            <ExploreController />
            <WeekDeals />
            <UniquePropertie />
            {/* <TrendingDestinationController /> */}
        </div>
    )
}