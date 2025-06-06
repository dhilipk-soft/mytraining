

export default function SignPage() {
    return (
        <div className="signPage">
            <div className="signPageContainer">
                <div className="signPageHead">
                    <h3>Sign in or create an account</h3>
                    <div className="signPagePara">
                        <p>you can sign in using booking.out account to access our</p>
                        <p>services</p>
                    </div>
                </div>
                <div className="signPageBody">
                    <div className="signPageEmail">
                        <label htmlFor="email">Email address</label>
                        <input type="email" placeholder="Enter your email address" />
                    </div>
                    <button className="signPageButton">Continue with email</button>
                </div>
            </div>    
        </div>
    )
}