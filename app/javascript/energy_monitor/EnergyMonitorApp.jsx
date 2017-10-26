
import React from 'react'
import hostUrl from '../hostUrl'
import EnergyBar from './EnergyBar'

class EnergyMonitorApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      energy: 0
    }
    this.updateEnergy = this.updateEnergy.bind(this)
  }
  componentDidMount(){
    setInterval(this.updateEnergy, 1000)
  }
  updateEnergy(){
    let energy = this.state.energy
    fetch(`${hostUrl}/api/energy_sources`)
    .then(response => {
      return response.text();
    })
    .then(text => {
      return JSON.parse(text);
    })
    .then(parsed => {
      this.setState({
        energy: parsed.energy_total
      })
    })

  }
  render() {
    let energy = this.state.energy
    return (
      <EnergyBar
        theme={'light'}
        value={energy}
        max={100}
        format={'$'}
        steps={2}
        size={'large'}
        height={450}
      />
    )
  }
}

export default EnergyMonitorApp;
