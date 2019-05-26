const soundF = (som) => {
    var sound1 = document.getElementById('sound1')
    var sound2 = document.getElementById('sound2')
    var sound3 = document.getElementById('sound3')
    var sound4 = document.getElementById('sound4')
    var sound5 = document.getElementById('sound5')
    var sound6 = document.getElementById('sound6')
    var sound7 = document.getElementById('sound7')
    var sound8 = document.getElementById('sound8')
    var sound9 = document.getElementById('sound9')
    switch(som){
      case 'q':
      sound1.pause()
      sound1.play()
      break;
      case 'w':
      sound2.pause()
      sound2.play()
      break;
      case 'e':
      sound3.pause()
      sound3.play()
      break;
      case 'a':
      sound4.pause()
      sound4.play()
      break;
      case 's':
      sound5.pause()
      sound5.play()
      break;
      case 'd':
      sound6.pause()
      sound6.play()
      break;
      case 'z':
      sound7.pause()
      sound7.play()
      break;
      case 'x':
      sound8.pause()
      sound8.play()
      break;
      case 'c':
      sound9.pause()
      sound9.play()
      break;
      default:
      console.log('Invalid Key')
    }
  }

export default soundF;