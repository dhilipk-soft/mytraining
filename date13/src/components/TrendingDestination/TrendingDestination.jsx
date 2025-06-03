
export default function TrendingDestination({destination}){

    return(
    <div className="trendingDestination">
        <img src={destination.image} alt={destination.name} />
        <h3>{destination.name}</h3>
    </div>)
}