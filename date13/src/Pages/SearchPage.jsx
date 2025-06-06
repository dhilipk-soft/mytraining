
import MainSearchBox from "../components/SearchBox/MainSearchBox"
import FilterBox from "../components/Filter/FilterBox"
export default function SearchPage() {
    return <div className="searchPage">
        <div className="searchContainer">
            <div className="searchContainertop">

            </div>
            <div className="searchContainerBottom">
                <div className="searchContainerBottomWrapper">
                    <MainSearchBox />
                </div>
            </div>            
        </div>
        <div className="searchContainerDown">
            <div className="searchContainerWrapper">
                <div className="searchContainerFilter">
                    <FilterBox />
                </div>
                
            </div>
        </div>
    </div>
}