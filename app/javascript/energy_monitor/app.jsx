// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'

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
  updateEnergy(){
    let energy = this.state.energy + 1
    this.setState({
      energy: energy
    })
  }
  render() {
    return <h1>ENERGY POWER: {this.state.energy}</h1>
  }
}

export default App;
