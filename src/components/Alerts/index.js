import React from 'react'
import './index.css' // Import the CSS file for styling

const Alerts = ({message, type}) => {
  const alertClass = type === 'error' ? 'error' : 'success'

  return (
    <div className={`alerts-container ${alertClass}`}>
      <p>{message}</p>
    </div>
  )
}

export default Alerts
