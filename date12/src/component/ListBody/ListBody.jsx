import CurrentItem from "../CurrentItem/CurrentItem";
import ListShow from "../ListShow/ListShow.jsx";
import './ListBody.css';

export default function ListBody({ data, currentItem, setCurrentItem }) {
  return (
    <div className="listbody">
      <div className="list">
        {data && data.map((item, index) => (
          <ListShow key={index} item={item} setCurrentItem={setCurrentItem} />
        ))}
      </div>
      <div className="details">
        <CurrentItem currentItem={currentItem} />
      </div>
    </div>
  );
}
