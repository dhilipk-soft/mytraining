import { useState, useEffect } from 'react'
import Search from './component/Search/Search'
import ListBody from './component/ListBody/ListBody';

function App() {
  
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [search, setSearch] = useState('');

  useEffect( () => {

    const apiKey = import.meta.env.VITE_API_KEY 
    const url = import.meta.env.URL
    async function fetchApi () {
       try{
        const res = await fetch('data.json')
        const data = await res.json()
        const results = data.recipes || []
        setData(results)
        console.log(results)
        if(results.length){
          setCurrentItem(results[0])
        }
       }
      catch(err ) {
        console.log(err)
      }
    }

    fetchApi();

  },[search])

  return (
    <div className='app' style={{margin: "0" , padding: "0"}}>

      <Search setSearch={setSearch} />
      <ListBody data={data} currentItem={currentItem} setCurrentItem={setCurrentItem} />
  
    </div>
  )
}

export default App
