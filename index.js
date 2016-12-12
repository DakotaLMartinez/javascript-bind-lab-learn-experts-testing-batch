const app = "I don't do much.";

const digitalClock = {
  time: Math.floor(Date.now()/1000), 
  startTicking: function() {
    const addSecond = () => {
      this.time += 1
    }
    // addSecond()
    setInterval(addSecond,1000)
  }
}

const censor = (word, text) => {
  let regEx = new RegExp(`${word}`, 'gi')
  return text.replace(regEx, 'BLEEP')
}

const violenceCensor = (text) => {
  return censor.bind(violenceCensor, 'violence', text)(text)
}

const drugsCensor = (text) => {
  return censor.bind(drugsCensor, 'drugs', text)(text)
}

// const result = drugsCensor('This show contains mature language, drugs and some more drugs.');
// console.log(result);
// console.log(violenceCensor('violence'));