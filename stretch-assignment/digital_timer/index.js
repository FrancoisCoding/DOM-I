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