import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class AdminPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainName: '',
      source: '',
      destination: '',
      seatCapacity: '',
      arrivalTimeAtSource: '',
      arrivalTimeAtDestination: '',
      message: '',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleAddTrain = event => {
    event.preventDefault()
    const {
      trainName,
      source,
      destination,
      seatCapacity,
      arrivalTimeAtSource,
      arrivalTimeAtDestination,
    } = this.state

    // Send a POST request to add a new train
    axios
      .post('/api/trains/create', {
        trainName,
        source,
        destination,
        seatCapacity,
        arrivalTimeAtSource,
        arrivalTimeAtDestination,
      })
      .then(response => {
        this.setState({message: response.data.message})
      })
      .catch(error => {
        this.setState({message: 'Train creation failed. Please try again.'})
      })
  }

  render() {
    const {
      trainName,
      source,
      destination,
      seatCapacity,
      arrivalTimeAtSource,
      arrivalTimeAtDestination,
      message,
    } = this.state

    return (
      <div className="admin-panel-container">
        <h2>Add New Train</h2>
        <form onSubmit={this.handleAddTrain}>
          <input
            type="text"
            name="trainName"
            placeholder="Train Name"
            value={trainName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={source}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={destination}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="seatCapacity"
            placeholder="Seat Capacity"
            value={seatCapacity}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="arrivalTimeAtSource"
            placeholder="Arrival Time at Source"
            value={arrivalTimeAtSource}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="arrivalTimeAtDestination"
            placeholder="Arrival Time at Destination"
            value={arrivalTimeAtDestination}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Train</button>
        </form>
        {message && <p className="admin-message">{message}</p>}
      </div>
    )
  }
}

export default AdminPanel
