import jsHue from 'jshue'
let hueJS = jsHue();

let bridge = hueJS.bridge('192.168.1.61')
let user = bridge.user("tpAQsSSOkxg6eBITvsf1Wzv52-d5gqDLd4By0c6g")
let groups = {};

user.getGroups().then(data => {
  Object.keys(data).forEach((key) => {
    groups[data[key].name] = key;
  }, {});
})

let colors = {
  red: 0,
  green: 25500,
  blue: 46920,
  orange: 2868,
  light_orange: 5079,
  purple: 49442
}

let colorState = (color, transition=4, bright=236, saturate=254) => {
  let s = {
    bri: bright,
    colormode: "xy",
    effect: "none",
    hue: color,
    on: true,
    sat: saturate,
    transitiontime: transition
  }
  return s
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

let setGroupColor = (group, color, args) => {
return user.setGroupState(groups[group], colorState(color, ...args))
}

let setColor = (light, color, args) => {
  return user.setLightState(light, colorState(color, ...args))
}

let getColor = (light) => {
  return user.getLight(light).then(data => { return(data.state.hue) } )
}
let getGroupColor = (group) => {
  return user.getGroup(groups[group]).then(data => { return(data.state.hue) } )
}

let fadeGroup = (group, color, timeout=5) => {
  let prevColor = getGroupColor(group)
  setGroupColor(group, color, [5]).then( ()=> {
    setTimeout(()=> {
      user.setGroupState(groups[group], colorState(color, [5]))
    }, timeout * 1000)
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
  fadeGroup
 }

export default hue;
