import {Route, Routes} from 'react-router-dom'
import Body from './../Body/Body.jsx'
import SecBody from './../secBody/SecBody.jsx'
import Control from './../Control/control.jsx'

export default function Router() {
    return (
        <div>
            <Routes>
                    <Route path="/" element={<Control />} />
                    <Route path = "/fir" element = {<Body />}/>
                    <Route path = "/sec" element = {<SecBody />}/>
           </Routes>
        </div>
    )

}