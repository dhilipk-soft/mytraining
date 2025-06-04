import Top from './Top.jsx'
import Categories from '../Categorys/Categories.jsx'

export default function NavBar() {

    return ( 
        <div className="navBar">
            <div className="navBarContainer">
                <Top />
                <Categories  />
            </div>
               
        </div> 
    )
}