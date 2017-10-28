// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import hostUrl from '../hostUrl'
import ritualHelper from '../ritualHelper'
import MonitorCircle from './MonitorCircle'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      energy: 0,
      ritualsCompleted: [],
      seanceInProgress: false
    }
    this.updateEnergy = this.updateEnergy.bind(this)
    this.updateLights = this.updateLights.bind(this)
  }
  componentDidMount(){
    setInterval(this.updateEnergy, 1000)
    setInterval(this.updateLights, 1000)
  }

  updateLights() {
    let ritualsCompleted = this.state.ritualsCompleted
    fetch(`${hostUrl}/api/ritual_completions`).then(response => {
      return response.text()
    })
    .then(text => {
      return JSON.parse(text)
    })
    .then(data => {
      if (data.length > ritualsCompleted.length) {
        let ritual = data[0]
        if (ritual.source == 'Seance' && !this.state.seanceInProgress) {
          function endSeance() {this.setState({seanceInProgress: false})}
          endSeance = endSeance.bind(this)

          ritualHelper(ritual, endSeance)
          this.setState({seanceInProgress: true})

        } else {
          ritualHelper(ritual, ()=>{})
        }
        this.setState({ritualsCompleted: data})
      }
    })
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
      }
    })
  }

  render() {
    return <MonitorCircle energy={this.state.energy} />
  }
}

export default App;
