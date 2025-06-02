import './ListShow.css'

function ListShow({item, setCurrentItem}) {
    return (
        <div className='listshow' onClick={() => setCurrentItem(item)}>
            <div key={item.id}>
            <img  src={item.image} alt={item.title} />
            <h3>{item.name}</h3>
          </div>
        </div>
    )
}
export default ListShow