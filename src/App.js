import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
import AdminPanel from './components/AdminPanel'
import TrainAvailability from './components/TrainAvailability'
import SeatBooking from './components/SeatBooking'
import BookingDetails from './components/BookingDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import Alerts from './components/Alerts'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={TrainAvailability} />
            <Route path="/registration" component={UserRegistration} />
            <Route path="/login" component={UserLogin} />
            <Route path="/admin" component={AdminPanel} />
            <Route path="/availability" component={TrainAvailability} />
            <Route path="/booking" component={SeatBooking} />
            <Route path="/booking-details" component={BookingDetails} />
          </Switch>
          <Alerts message="Success: Registration completed" type="success" />
          <Alerts message="Error: Invalid credentials" type="error" />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
