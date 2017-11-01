import jsHue from 'jshue'
import hueConfig from './hueConfig'
let hueJS = jsHue();
let bridge = hueJS.bridge(hueConfig.bridgeip)
let user = bridge.user(hueConfig.username)
let groups = {};

user.getGroups().then(data => {
  Object.keys(data).forEach((key) => {
    groups[data[key].name] = key;
  }, {});
})

let colors = {
  red: {color: 0},
  green: {color: 25500},
  blue: {color: 46920},
  orange: {color: 2868},
  yellow: {color: 9225},
  pink: {color: 57849},
  teal: {color: 38318},
  purple: {color: 49442},
  neutralWhite: {color: 9159, saturate: 63}
}

let colorState = (args, transition=4) => {
  let color = args.color || 0
  let bright = args.bright || 236
  let saturate = args.saturate || 254
  return {
    bri: bright,
    colormode: "xy",
    effect: "none",
    hue: color,
    on: true,
    sat: saturate,
    transitiontime: transition
  }
}

let setGroupState = (group, state) => {
  return user.setGroupState(groups[group], state)
}

let flickerGroup = (group, time=1) => {
  user.setGroupState(groups[group], {alert: "lselect"})
  setTimeout(()=> {
    user.setGroupState(groups[group], {alert: "none"})
  }, time * 1000)
}

//fade to a new color permanently
let setGroupColor = (group, color) => {
  return user.setGroupState(groups[group], colorState(color))
}

let setColor = (light, color) => {
  return user.setLightState(light, colorState(color))
}

let getColor = (light) => {
  return user.getLight(light).then(data => { return(data.state.hue) } )
}

let getGroupColor = (group) => {
  return user.getGroup(groups[group]).then(data => { return(data.action.hue) } )
}

let getState = (light) => {
  return user.getLight(light).then(data => { return(data) } )
}

let getGroupState = (group) => {
  return user.getGroup(group).then(data => { return(data) } )
}

//trigger hardcoded seance sequence
let seance = (callback) => {
  let colorFlag = true
  let colorSequence = ["pink", "yellow", "green", "red", "green", "teal", "orange", "red", "blue", "blue", "purple", 'neutralWhite']
  let index = 0;
  let seanceInterval = setInterval(() => {
    setGroupColor('Seance', colors[colorSequence[index]])
    index += 1
    if(index >= colorSequence.length) {
      callback()
      clearInterval(seanceInterval)
    }
  }, 5000)
}

let finalRitual = (group) => {
  [1,2,3,4,6,7,8,9].forEach ((light, n) => {
    setTimeout(()=> {
      user.setLightState(light, {effect: "colorloop", sat: 254})
    }, n * 1000)
  })
  setTimeout(()=>{
    user.setGroupState(groups['House'], { effect: "none"})
    setGroupColor(groups['House'], hue.colors.neutralWhite)
  }, 6000)
}
//Fade to a new color for the specified time, then face back to the original color
let fadeGroup = (group, color, timeout=5) => {
  getGroupColor(group).then((prevState)=> {
    setGroupColor(group, colorState(color)).then(()=> {
      setTimeout(()=> {
        setGroupColor(group, prevState)
        console.log('callback')
      }, timeout * 1000)
    })
  })
}

let hue = {
  user: user,
  groups: groups,
  colors: colors,
  setGroupState,
  flickerGroup,
  setGroupColor,
  setColor,
  getColor,
  getGroupColor,
  getState,
  getGroupState,
  fadeGroup,
  seance,
  finalRitual
 }

export default hue;
