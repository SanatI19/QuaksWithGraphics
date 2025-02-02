const startButton = document.getElementById("startGame");
startButton.disabled = true;
let numPlayers = document.getElementById("numPlayers");
let selectedVal = null;
let numBots = document.getElementById("numBots");
let selectedBotVal = null;
// if (numPlayers.value !== null) {
//     console.log(numPlayers.value);
//     startButton.disabled = false;
// }

numPlayers.addEventListener("change", 
function() {
    selectedVal = this.value;
    if (selectedVal === null || selectedBotVal === null) {
        startButton.disabled = true;
    }
    else {
        startButton.disabled = false;
    }
    // console.log(selectedVal);
})

numBots.addEventListener("change", 
    function() {
        selectedBotVal = this.value;
        if (selectedVal === null || selectedBotVal === null || selectedBotVal+selectedVal<2) {
            startButton.disabled = true;
        }
        else {
            startButton.disabled = false;
        }
        // console.log(selectedVal);
    })



startButton.addEventListener('click', 
function() {
    localStorage.setItem('numPlayers', selectedVal);
    localStorage.setItem('numBots',selectedBotVal);
    window.location.href = "name_players.html";
})


