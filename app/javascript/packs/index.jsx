import React from 'react'
import ReactDOM from 'react-dom'
import EnergyMonitorApp from '../energy_monitor/EnergyMonitorApp'
// import EnergyBanner from 'energyBanner'
// import EnergyBar from 'energyBar'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EnergyMonitorApp />,
    document.body.appendChild(document.createElement('div')),
  )
})
