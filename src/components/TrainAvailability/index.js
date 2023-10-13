import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class TrainAvailability extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: '',
      destination: '',
      trains: [],
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  fetchTrainAvailability = () => {
    const {source, destination} = this.state

    // Send a GET request to fetch train availability
    axios
      .get(
        `/api/trains/availability?source=${source}&destination=${destination}`,
      )
      .then(response => {
        this.setState({trains: response.data})
      })
      .catch(error => {
        this.setState({trains: []})
      })
  }

  render() {
    const {source, destination, trains} = this.state

    return (
      <div className="train-availability-container">
        <h2>Train Availability</h2>
        <form>
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
          <button type="button" onClick={this.fetchTrainAvailability}>
            Check Availability
          </button>
        </form>
        <div className="train-list">
          {trains.map(train => (
            <div key={train.train_id} className="train">
              <p>Train ID: {train.train_id}</p>
              <p>Train Name: {train.train_name}</p>
              <p>Available Seats: {train.available_seats}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default TrainAvailability
