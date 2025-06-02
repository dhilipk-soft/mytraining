import React from 'react'
import List from './List';

export default function HandleList() {

    const [list, setList] = React.useState([]);
    const [newItem, setNewItem] = React.useState("");

    function addItem() {
        setList([...list, newItem]);
        setNewItem("");
        console.log("List updated:", list);1
    }

  return <div className='w-full flex flex-col justify-center items-center font-semibold m-5  text-2xl'>
    <div className='flex justify-center items-center'>
    <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} className='w-50% border-1 rounded' />
    <button className='border-1 rounded m-2' onClick={addItem}>Add</button>
    </div>

    <div className='w-150 flex flex-col '>
        {
            list.map((item, index) => (
                <div className='flex justify-between items-center bg-blue-100 p-5 m-2 rounded' >
                    <List key={index} item={item} />
                    <button onClick={() => setList(list.filter((_, i) => i !== index))} className='border-1 rounded'> Delete</button>
                </div>
            ))
        }
        
    </div>

    <div>
        <div>count list: {list.length}</div>
        <div>list completed: </div>
    </div>
  </div>;
}