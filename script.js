
var timerInterval;
var startTime;
var pausedTime = 0;
var isTimerRunning = false;

function toggleTimer(action) {
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var pauseButton = document.getElementById('pauseButton');
    var timerText = document.getElementById('timerText');

    if (action ==='play') {
        if(!isTimerRunning){
            startTime = new Date().getTime();
            timerInterval = setInterval(updateTimer, 1000);
            isTimerRunning = true;
            playButton.classList.add('hidden');
            stopButton.classList.remove('hidden');
            pauseButton.classList.remove('hidden');
            timerText.classList.remove('hidden');
            timerText.textContent = "O timer começou às " + getCurrentTime(startTime) + " horas.";
            
            
    }}
    else if (action === 'stop') {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            pausedTime += new Date().getTime() - startTime;
            isTimerRunning = false;
            playButton.classList.remove('hidden');
            stopButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
            timerText.textContent = "O timer parou às " + getCurrentTime(new Date().getTime() - pausedTime) + " horas.";
            }
        }else if (action === 'pause') {
            clearInterval(timerInterval);
            isTimerRunning = false;
            pausedTime = 0;
            playButton.classList.remove('hidden');
            stopButton.classList.add('hidden');
            pauseButton.classList.add('hidden');
            timerText.textContent = "O timer está parado.";
        } 
}


function updateTimer() {
    var timerText = document.getElementById('timerText');
    timerText.textContent = "O timer está rodando há " + formatTime(new Date().getTime() - startTime - pausedTime) + ".";
}

function getCurrentTime(time) {
    var date = new Date(time);
    var hours = formatTwoDigits(date.getHours());
    var minutes = formatTwoDigits(date.getMinutes());
    return hours + ":" + minutes;
}

function formatTwoDigits(number) {
    return (number < 10 ? '0' : '') + number;
}