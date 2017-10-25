import React from 'react'
import ReactDOM from 'react-dom'
import App from '../energy_monitor/app'
// import EnergyBanner from 'energyBanner'
// import EnergyBar from 'energyBar'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
