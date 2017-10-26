import jsHue from 'jsHue'
let hueJS = jsHue();

let bridge = hueJS.bridge('192.168.1.61')
let user = bridge.user("tpAQsSSOkxg6eBITvsf1Wzv52-d5gqDLd4By0c6g")
let groups = {};

user.getGroups().then(data => {
  Object.keys(data).forEach((key) => {
    groups[data[key].name] = key;
  }, {});
})

let lights= {
  go: 5
}

let hue = {
  groups: groups,
  setGroupState: (group, state) => {
    user.setGroupState(groups[group], state)
  },
  setGoState: (state) => {
    user.setLightState(lights.go, state)
  }
}

export default hue;
