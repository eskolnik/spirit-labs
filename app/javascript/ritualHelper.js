import hue from './hue'

const ritualHelper = (ritual, callback) => {

  switch(ritual.source) {
    // case 'final_ritual':
    //   hue.finalRitual('down')
    case 'Seance':
      hue.seance(callback);
    default:
      hue.setGroupColor('down', hue.colors.orange).then((data)=> {
        setTimeout(() => {hue.setGroupColor('down', hue.colors.neutralWhite)}, 10000)
      })
  }
}

export default ritualHelper;
