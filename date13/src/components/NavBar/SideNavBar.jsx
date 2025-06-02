export default function SideNavBar() {
    return (
        <div className="side-nav-bar">
            <div className="side-nav-bar-item">
                <h3>Home</h3>
            </div>
            <div className="side-nav-bar-item">
                <h3>Profile</h3>
            </div>
            <div className="side-nav-bar-item">
                <h3>People</h3>
            </div>
            <hr style={{color: "#000000"}}/>
            <div className="side-nav-bar-item">
                <h3>Setting</h3>
            </div>
            <div className="side-nav-bar-item">
                <h3>Send Feedback</h3>
            </div>
        </div>
    )
}