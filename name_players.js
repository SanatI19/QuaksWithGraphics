//const numPlayers = 3;
//const body = document.getElementById("body");
const numPlayers = localStorage.getItem('numPlayers');
const done = document.getElementById("done");
done.disabled = true;
const numBots = localStorage.getItem("numBots");

function Player(name) {
    this.name = name;
    this.type;
    this.bag = []; // need to add to this
    this.vp = 0;
    this.coins = 0;
    this.rats = 0;
    this.piece = 0;
    
}

// function initializePlayer(name) {
//     player = new Player(name);
//     player.bag = 
// }
let input = [];
let val;
for (let i =0; i < numPlayers; i++) {
    val = document.createElement("input");
    val.setAttribute("type","text");
    val.setAttribute("placeholder","Player " + (i+1) + "'s name");
    document.body.appendChild(val);
    input[i] = val;
    // player = new Player(name)
}
let playerName = []
let playerType = []
for (let i = 0; i < numPlayers; i++) {
    input[i].addEventListener('input',
        function(event) {
            let name = event.target.value;
            playerName[i] = name;
            playerType[i] = "player";
            if (!playerName.includes("") && playerName.length == numPlayers) {
                done.disabled = false;
            }
        }
    )
}


// console.log(playerName);
// console.log(playerType);

function randomSets() {
    // let redComplete = [0,1,2,3];
    // let blueComplete = [0,1,2,3];
    // let yellowComplete = [0,1,2,3];
    // let greenComplete = [0,1,2,3];
    // let purpleComplete = [0,1,2,3];

    let redComplete = [0,2,3];
    let blueComplete = [2,3];
    let yellowComplete = [1,2,3];
    let greenComplete = [0,1,2,3];
    let purpleComplete = [0,1,2,3];

    let redI = Math.floor(Math.random()*redComplete.length);
    let red = redComplete[redI];
    let blueI = Math.floor(Math.random()*blueComplete.length);
    let blue = blueComplete[blueI];
    let yellowI = Math.floor(Math.random()*yellowComplete.length);
    let yellow = yellowComplete[yellowI];
    let greenI = Math.floor(Math.random()*greenComplete.length);
    let green = greenComplete[greenI];
    let purpleI = Math.floor(Math.random()*purpleComplete.length);
    let purple = purpleComplete[purpleI];

    let sets = [red,blue,yellow,green,purple];
    return sets;
}

let sets = randomSets();
//let sets = [3,3,1,3,2];
// sets[4] = 3;
localStorage.setItem("sets",JSON.stringify(sets));

let card17used = [];
for (i = 0; i< numPlayers;i++) {
    card17used.push(false);
}
localStorage.setItem("card17used",JSON.stringify(card17used));

function random9(cards) {
    let nine = [];
    for (let i = 0; i<10;i++) {
        let index = Math.floor(Math.random()*cards.length);
        let removed = cards.splice(index,1)[0];
        nine[i] = removed;
    }
    return nine;
}
//let cards = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
//let cards = [3,5,11,12,22,20,19,18,15];
// let cards = [3,6,8,9,12,22,11,20,18];
let completed = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];


// not tested but complete
//let cards = [7,18,6,3,9,22,20,8,11];
let cards = random9(completed);
localStorage.setItem("cards",JSON.stringify(cards));

localStorage.setItem("redOnes",0);
localStorage.setItem("redTwos",0);
localStorage.setItem("redFours",0);

let chipNameArray = ["Orange","Black","Red-1","Red-2","Red-4","Blue-1","Blue-2","Blue-4","Yellow-1","Yellow-2","Yellow-4","Green-1","Green-2","Green-4","Purple"];
localStorage.setItem("chipNameArray",JSON.stringify(chipNameArray));

// let availArray = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];

function setAvailArray() {
    let availArray = [];
    let baseAvail = [20,18,12,8,10,14,10,10,13,6,10,15,10,13,15];
    if (numPlayers <= 4) {
        availArray = baseAvail;
    }
    else {
        for (x of baseAvail) {
            let num = Math.floor(x*numPlayers/4);
            availArray.push(num);
        }
    }
    return availArray;
}
let availArray = setAvailArray();
localStorage.setItem("availArray",JSON.stringify(availArray));

done.addEventListener('click', 
    function() {

        for (let i = 0; i < numBots; i++) {
            let botName = "Bot" + (i+1);
            playerName.push(botName);
            playerType.push("bot");
        }
        //let playerArray = playerName.map(playerName => new Player(playerName));
        // console.log(playerName);
        localStorage.setItem('playerNameArray',JSON.stringify(playerName));
        localStorage.setItem('playerTypeArray',JSON.stringify(playerType));
        localStorage.setItem('turnIndex',0);
        localStorage.setItem("firstTurn", true);
        localStorage.setItem('round',1);
        window.location.href = 'turn.html';
});

