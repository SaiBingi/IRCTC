import React, {Component} from 'react'
import axios from '../../api' // Import the Axios instance for making API requests
import './index.css' // Import the CSS file for styling

class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: '',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleLogin = event => {
    event.preventDefault()
    const {username, password} = this.state
    const {setAccessToken, setAdminApiKey} = this.props

    // Send a POST request to the login API
    axios
      .post('/api/login', {
        username,
        password,
      })
      .then(response => {
        this.setState({message: response.data.status})
        // Save the access token and admin API key in the application state
        setAccessToken(response.data.access_token)
        setAdminApiKey(response.data.adminApiKey)
      })
      .catch(error => {
        this.setState({message: 'Login failed. Please try again.'})
      })
  }

  render() {
    const {username, password, message} = this.state

    return (
      <div className="user-login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    )
  }
}

export default UserLogin
