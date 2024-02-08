import './App.css';
import {useState, useReducer, useEffect} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking.js';

function App() {

  function updateTimes(prevState, nextState){
    return  {...prevState, ...nextState};
  }



/*   const initializeTimes = () => {
    const date = new Date.now()
    fetchData(date);
  } */

  const initializeTimes = {
    time: "00:00",
  }

  const [availableTime, setAvailableTime] = useReducer(updateTimes, initializeTimes);

/*   const[availableTime, setAvailableTime] = useState([
    {
        time: "00:00",
        index: 0,
    },
]); */

const times = [
  {
      time: "17:00",
      index: 0,
  },
  {
      time: "18:00",
      index: 1,
  },
  {
      time: "19:00",
      index: 2,
  },
  {
      time: "20:00",
      index: 3,
  },
  {
      time: "21:00",
      index: 4,
  },
  {
      time: "22:00",
      index: 5,
  },
];



  return (
    <Router>
        <Header/>
        <Routes>
          <Route  exact path="/" element={<Main/>} />
          <Route path="/BookingPage" element={<BookingPage availableTime={availableTime} setAvailableTime={setAvailableTime} times={times} />}/>
          <Route  exact path="/ConfirmPage" element={<ConfirmedBooking />}/>
          <Route exact path="/about" element={<Main/>} />
        </Routes>
        <Footer/>
    </Router>
  )
  }
export default App;
