import Body from './../Body/Body.jsx'
import SecBody from './../secBody/SecBody.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Router from '../Routes/Router.jsx'
import './control.css'

export default function Control(){

    return < div className = "control">
        <div className='controlHeader'>
            <h1>Select Button</h1>
            <div className='selectButton'>
                <Link to="/fir"><div> first</div></Link>
                <Link to="/sec"><div>second</div></Link>
            </div>
        </div>
    </div>
}