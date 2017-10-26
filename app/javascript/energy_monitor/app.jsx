// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import hostUrl from '../hostUrl'
import hue from '../hue'

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

  flashLights() {
    hue.setGoState({alert: "select"})
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
      if (parsed.energy_total !== this.state.energy) {
        this.setState({
          energy: parsed.energy_total
        })
        this.flashLights();
      }
    })

  }
  render() {
    return <h1>ENERGY POWER: {this.state.energy}</h1>
  }
}

export default EnergyMonitorApp;
