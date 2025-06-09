import { useState } from "react"
import OffersController from "../Offers/OfferController"
import QuickPlanner from "../Planner/QuickPlanner"
import PropertyController from "../Property/PropertyController"
import TrendingDestinationController from "../TrendingDestination/TrendingDestinationController"
import ExploreController from "../Explore/ExploreController"
import WeekDeals from "../WeekDeals/WeekDeals"
import UniquePropertie from "../Properties/UniquePropertie"
import SignContainer from "../SignContainer/SignContainer"

export default  function MainBody({hotelData}) {


    return (
        <div className="main-body">
            <OffersController />
            <QuickPlanner hotelData={hotelData} />
            <PropertyController />
            <ExploreController hotelData={hotelData} />
            <WeekDeals  hotelData={hotelData}/>
            <UniquePropertie hotelData={hotelData}/>
            <SignContainer />
            {/* <TrendingDestinationController /> */}
        </div>
    )
}