const playLocalButton = document.getElementById("playLocalButton");
const playOnlineButton = document.getElementById("playOnlineButton");
playOnlineButton.disabled = true;

function initializeGame() {

}

playLocalButton.addEventListener('click', function() {
    // initializeGame();
    window.location.href = "initialize_game.html";
});

let red1chip = 
document.getElementById('red1chip');

let chip = 
document.getElementById("chip");

let value = 
document.getElementById("value");

let reviveUsed = false;

const messageElement = document.getElementById('message');