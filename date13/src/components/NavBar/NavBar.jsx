import Top from './Top.jsx'
import Categories from '../Categorys/Categories.jsx'

export default function NavBar({setActiveDashboard}) {

    return ( 
        <div className="navBar">
            <div className="navBarContainer">
                <Top />
                <Categories setActiveDashboard={setActiveDashboard} />
            </div>
               
        </div> 
    )
}