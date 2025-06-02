import CurrentItem from "../CurrentItem/CurrentItem";
import ListShow from "../ListShow/ListShow.jsx";

export default function ListBody({data, currentItem, setCurrentItem}) { 

    return (
        <div className="listbody">
            {
                data && data.map((item, index) => {
                    return <ListShow key={index} item={item}  />
                })
            }
            < CurrentItem currentItem={currentItem}/>
        </div>
    )
}