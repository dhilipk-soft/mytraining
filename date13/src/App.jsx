import './App.css'
import { useContext, createContext, useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import HeroContainer from './components/Heros/HeroContainer.jsx'
import BodyController from './Controller/BodyController.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer\'/Footer.jsx'
import FlightBody from './components/Body/FlightBody.jsx'
import FlightHeroContainer from './components/FlightHeroContainer/FlightHeroConainer.jsx'
import SignPage from './Pages/SignPage.jsx'
import Top from './components/NavBar/Top.jsx'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './Pages/SearchPage.jsx'
import { SearchProvider } from './Context/SearchContext.jsx'

function App() {

    const [hotelData, setHotelData] = useState([
  {
    id: 1,
    name: "Tent 1",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Castle",
    trip: { location: "Vadodara, India", distance: 850, price: "$4410" },
    rooms: [
      {
        id: 1,
        name: "Room 1 - Vadodara",
        price: 522,
        rating: 4.2,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Vadodara",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 177,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 2,
    name: "Apartment 2",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Farm House",
    trip: { location: "Puttaparthi, India", distance: 320, price: "$4626" },
    rooms: [
      {
        id: 2,
        name: "Room 2 - Puttaparthi",
        price: 679,
        rating: 4.6,
        discount: 15,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Puttaparthi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 347,
        availability: "Available",
      },
    ],
  },
  {
    id: 3,
    name: "Studio 3",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Loft",
    trip: { location: "Mysore, India", distance: 132, price: "$3369" },
    rooms: [
      {
        id: 3,
        name: "Room 3 - Mysore",
        price: 492,
        rating: 4.1,
        discount: 15,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Vadodara",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 22,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 4,
    name: "Cottage 4",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Cottage",
    trip: { location: "Hassan, India", distance: 290, price: "$3120" },
    rooms: [
      {
        id: 4,
        name: "Room 4 - Hassan",
        price: 450,
        rating: 4.0,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Hassan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 44,
        availability: "Available",
      },
    ],
  },
  {
    id: 5,
    name: "Villa 5",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Villa",
    trip: { location: "Cochin, India", distance: 610, price: "$3980" },
    rooms: [
      {
        id: 5,
        name: "Room 5 - Cochin",
        price: 710,
        rating: 4.8,
        discount: 12,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Cochin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 95,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 6,
    name: "Resort 6",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Resort",
    trip: { location: "Mangalore, India", distance: 480, price: "$2870" },
    rooms: [
      {
        id: 6,
        name: "Room 6 - Mangalore",
        price: 380,
        rating: 4.3,
        discount: 18,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Mangalore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 123,
        availability: "Available",
      },
    ],
  },
  {
    id: 7,
    name: "Farmstay 7",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Farm House",
    trip: { location: "Hyderabad, India", distance: 550, price: "$3540" },
    rooms: [
      {
        id: 7,
        name: "Room 7 - Hyderabad",
        price: 600,
        rating: 4.7,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Hyderabad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 240,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 8,
    name: "Hotel 8",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Hotel",
    trip: { location: "Bangalore, India", distance: 120, price: "$1980" },
    rooms: [
      {
        id: 8,
        name: "Room 8 - Bangalore",
        price: 520,
        rating: 4.5,
        discount: 20,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Bangalore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 160,
        availability: "Available",
      },
    ],
  },
  {
    id: 9,
    name: "Mansion 9",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Mansion",
    trip: { location: "Ooty, India", distance: 300, price: "$2870" },
    rooms: [
      {
        id: 9,
        name: "Room 9 - Ooty",
        price: 590,
        rating: 4.2,
        discount: 25,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Ooty",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 95,
        availability: "Available",
      },
    ],
  },
  {
    id: 10,
    name: "House 10",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Country House",
    trip: { location: "Goa, India", distance: 720, price: "$3999" },
    rooms: [
      {
        id: 10,
        name: "Room 10 - Goa",
        price: 700,
        rating: 4.9,
        discount: 8,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Goa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 201,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 11,
    name: "Bungalow 11",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Bungalow",
    trip: { location: "Shimla, India", distance: 1450, price: "$4880" },
    rooms: [
      {
        id: 11,
        name: "Room 11 - Shimla",
        price: 820,
        rating: 4.6,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Shimla",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 185,
        availability: "Available",
      },
    ],
  },
  {
    id: 12,
    name: "Lodge 12",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Lodge",
    trip: { location: "Darjeeling, India", distance: 1250, price: "$4720" },
    rooms: [
      {
        id: 12,
        name: "Room 12 - Darjeeling",
        price: 560,
        rating: 4.0,
        discount: 15,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Darjeeling",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 143,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 13,
    name: "Inn 13",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Inn",
    trip: { location: "Rishikesh, India", distance: 1180, price: "$3900" },
    rooms: [
      {
        id: 13,
        name: "Room 13 - Rishikesh",
        price: 490,
        rating: 4.4,
        discount: 20,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Rishikesh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 164,
        availability: "Available",
      },
    ],
  },
  {
    id: 14,
    name: "Treehouse 14",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Treehouse",
    trip: { location: "Wayanad, India", distance: 940, price: "$3225" },
    rooms: [
      {
        id: 14,
        name: "Room 14 - Wayanad",
        price: 615,
        rating: 4.8,
        discount: 12,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Wayanad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 198,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 15,
    name: "Camp 15",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Camp",
    trip: { location: "Manali, India", distance: 1300, price: "$3499" },
    rooms: [
      {
        id: 15,
        name: "Room 15 - Manali",
        price: 430,
        rating: 4.1,
        discount: 18,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Manali",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 99,
        availability: "Available",
      },
    ],
  },
  {
    id: 16,
    name: "Chalet 16",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Chalet",
    trip: { location: "Kodaikanal, India", distance: 750, price: "$3590" },
    rooms: [
      {
        id: 16,
        name: "Room 16 - Kodaikanal",
        price: 580,
        rating: 4.3,
        discount: 14,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Kodaikanal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 73,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 17,
    name: "Studio 17",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Studio",
    trip: { location: "Pune, India", distance: 650, price: "$3440" },
    rooms: [
      {
        id: 17,
        name: "Room 17 - Pune",
        price: 490,
        rating: 4.0,
        discount: 15,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Pune",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 101,
        availability: "Available",
      },
    ],
  },
  {
    id: 18,
    name: "Villa 18",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Villa",
    trip: { location: "Nagpur, India", distance: 1120, price: "$4025" },
    rooms: [
      {
        id: 18,
        name: "Room 18 - Nagpur",
        price: 720,
        rating: 4.7,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Nagpur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 213,
        availability: "Sold Out",
      },
    ],
  },
  {
    id: 19,
    name: "Penthouse 19",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Penthouse",
    trip: { location: "Delhi, India", distance: 1600, price: "$5299" },
    rooms: [
      {
        id: 19,
        name: "Room 19 - Delhi",
        price: 880,
        rating: 4.9,
        discount: 5,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Delhi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 305,
        availability: "Available",
      },
    ],
  },
  {
    id: 20,
    name: "Palace 20",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    property: "Palace",
    trip: { location: "Jaipur, India", distance: 1400, price: "$4890" },
    rooms: [
      {
        id: 20,
        name: "Room 20 - Jaipur",
        price: 760,
        rating: 4.8,
        discount: 10,
        image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
        location: "Jaipur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reviews: 275,
        availability: "Sold Out",
      },
    ],
  }
]);

// id: 1,
//     name: "Tent 1",
//     image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
//     property: "Castle",
//     trip: { location: "Vadodara, India", distance: 850, price: "$4410" },
//     rooms: [
//       {
//         id: 1,
//         name: "Room 1 - Vadodara",
//         price: 522,
//         rating: 4.2,
//         discount: 10,
//         image: "https://img.freepik.com/free-photo/room-with-balcony-and-view-of-city_1258-1352.jpg?size=626&ext=jpg",
//         location: "Vadodara",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         reviews: 177,
//         availability: "Sold Out",
//       },
//     ]



  const [mainSearch, setMainSearch] = useState("")

  return (
    <div className="App">
      <div className="appWrapper">
        <div className="appheader">
          <Top />
        </div>  
        <div className="appcontainer">       
        </div>      
        <div className="bodyB">
          <SearchProvider>
          <Routes>
            <Route path='/' element={
              <div className='bodycontainer'>
                <div className="heroheader">
                  <NavBar  />
                  <HeroContainer />
                </div>
                <div className="herobottom"> 
                  <Body  hotelData={hotelData} />
                </div>
              </div>} />
              <Route path='/flights' element={
                <div className='bodycontainer'>
                  <div className="heroheader">
                    <NavBar  />
                    <FlightHeroContainer />
                  </div>
                  <div className="herobottom">
                    <FlightBody  />
                  </div>
                </div>
                } />
              <Route path='/login' element={<SignPage />} />
              <Route path='/search' element={<SearchPage hotelData={hotelData}  />} >
            </Route>
          </Routes>
          </SearchProvider>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
