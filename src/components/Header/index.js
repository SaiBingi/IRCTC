import React from 'react'
import {Link} from 'react-router-dom' // Import Link from React Router
import './index.css' // Import the CSS file for styling

const Header = () => (
  <header className="header-container">
    <h1 className="heading">Railway Management System</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" className="text-style">
            Home
          </Link>
        </li>
        <li>
          <Link to="/registration" className="text-style">
            User Registration
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-style">
            User Login
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-style">
            Admin Panel
          </Link>
        </li>
        <li>
          <Link to="/availability" className="text-style">
            Train Availability
          </Link>
        </li>
        <li>
          <Link to="/booking" className="text-style">
            Seat Booking
          </Link>
        </li>
        <li>
          <Link to="/booking-details" className="text-style">
            Booking Details
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
