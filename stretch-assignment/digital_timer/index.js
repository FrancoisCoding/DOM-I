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


//Button Creation
const startButton = document.createElement("button")
startButton.textContent = 'Start'
body[0].appendChild(startButton)

const resetButton = document.createElement("button")
resetButton.textContent = 'Reset'
body[0].appendChild(resetButton)
// Button Classes
const button = document.getElementsByTagName("button")
button[0].className = 'buttonClass'
button[1].className = 'buttonClass'
document.styleSheets[0].insertRule('button:hover { cursor: pointer; }', 0);

const buttonClass = document.getElementsByClassName('buttonClass')
// Button Styling
buttonClass[0].style.marginTop = '1.3rem'
buttonClass[0].style.fontSize = '2rem'
buttonClass[1].style.marginTop = '1.3rem'
buttonClass[1].style.fontSize = '1.3rem'

//const stopButton = document.createElement("button")
//stopButton.textContent = 'Stop'

// Move Buttons Underneath Timer
body[0].style.flexDirection = 'column'

// Timer Function
function Timer() {
    var time = 0;
    var interval;
    var offset;
    
    function update() {
        time += delta();
        var formattedTime = timeFormatter(time);
        console.log(formattedTime);
    }
    
    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }
    
    function timeFormatter(timeInMilliseconds){
        var time = new Date(timeInMilliseconds)
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        
        if(seconds.length < 2) {
            seconds = '0' + seconds
        }
        if(seconds == 10.00) {
            watch.stop()
        }
        if(milliseconds.length < 2) {
            milliseconds = '0' + milliseconds
        }
        return seconds + '.' + milliseconds;
    }
    
    this.isOn = false;
    
    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    
    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    
    this.reset = function() {
        time = 0;
    };
}