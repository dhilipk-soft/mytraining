
export default function PropertyTypes({ propertyType }) {
    return (
        <div className="propertyTypes">
            <img src={propertyType.image} alt={propertyType.name} />
            <h3>{propertyType.name}</h3>
        </div>
    )
}