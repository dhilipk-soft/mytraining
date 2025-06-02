import "./Search.css"


export default function Search( {setSearch} ) {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}