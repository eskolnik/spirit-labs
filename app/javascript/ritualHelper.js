import hue from './hue'

const ritualHelper = (ritual, callback) => {
  switch(ritual.source) {
    case "nope":
      hue.setGroupColor('Seance', hue.colors.orange)
    case 'Spider Dance':
      hue.setGroupColor('Seance', hue.colors.purple)
    case 'Seance':
      hue.seance(callback);
    default:
      // hue.setGroupColor('down', hue.colors.neutralWhite
    
  }
}

export default ritualHelper;
