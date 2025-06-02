import './Body.css'
import { useState } from 'react';
import html2pdf from 'html2pdf.js';
export default function Body() {

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [error,setError] = useState(false)
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [inputlabel, setInputlabel] = useState("")
    const [inputlabelError, setInputlabelError ] = useState(false)
    const [onoff, setOnoff] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const [option, setOption] = useState(false)
    const [drop, setDrop] = useState("Option1")

    function handlSubmit(e){
        e.preventDefault();
        generatePDF()

        handleReset(e)

    }

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    function generatePDF() {
    const element = document.getElementById('formPrint'); // ID of the container

    const options = {
        margin:       0.5,
        filename:     `${username}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}


    function handleReset(e){
        e.preventDefault();
        setError(false);
        setUsername("");
        setPassword("");
        setInputlabel("");
        setCheckbox(false);
        setOnoff(false);
        setOption(false);
        setDrop("Option1");
    }

    return <div className='outbody'>
    <div className="body" id="body"> 
        <form action="/" method="post" className="form">
            <div className="user">
                <label htmlFor="username"> Username</label>
                <br />
                <input type="text" placeholder="Enter Username" name="username" value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
                onBlur={(e) => {
                    if(e.target.value.trim() === ""){
                        setUsernameError(true)
                        e.target.focus();
                    }
                    else{
                        setUsernameError(false)
                    }
                }}
                id="username" required/>
                {usernameError && <div style={{color: "red"}} > Username is required</div>}
                
            </div>
            <br />
            <div className="pass">
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder="Enter Password" name=" password" value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 onBlur={(e) => {
                    if(e.target.value.trim() === ""){
                        setPasswordError(true)
                        setError(false)
                        e.target.focus();
                    }
                    else if(!validatePassword(e.target.value)){
                        setPasswordError(false)
                        setError(true)
                        e.target.focus();
                    }
                    else{
                        setPasswordError(false)
                        setError(false)
                    }
                }}
                  id = "password" required/>
                
                <div className="passwordregex">
                    <ul>
                        <li>At least 8 characters</li>
                        <li>At least one number</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one special character</li>
                    </ul>
                </div>
                {passwordError && <div style={{color: "red"}}>Password is required </div>}
                {error &&
                    <div style={{color: "red"}}>Your password must follow the rules</div>
                 }
            </div>
            <br />
            <div className="inputlabel">
                <label htmlFor="inputlabel">Input Text Label</label>
                <br />
                <input type="text" placeholder="Input label" name="inputlabel" value={inputlabel}
                
                onChange={(e) => setInputlabel(e.target.value)}
                onBlur={(e) => {
                    if(e.target.value.trim() === ""){
                        setInputlabelError(true)
                        e.target.focus()
                    }
                    else{
                        setInputlabelError(false)
                    }
                }}
                id="inputlabel" required />
                {inputlabelError && <div style={{color: "red"}}>Error message informing me of a problem</div> }
                
            </div>
            <br />
            <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />    
                <label htmlFor="checkbox"> Remainder me</label>
            </div>
                <div className="onoff">
                <label className="switch">
                    <input
                    type="checkbox"
                    checked={onoff}
                    onChange={() => setOnoff(!onoff)}
                    />
                    <span className="slider round"></span>
                </label>
                <label style={{ marginLeft: '10px' }}>{onoff ? "On" : "Off"}</label>
            </div>
            <br />
            <div className="radio">
                <div className="rod">
                    <input type="radio" name="select" id="option1" checked={option === "option1"} onChange={()=>setOption("option1")} defaultChecked/>
                    <label htmlFor="option1"> Radio selection 1</label>
                </div>
                <br />
                <div className="rod">
                    <input type="radio" name="select" id="option2" checked={option === "option2"} onChange={()=>setOption("option2")} />
                    <label htmlFor="option2"> Radio selection 2</label>
                </div>
                <br />
                <div className="rod">
                    <input type="radio" name="select" id="option3" checked={option === "option3"}  onChange={()=>setOption("option3")} />
                    <label htmlFor="option3"> Radio selection 3</label>
                </div>
            </div>
            <br />
            <div className="sel"> 
                <select name="select" id="select" required value={drop} onChange={(e) => setDrop(e.target.value)}>
                    <option value={"Option1"}  >Downdrop 1</option>
                    <option value={"Option2"} >Downdrop 2</option>
                    <option value={"Option3"} >Downdrop 3</option>
                </select>
            </div>
            <br />
            <div className = " btn">
                <button type="reset" onClick={(e) => handleReset(e)}>Cancel</button>
                <button onClick={(e) => handlSubmit(e)}>Download PDF</button>
            </div>
        </form>
         </div>

         <div className='print' id="print" style={{display: "none"}}>
                <div  id="formPrint" style={{width: "100%", height: "100%"}}>
                    <h1>Form Data</h1>
                    <h1>Username: {username}</h1>
                    <p>Password: {password}</p>
                    <p>Input text: {inputlabel}</p>
                    <p>Remain me: {checkbox ? "checked" : "not checked"}</p>
                    <p>ON/Off: {onoff ? "On" : "Off"}</p>
                    <p>Selected: {option}</p>
                    <p>Dropdown: {drop}</p>
                </div>
         </div>
</div>
}
