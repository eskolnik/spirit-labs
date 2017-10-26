import React from 'react'

class EnergyBar extends React.Component {
  constructor(props) {
    super(props);
    //
    // this.state = {
    //   theme: () => this.props.theme === 'light' || this.props.theme === 'dark' ? this.props.theme : 'light',
    //   value: this.props.value || 0, //default 0
    //   max: this.props.max || 100, //default 100
    //   steps: this.props.steps || 4, //default 4
    //   format: this.props.format || '',
    //   size: () => this.props.size === 'small' || this.props.size === 'normal' || this.props.size === 'large' ? this.props.size : 'normal',
    //   height: this.props.height || 200, //default 200
    //   intervals: []
    // }
    //
    // for (let step = 0; step <= this.state.steps; step++) {
    //   let val = ((this.state.max / this.state.steps) * step).toFixed(2);
    //   let percent = (val / this.state.max) * 100;
    //   let interval = { percent: percent, label: this.state.format + val };
    //   this.state.intervals.push(interval);
    // }
  }
  percent() {
    return this.props.value / this.props.max * 100
  }

  valstr() {
    return this.props.format + this.props.value
  }

  render() {
    const theme = `thermometer--theme-${this.props.theme}`;
    const size = `thermometer--${this.props.size}`;
    const height = { height: `${this.props.height}px` };
    const heightPercent = { height: `${this.props.percent}%` };
    const heightBgColor = { height: `calc(${this.props.height}px - 57px)` };
    const valstr = this.valstr();

    let intervals = []
    for (let step = 0; step <= this.props.steps; step++) {
      let val = ((this.props.max / this.props.steps) * step).toFixed(2);
      let percent = (val / this.props.max) * 100;
      let interval = { percent: percent, label: this.props.format + val };
      intervals.push(interval);
    }

    const stepIntervals = intervals.map((step, i) => {
      return (
        <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
          {step.label}
        </li>
      );
    });

    return (
      <div>
        <div style={height} className={`thermometer ${size} ${theme}`}>
          <div className="thermometer__draw-a"></div>
          <div className="thermometer__draw-b"></div>
          <div className="thermometer__meter">
            <div style={heightPercent} className="thermometer__mercury">
              <div className="thermometer__mask">
                <div className="thermometer__bg-color" style={heightBgColor}></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="thermometer__label">energy: {this.props.value}</h2>
       </div>
    );
  }
}
export default EnergyBar;
