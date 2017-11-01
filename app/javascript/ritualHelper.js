import hue from './hue'

const ritualHelper = (ritual, callback) => {

  switch(ritual.source) {
    // case 'final_ritual':
    //   hue.finalRitual('down')
    case 'seance':
      hue.seance(callback);
    default:
      hue.setGroupColor('House', hue.colors.orange).then((data)=> {
        setTimeout(() => {hue.setGroupColor('House', hue.colors.neutralWhite)}, 10000)
      })
  }
}

export default ritualHelper;
