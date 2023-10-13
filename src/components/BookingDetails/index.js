import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class BookingDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingId: '',
      bookingData: null,
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  fetchBookingDetails = () => {
    const {bookingId} = this.state
    const {accessToken} = this.props // Access token received during login

    // Send a GET request to fetch booking details
    axios
      .get(`/api/bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        this.setState({bookingData: response.data})
      })
      .catch(error => {
        this.setState({bookingData: null})
      })
  }

  render() {
    const {bookingId, bookingData} = this.state

    return (
      <div className="booking-details-container">
        <h2>Booking Details</h2>
        <form>
          <input
            type="text"
            name="bookingId"
            placeholder="Booking ID"
            value={bookingId}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.fetchBookingDetails}>
            Get Details
          </button>
        </form>
        {bookingData && (
          <div className="booking-info">
            <p>Booking ID: {bookingData.booking_id}</p>
            <p>Train ID: {bookingData.train_id}</p>
            <p>Train Name: {bookingData.train_name}</p>
            <p>User ID: {bookingData.user_id}</p>
            <p>Number of Seats: {bookingData.no_of_seats}</p>
            <p>Seat Numbers: {bookingData.seat_numbers.join(', ')}</p>
            <p>Arrival Time at Source: {bookingData.arrival_time_at_source}</p>
            <p>
              Arrival Time at Destination:{' '}
              {bookingData.arrival_time_at_destination}
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default BookingDetails
