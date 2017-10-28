import React from 'react'

const MonitorCircle = (props) => {
  let gradientMax = props.energy > 100 ? 0 : 100-props.energy
  let style = {
    background: 'linear-gradient(#a0c884 '+(gradientMax)+'%,#426e1f '+props.energy+'%)'
  }
  return (
    <div className="energy-monitor-background">
      <div className="energy-monitor-header">
        QUINTESSENCE<br/>METER
      </div>
      <div
        style={style}
        className="energy-monitor-circle circle filled example" data-fill="64">
        <p className="circle-text">{props.energy}</p>
      </div>
     </div>

  )
}

export default MonitorCircle
