import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class UserRegistration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      message: '',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleRegistration = event => {
    event.preventDefault()
    const {username, password, email} = this.state

    // Send a POST request to the registration API
    axios
      .post('/api/signup', {
        username,
        password,
        email,
      })
      .then(response => {
        this.setState({message: response.data.status})
      })
      .catch(error => {
        this.setState({message: 'Registration failed. Please try again.'})
      })
  }

  render() {
    const {username, password, email, message} = this.state

    return (
      <div className="user-registration-container">
        <h2>Register</h2>
        <form onSubmit={this.handleRegistration}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
        {message && <p className="registration-message">{message}</p>}
      </div>
    )
  }
}

export default UserRegistration
