import './ListShow.css'

function ListShow({item}) {
    return (
        <div className='listshow'>
            <div key={item.id}>
            <img style={{width: '100px', height: '100px'}} src={item.image} alt={item.title} />
            <h3>{item.name}</h3>
          </div>
        </div>
    )
}
export default ListShow