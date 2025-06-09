
import MainSearchBox from "../components/SearchBox/MainSearchBox"
import FilterBox from "../components/Filter/FilterBox"
import PreferedList from "../components/ListShow/PreferedList"
export default function SearchPage({hotelData}) {
    return <div className="searchPage">
        <div className="searchContainer">
            <div className="searchContainertop">

            </div>
            <div className="searchContainerBottom">
                <div className="searchContainerBottomWrapper">
                    <MainSearchBox  />
                </div>
            </div>            
        </div>
        <div className="searchContainerDown">
            <div className="searchContainerWrapper">
                <div className="searchContainerFilter">
                    <FilterBox />
                </div>
                <div className="searchContainerList">
                    <PreferedList hotelData={hotelData}  />
                </div>
            </div>
        </div>
    </div>
}