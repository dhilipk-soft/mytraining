import { NavLink } from "react-router-dom"
export default function Top(){

    return (
        <div className="top">
            <div className="websitename">
                Booking.com
            </div>
            <div className="logcontainer">
                <div className="logCountry">INR</div>
                <div className="logFlags"><img src="https://t-cf.bstatic.com/design-assets/assets/v3.150.0/images-flags/In@3x.png" style={{width:"20px", height:"20px"}} alt="" /></div>
                <div className="logRegister">List your property</div>
                {<NavLink to="/login" className="logLogin">
                    <button className="registerButton">Register</button>
                </NavLink>}
                        
                {<button className="signInButton">Sign in</button>}
            </div>
        </div>
    )

}