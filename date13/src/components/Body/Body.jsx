import {useState} from 'react'
import MainSearchBox from '../SearchBox/MainSearchBox';
import MainBody from './MainBody';
import HeroContainer from '../Heros/HeroContainer';
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