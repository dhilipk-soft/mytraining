import {useState} from 'react'
import MainSearchBox from '../MainSearchBox/MainSearchBox';
import MainBody from './MainBody';
export default function Body() {


    return (
        <div className="body">
           <MainSearchBox />
           <div className="checkForFlight">
                <input type="checkbox" className='checkFlight' id='checkFlight' />
                <label htmlFor="checkFlight">I'm looking for flights</label>
           </div>
           <MainBody />
        </div>
    )
}