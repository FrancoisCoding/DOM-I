// Move Timer to Middle of Page
const body = document.getElementsByTagName("body")
body[0].style.height = '36.5208rem'
body[0].style.background = 'radial-gradient(circle, #fff, #ccc)'


// Set Dashes to 0 for Start
const secondsTens = document.getElementById("secondTens")
secondsTens.textContent = 0
const secondOnes = document.getElementById("secondOnes")
secondOnes.textContent = 0
const msHundreds = document.getElementById("msHundreds")
msHundreds.textContent = 0
const msTens = document.getElementById("msTens")
msTens.textContent = 0


//Buttons
const startButton = document.createElement("button")
startButton.textContent = 'Start'
body[0].appendChild(startButton)

const resetButton = document.createElement("button")
resetButton.textContent = 'Reset'
body[0].appendChild(resetButton)

const button = document.getElementsByTagName("button")
button[0].className = 'buttonClass'
button[1].className = 'buttonClass'
const buttonClass = document.getElementsByClassName('buttonClass')

buttonClass[0].style.marginTop = '1.3rem'
buttonClass[0].style.fontSize = '2rem'
buttonClass[1].style.marginTop = '1.3rem'
buttonClass[1].style.fontSize = '1.3rem'

//const stopButton = document.createElement("button")
//stopButton.textContent = 'Stop'

// Move Buttons Underneath Timer
body[0].style.flexDirection = 'column'
