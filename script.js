function toggleButtons() {
    // Obter referências aos botões
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var timerText = document.getElementById('timerText');

    // Alternar a visibilidade dos botões
    if (playButton.classList.contains('hidden')) {
        playButton.classList.remove('hidden');
        stopButton.classList.add('hidden');
        timerText.classList.remove('hidden')
        timerText.textContent = "O timer parou às " + getCurrentTime() + " horas.";
    } else {
        playButton.classList.add('hidden');
        stopButton.classList.remove('hidden');
        timerText.classList.remove('hidden')
        timerText.textContent = "O timer começou às " + getCurrentTime() + " horas.";
    }
}
function toggleButtons2(){
    // Referencias dos botões
    var pauseButton = document.getElementById('pauseButton');
    var replayButton = document.getElementById('replayButton');

    if(pauseButton.classList.contains('hidden')){
        pauseButton.classList.remove('hidden');
        replayButton.classList.add('hidden');
        timerText.classList.remove('hidden')
        timerText.textContent = "O timer retomou às" + getCurrentTime() + "horas."
    }
    else {
        pauseButton.classList.add('hidden');
        replayButton.classList.remove('hidden');
        timerText.classList.remove('hidden')
        timerText.textContent = "O timer pausou às" + getCurrentTime() + "horas.";
    }
}

function formatTwoDigits(number) {
    return number < 10 ? '0' + number : number;
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours + ":" + formatTwoDigits(minutes);
}