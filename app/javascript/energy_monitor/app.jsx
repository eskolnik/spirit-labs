// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import hostUrl from '../hostUrl'
import hue from '../hue'

class App extends React.Component {
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
    // hue.user.setGroupState(3, {alert: "select"})
    // hue.setGroupColor('Seance', 'purple')
    hue.blinkGroup('Seance', 'orange', 'purple')
    // hue.flicker('Seance', 3)
    hue.getColor(5)
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

export default App;
