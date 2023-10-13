import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class SeatBooking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainId: '',
      noOfSeats: '',
      message: '',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleBooking = () => {
    const {trainId, noOfSeats} = this.state
    const {accessToken} = this.props // Access token received during login

    // Send a POST request to book seats
    axios
      .post(
        `/api/trains/${trainId}/book`,
        {
          user_id: '1234567890', // Replace with the actual user ID
          no_of_seats: noOfSeats,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(response => {
        this.setState({message: response.data.message})
      })
      .catch(error => {
        this.setState({message: 'Seat booking failed. Please try again.'})
      })
  }

  render() {
    const {trainId, noOfSeats, message} = this.state

    return (
      <div className="seat-booking-container">
        <h2>Seat Booking</h2>
        <form>
          <input
            type="text"
            name="trainId"
            placeholder="Train ID"
            value={trainId}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="noOfSeats"
            placeholder="Number of Seats"
            value={noOfSeats}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleBooking}>
            Book Seats
          </button>
        </form>
        {message && <p className="booking-message">{message}</p>}
      </div>
    )
  }
}

export default SeatBooking
