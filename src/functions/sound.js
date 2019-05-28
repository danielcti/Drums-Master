let sounds = []

const soundF = (som) => {
    for(let i=1;i<=9;i++){
      sounds[i] = document.getElementById(`sound${i}`)
      sounds[i].onended = () => {
        // console.log(`${sounds[i].id} ended`)
      }
    }
    switch(som){
      case 'q':
      sounds[1].pause()
      sounds[1].play()
      break;
      case 'w':
      sounds[2].pause()
      sounds[2].play()
      break;
      case 'e':
      sounds[3].pause()
      sounds[3].play()
      break;
      case 'a':
      sounds[4].pause()
      sounds[4].play()
      break;
      case 's':
      sounds[5].pause()
      sounds[5].play()
      break;
      case 'd':
      sounds[6].pause()
      sounds[6].play()
      break;
      case 'z':
      sounds[7].pause()
      sounds[7].play()
      break;
      case 'x':
      sounds[8].pause()
      sounds[8].play()
      break;
      case 'c':
      sounds[9].pause()
      sounds[9].play()
      break;
      default:
      console.log('Invalid Key')
    }
  }


export default soundF;