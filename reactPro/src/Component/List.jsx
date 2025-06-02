import React from 'react'
export default function List({item}){
    const [lineThrough, setLineThrough] = React.useState(false)

    return <div className="list-group-item" onClick={() => setLineThrough(!lineThrough)} style={{textDecoration:lineThrough? 'line-through ' : ' none', cursor: ' pointer'}}>
             {item}
         </ div>
}