import "./SecBody.css";
import { useState } from "react";
import html2pdf from "html2pdf.js"

export default function SecBody() {

    const [username,  setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [area, setArea] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [startDate, setStartDate] = useState("");
    const [address, setAddress] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [resume, setResume] = useState(null);

    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [areaError, setAreaError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [positionError, setPositionError] = useState(false);
    const [startDateError, setStartDateError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [coverLetterError, setCoverLetterError] = useState(false);
    const [resumeError, setResumeError] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        generatePDF();
        handleReset(e);
    }


    function generatePDF(){
        const element = document.getElementById("formPrint")

        const options ={
             margin:       0.5,
        filename:     `${username}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        }

        html2pdf().set(options).from(element).save();
    }

    function handleReset(e){
        e.preventDefault();
        setUsername("");
        setLastname("");
        setEmail("");
        setGender("");
        setArea("");
        setPhone("");
        setPosition("");
        setStartDate("");
        setAddress("");
        setCoverLetter("");
        setResume(null);
        
    }

    return <div className="secBody">
           <div className="body" id="body"> 
            <form action="/" method="post" className="form">
                <div className="head"> 
                    <h1>APPLICATION FORM</h1>
                    <p>Pleace complete the following details</p>
                </div>
                <div className="name">
                    <div className="namecontainer">
                    <div className="first">
                        <label htmlFor="firstname"> First Name</label>
                        <input type="text" placeholder="Your first naem" id="firstname" name="firstname"
                        required value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={(e) =>{
                            if(e.target.value.trim() === ""){
                                setUsernameError(true)
                                e.target.focus()
                            }else{
                                setUsernameError(false)
                            }
                        }}
                        />
                    </div>
                    <div className="last">
                        <label htmlFor="lastname"> Last Name</label>
                        <input type="text" placeholder="Your last name" id="lastname" name="lastname"
                        required value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                       
                        />
                    </div>  
                    </div>
                    {usernameError && <div style={{color: "red"}}>Username is required</div>}
                </div>
                <div className="email-gender">
                    <div className="emailcontainer">
                        <label htmlFor="email"> Email</label>
                        <input type="email" placeholder="Your email" className="email" id="email" name="email" 
                        required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => {
                            if(e.target.value === ""){
                                setEmailError(true)
                                e.target.focus()
                            }else{
                                setEmailError(false)
                            }
                        }}
                        />
                        {emailError && <div style={{color: "red"}}>Email is required</div>}
                    </div>
                    <div className="gendercontainer">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" value={gender} 
                        onChange={(e) => setGender(e.target.value)}>
                            <option value={"male"} >Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>
                </div>
                <div className="phonedetails">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="area">
                        <input type="text" placeholder="Area Code" id="area" name="area" 
                        required value={area}
                        onChange={(e) => setArea(e.target.value)}
                        />
                        <input type="text" placeholder="Phone Number" id="phone" name="phone"
                        required value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="positioncontainer">
                    <label htmlFor="position" >Applying for Position</label>
                    <input type="text"  id="position" name="position" 
                    required value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div className="strDate">
                    <label htmlFor="date">when can you start</label>
                    <input type="date" id="date" name="date"
                    required value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="addresscontainer">
                    <label htmlFor="address"> Address</label>
                    <textarea name="address" id="address" 
                    required value={address}
                    onChange = {(e) => setAddress(e.target.value)}
                    />
                    <textarea name="address" id="address"  />
                </div>
                <div className="coverletter">
                    <label htmlFor="letter"> Cover Letter</label>
                    <textarea name="letter" id="letter" 
                    required value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    />
                </div>
                <div className="imageupload">
                    <label htmlFor="image">Upload Resume</label>

                    <input type="file" id="image" name="image" 
                    onChange={(e) => setResume(e.target.files[0])}
                    />
                </div>
                <div className="btn">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Apply Now</button>
                </div>
            </form>
       </div>

       <div className="print" style={{display: "none"}}>
            <div id="formPrint" className="formPrint">
                <h1>Form Data</h1>
                <h1>Username: {username}</h1>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Area: {area}</p>
                <p>Phone: {phone}</p>
                <p>Position: {position}</p>
                <p>Start Date: {startDate}</p>
                <p>Address: {address}</p>
                <p>Cover Letter: {coverLetter}</p>
                <p>Resume: {resume ? resume.name : "No file uploaded"}</p>
            </div>
       </div>
    </div>
}