// let botWait = true;S

let botWaitTime = 200;

let setsString = localStorage.getItem("sets");
let sets = JSON.parse(setsString);
let cardsString = localStorage.getItem("cards");
let cards = JSON.parse(cardsString);
let round = localStorage.getItem("round");
let card = cards[round-1];
let red1text = document.getElementById("red1text");
let red2text = document.getElementById("red2text");
let red4text = document.getElementById("red4text");
function centerText(text) {

}

let redChips = document.getElementById("redChips");

let bustedTextElement = document.getElementById("busted");
// card = 16;
// card = 1;
card = 11;
let roundText = document.getElementById("round");
roundText.textContent = "Round: " + round;
let cardAbility = document.getElementById("cardAbility");
cardAbility.textContent = "Event card: ";

let popup = document.getElementById("popup");
function displayCard(card) {
    if (card == 0) {
        cardAbility.textContent += "Take any 4-token OR 1 VP for each catch up you get this round";
    }
    else if (card ==1) {
        cardAbility.textContent += "All players draw 5-chips, player(s) with the lowest sum gets one blue-2 token, others get sapphire ";
    }
    else if (card ==2) {
        cardAbility.textContent += "Take 4VP OR remove one white-1 token from bag";
    }
    else if (card ==3) {
        cardAbility.textContent += "Move player piece one space forward";
    }
    else if (card ==4) {
        cardAbility.textContent += "Trade a sapphire for any one 1-token";
    }
    else if (card ==5) {
        cardAbility.textContent += "Double catch ups this round";
    }
    else if (card ==6) {
        cardAbility.textContent += "Use catch ups normally OR pass one 1-3 catch ups to gain equivalent sapphires instead";
    }
    else if (card ==7) {
        cardAbility.textContent += "Choose: 1 black token OR any one 2-token OR 3 sapphires";
    }
    else if (card ==8) {
        cardAbility.textContent += "Move player piece 2 spaces forward OR take 1 purple token";
    }
    else if (card ==9) {
        cardAbility.textContent += "Everyone rolls die and gets bonus shown";
    }
    else if (card ==10) {
        cardAbility.textContent += "Draw 4 tokens from bag, Trade 1 for same color of next higher value, if cant, take green-1 token";
    }
    else if (card ==11) {
        cardAbility.textContent += "Player(s) with the fewest sapphires gain 1 sapphire";
    }
    else if (card ==12) {
        cardAbility.textContent += "Player(s) with the fewest VP gain green-1 token";
    }
    else if (card ==13) {
        cardAbility.textContent += "Throughout round, orange token moved 1 extra space";
    }
    else if (card ==14) {
        cardAbility.textContent += "After first 5 tokens have been placed, choose to continue or restart round all over";
    }
    else if (card ==15) {
        cardAbility.textContent += "After the round, if white sum is exactly 7, advance player piece";
    }
    else if (card ==16) {
        cardAbility.textContent += "If stopped without explosion, draw up to 5 tokens from bag, you may place one";
    }
    else if (card ==17) {
        cardAbility.textContent += "If busted, player to your left gains one 2-token";
    }
    else if (card ==18) {
        cardAbility.textContent += "All revives get replenished at end of round";
    }
    else if (card ==19) {
        cardAbility.textContent += "If you end on a scoring space with a sapphire, extra 2 vp";
    }
    else if (card ==20) {
        cardAbility.textContent += "If you end on a scoring space with a sapphire, extra sapphire";
    }
    else if (card ==21) {
        cardAbility.textContent += "Player who rolls dice rolls twice";
    }
    else if (card ==22) {
        cardAbility.textContent += "Threshold for white raised to 10";
    }
    else if (card ==23) {
        cardAbility.textContent += "In round, you may put the first white token drawn back in bag";
    }
    let num = cardAbility.textContent;
    let left = 50 - 0.23*num.length;
    cardAbility.style.left = left + "%";
    console.log(cardAbility);
}

displayCard(card);
let drawButton = document.getElementById("drawButton");
let endTurnButton = document.getElementById("endTurnButton");
let reviveButton = document.getElementById("reviveButton");

let turnIndicator = document.getElementById("turnIndicator");
let under = document.getElementById("under");
let orangeAbility = document.getElementById("orangeAbility");
let blackAbility = document.getElementById("blackAbility");
let redAbility = document.getElementById("redAbility");
let blueAbility = document.getElementById("blueAbility");
let yellowAbility = document.getElementById("yellowAbility");
let greenAbility = document.getElementById("greenAbility");
let purpleAbility = document.getElementById("purpleAbility");

function displayAbilities() {
    orangeAbility.textContent = "•Orange Ability: No special ability";
    blackAbility.textContent = "•Black Ability: At end of round, if more black chips played than one neighbor, advance player piece. If both neighbors, also gain sapphire";
    if (sets[0] == 0) {
        redAbility.textContent = "•Red Ability: If there are already orange tokens in your pot, move the red token forward additional spaces: 1 space for 1-2 orange tokens placed, 2 spaces for 3+ orange tokens placed";
    }
    else if (sets[0] == 1) {
        redAbility.textContent = "•Red Ability: Put this token aside. After you have stopped drawing, choose to play or at the end of a future turn";
    }
    else if (sets[0] == 2) {
        redAbility.textContent = "•Red Ability: If the previously played token was white, add its value to the red token when playing";
    }
    else if (sets[0] == 3) {
        redAbility.textContent = "•Red Ability: Once one red token is in the pot, all future white-1 tokens move 1 additional space";
    }

    if (sets[1] == 0) {
        blueAbility.textContent = "•Blue Ability: Draw 1/2/4 tokens from your bag. You may play one of them";
    }
    else if (sets[1] == 1) {
        blueAbility.textContent = "•Blue Ability: If your pot explodes in the next 1/2/4 turns, you get victory points and coins during the end of turn phase";
    }
    else if (sets[1] == 2) {
        blueAbility.textContent = "•Blue Ability: If this token is on a sapphire space, immediately gain a sapphire";
    }
    else if (sets[1] == 3) {
        blueAbility.textContent = "•Blue Ability: If this token is on a sapphire space, immediately gain 1/2/4 VP";
    }


    if (sets[2] == 0) {
        yellowAbility.textContent = "•Yellow Ability: If the previously played token was white, put the white token back in your bag without losing advancement in pot";
    }
    else if (sets[2] == 1) {
        yellowAbility.textContent = "•Yellow Ability: The next token that is played is moved twice as far its number indicates";
    }
    else if (sets[2] == 2) {
        yellowAbility.textContent = "•Yellow Ability: The total value of white tokens needed to blow up your pot increases to 9 if 1-2 yellow tokens have been played, and to 10 if 3+ yellow tokens have been played";
    }
    else if (sets[2] == 3) {
        yellowAbility.textContent = "•Yellow Ability: Your first placed yellow token is moved 1 extra, 2nd 2 extra, and 3rd 3 extra spaces";
    }

    if (sets[3] == 0) {
        greenAbility.textContent = "•Green Ability: For each green token that is last or second to last played, gain 1 sapphire";
    }
    else if (sets[3] == 1) {
        greenAbility.textContent = "•Green Ability: For each green token that is last or second to last played, take bonuses: green-1 token, gain one orange-1 token || green-2 token, gain one blue-1 or red-1 token || green-4 token, gain one yellow-1 OR purple-1 token.";
    }
    else if (sets[3] == 2) {
        greenAbility.textContent = "•Green Ability: If your white tokens have an exact total of 7 after your turn is done, move your final token as far as the total value of green tokens played";
    }
    else if (sets[3] == 3) {
        greenAbility.textContent = "•Green Ability: For each green token that is the last or second to last token in your pot, you may pay 1 sapphire to move your droplet forward";
    }

    if (sets[4] == 0) {
        purpleAbility.textContent = "•Purple Ability: For 1, 2, or 3 purple tokens played, you receive the bonuses: 1: 1 VP || 2: 1 VP and 1 sapphire || 3: 2 VP and advance droplet";
    }
    else if (sets[4] == 1) {
        purpleAbility.textContent = "•Purple Ability: You may exchange the purple tokens in your pot for the indicated bonuses: 1: one 1-black token, 1 VP, 1 sapphire || 2: one 1-green token, one 1-blue token, 3 VP, and advance droplet || 3: one 4-yellow token, 6 VP, 1 sapphire, and advance droplet twice";
    }
    else if (sets[4] == 2) {
        purpleAbility.textContent = "•Purple Ability: For each purple token, gain VP according to which space it was placed: <10: 0 || >=10: 1 || >=20: 2 || >=30: 3";
    }
    else if (sets[4] == 3) {
        purpleAbility.textContent = "•Purple Ability: Trade one token from the pot for another token of the same color with a greater value: 1 purple: 1-token for 2-token || 2 purple: 2-token for 4-token || 3 purple: 1-token for 4-token";
    }
}

displayAbilities();

drawButton.setAttribute("style", "display:none");
endTurnButton.setAttribute("style","display:none");
reviveButton.setAttribute("style","display:none");

let blackCost = 10;
let orangeCost = 3;

function greenCostCalc(set){
    let greenCost;
    if (set == 0 || set == 2 || set == 3) {
        greenCost = [4,8,14];
    }
    else if (set == 1){
        greenCost = [6,11,18];
    }
    return greenCost;
}

function blueCostCalc(set){
    let blueCost;
    if (set == 0 || set == 2 || set == 3) {
        blueCost = [5,10,19];
    }
    else if (set == 1) {
        blueCost = [4,8,14];
    }
    return blueCost;
}

function redCostCalc(set){
    let redCost;
    if (set == 0) {
        redCost = [6,10,16];
    }
    else if (set == 1) {
        redCost = [4,8,14];
    }
    else if (set == 2) {
        redCost = [5,9,15];
    }
    else if (set ==3) {
        redCost = [7,11,17];
    }
    return redCost;
}

function yellowCostCalc(set) {
    let yellowCost;
    if (set == 0 || set == 2 || set == 3) {
        yellowCost = [8,12,18];
    }
    else if (set == 1) {
        yellowCost = [9,13,19];
    }
    return yellowCost;
}

function purpleCostCalc(set) {
    let purpleCost;
    if (set == 0) {
        purpleCost = 9;
    }
    else if (set == 1) {
        purpleCost = 12;
    }
    else if (set == 2) {
        purpleCost = 10;
    }
    else if (set ==3) {
        purpleCost = 11;
    }
    return purpleCost;
}

let greenCost = greenCostCalc(sets[3]);
let blueCost = blueCostCalc(sets[1]);
let redCost = redCostCalc(sets[0]);
let yellowCost = yellowCostCalc(sets[2]);
let purpleCost = purpleCostCalc(sets[4]);
let preArray = [orangeCost,blackCost];
let costArray = preArray.concat(redCost,blueCost,yellowCost,greenCost,purpleCost);

let availArrayString = localStorage.getItem("availArray");
let availArray = JSON.parse(availArrayString);

let chipNameArrayString = localStorage.getItem("chipNameArray");
let chipNameArray = JSON.parse(chipNameArrayString);

function Player(name) {
    this.name = name;
    this.type;
    this.bag = [new Chip("white",1),new Chip("white",1),new Chip("white",1),new Chip("white",1),new Chip("white",2),new Chip("white",2),new Chip("white",3),new Chip("green",1),new Chip("orange",1)]; // need to add to this
    this.played = [];
    this.space = 0;
    this.vp = 0;
    this.coins = 0;
    this.rats = 0;
    this.piece = 0;
    this.white_sum = 0;
    this.revive = true;
    this.sapphires = 1;
    this.busted = false;
    this.white_max;
    this.side = [];
    this.redOnes = 0;
    this.redTwos = 0;
    this.redFours = 0;
    this.turnDone;
    this.purchase;

    this.addToBag = 
    function(chip) {
        this.bag.push(chip);
        if (chip.color == "orange") {
            availArray[0]--;
        }
        else if (chip.color == "black") {
            availArray[1]--;
        }
        else if (chip.color == "purple") {
            availArray[14]--;
        }
        else if (chip.color == "red") {
            if (chip.value == 1) {
            availArray[2]--;
            }
            else if (chip.value == 2) {
                availArray[3]--;
            }
            else if (chip.value == 4) {
                availArray[4]--;
            }
        }
        else if (chip.color == "blue") {
            if (chip.value == 1) {
            availArray[5]--;
            }
            else if (chip.value == 2) {
                availArray[6]--;
            }
            else if (chip.value == 4) {
                availArray[7]--;
            }
        }
        else if (chip.color == "yellow") {
            if (chip.value == 1) {
            availArray[8]--;
            }
            else if (chip.value == 2) {
                availArray[9]--;
            }
            else if (chip.value == 4) {
                availArray[10]--;
            }
        }
        else if (chip.color == "green") {
            if (chip.value == 1) {
            availArray[11]--;
            }
            else if (chip.value == 2) {
                availArray[12]--;
            }
            else if (chip.value == 4) {
                availArray[13]--;
            }
        }
        updateChipTable();
    }
    this.activateRoundChipAbility = 
    function() {
        let chip = this.played[this.played.length-1];
        let color = chip.color;
        let value = chip.value;
        if (sets[2] == 1) {
            if (this.played.length >1) {
            if (this.played[this.played.length-2].color == "yellow") {
                this.space += value;
            } 
        }
        }
        if (color == "red") {
                if (sets[0] == 0) {
                    let orangeCount = 0;
                    for (drawn of this.played) {
                        if (drawn.color == "orange") {
                            orangeCount++;
                        }
                    }
                    if (orangeCount >0 && orangeCount <3) {
                        this.space+=1;
                    }
                    else if (orangeCount >2) {
                        this.space+=2;
                    }
                    // orange token, red extra 1-2
                }
                else if (sets[0] == 1) {
                    //put aside nonsense
                }
                else if (sets[0] == 2) {
                    if (this.played.length > 1) {
                    if (this.played[this.played.length-2].color == "white") {
                        this.space += this.played[this.played.length-2].value;
                    }
                }
                    //if previous token was white, add value to this
                }
        }
        if (color == "blue") {
            if (sets[1] == 0) {
                drawButton.disabled = true;
                endTurnButton.disabled = true;
                reviveButton.disabled = true;
                setTimeout(blue1,1000);
                //1/2/4 nonsense draw
            }
            else if (sets[1] == 2) {
                if (sapphireArray[this.space+value] == 1) {
                    this.sapphires++;
                }
                // token on sapphire, gain sapphire
            }
            else if (sets[1] == 3) {
                if (sapphireArray[this.space+value] == 1) {
                    this.vp += value;
                }
                // token on sapphire, gain vp
            }
        }
        if (color == "yellow") {
            if (sets[2] == 0) {
                if (this.played[this.played.length-2].color == "white") {
                    this.played[this.played.length-2].space = null;
                    this.white_sum -= this.played[this.played.length-2].value;
                    if (!simHappening) {
                        let board = document.getElementById("board");
                        board.removeChild(board.lastChild);
                        board.removeChild(board.lastChild);
                    }
                    this.addToBag(this.played[this.played.length-2]);
                    this.played.splice(this.played.length-2,1);
                }
                //if previous was white, put back in bag without losing advancement
            }
            else if (sets[2] == 2) {
                let yellowCounter = 0;
                for (drawn of this.played) {
                    if (drawn.color == "yellow") {
                        yellowCounter++;
                    }
                }
                if (yellowCounter >0 && yellowCounter <3 && this.white_max < 9) {
                    this.white_max =9;
                }
                else if (yellowCounter >2) {
                    this.white_max = 10;
                }
                // white_max increased to 9 with 1-2, 10 with 3+
            }
            else if (sets[2] == 3) {
                let yellowCounter = 0;
                for (drawn of this.played) {
                    if (drawn.color == "yellow") {
                        yellowCounter++;
                    }
                }
                if (yellowCounter==1) {
                    this.space++;
                }
                else if (yellowCounter == 2) {
                    this.space += 2;
                }
                else if (yellowCounter == 3) {
                    this.space += 3;
                }
                // first 1, 2nd 2, 3rd 3
            }
        }
        if (color == "white" && value == 1) {
            if (sets[0] == 3) {
            let redCount = 0;
            for (drawn of this.played) {
                if (drawn.color == "red") {
                    redCount++;
                }
            }
            if (redCount >0) {
                this.space++;
            }
        }
            //red4 thing
        }
        if (color == "orange") {
            if (card == 13) {
                this.space++;
            }
        }
    }

    // complete
    // adds chip to bag
}





// let playerNameArrayString = localStorage.getItem('playerNameArray');
// console.log(localStorage.getItem("playerNameArray"));
//let playerNameArray = JSON.parse(playerNameArrayString);
// console.log(playerNameArray);
const messageElement = document.getElementById("message");


let turnIndex = parseInt(localStorage.getItem("turnIndex"));
let playerNameArrayString = localStorage.getItem("playerNameArray");
let playerNameArray = JSON.parse(playerNameArrayString);
let playerTypeArrayString = localStorage.getItem("playerTypeArray");
let playerTypeArray = JSON.parse(playerTypeArrayString);

console.log(playerTypeArray);
let firstTurn = localStorage.getItem("firstTurn");
localStorage.setItem("firstTurn",false);
let playerArray;

function becomePlayer(playerData){
    let player = new Player(playerData.name);
    player.bag = playerData.bag;
    player.type = playerData.type;
    player.played = playerData.played;
    player.space = playerData.space;
    player.vp = playerData.vp;
    player.coins = playerData.coins;
    player.rats = playerData.rats;
    player.piece = playerData.piece;
    player.white_sum = playerData.white_sum;
    player.revive = playerData.revive;
    player.sapphires = playerData.sapphires;
    player.busted = playerData.busted;
    player.white_max = playerData.white_max;
    player.redOnes = playerData.redOnes;
    player.redTwos = playerData.redTwos;
    player.redFours = playerData.redFours;
    player.side = playerData.side;
    player.purchase = playerData.purchase;

    return player;
}

if (firstTurn == "true") {
    playerArray = playerNameArray.map(playerNameArray => new Player(playerNameArray));
    for (let i = 0; i <playerArray.length; i++) {
        playerArray[i].white_max = 8;
        playerArray[i].type = playerTypeArray[i];
        
    }
}
else{
    let playerArrayString = localStorage.getItem("playerArray");
    playerArray = JSON.parse(playerArrayString);
    playerArray = playerArray.map(becomePlayer);
}

// function card0fourButton(player) {
//     return new Promise(resolve => {


//         setTimeout(() => resolve(),2000);
//     })
// } 
// async function card0() {
//     await Promise.race([

//     ])
// }

Player.prototype.removeFromBag =
function(chip) {
    let int;
    for (let i = 0; i < this.bag.length; i++) {
        if (this.bag[i].color == chip.color && this.bag[i].value == chip.value) {
            int = i;
        }
    }
    if (chip.color == "orange") {
        availArray[0]++;
    }
    else if (chip.color == "black") {
        availArray[1]++;
    }
    else if (chip.color == "purple") {
        availArray[14]++;
    }
    else if (chip.color == "red") {
        if (chip.value == 1) {
        availArray[2]++;
        }
        else if (chip.value == 2) {
            availArray[3]++;
        }
        else if (chip.value == 4) {
            availArray[4]++;
        }
    }
    else if (chip.color == "blue") {
        if (chip.value == 1) {
        availArray[5]++;
        }
        else if (chip.value == 2) {
            availArray[6]++;
        }
        else if (chip.value == 4) {
            availArray[7]++;
        }
    }
    else if (chip.color == "yellow") {
        if (chip.value == 1) {
        availArray[8]++;
        }
        else if (chip.value == 2) {
            availArray[9]++;
        }
        else if (chip.value == 4) {
            availArray[10]++;
        }
    }
    else if (chip.color == "green") {
        if (chip.value == 1) {
        availArray[11]++;
        }
        else if (chip.value == 2) {
            availArray[12]++;
        }
        else if (chip.value == 4) {
            availArray[13]++;
        }
    }
    updateChipTable();
    let whiteChip = this.bag.splice(int,1)[0];

}

Player.prototype.sideToPlayed =
function(chip) {
    let int;
    for (let i = 0; i < this.side.length; i++) {
        if (this.side[i].color == chip.color && this.side[i].value == chip.value) {
            int = i;
            console.log(i);
        }
    }
    let whiteChip = this.side.splice(int,1)[0];
    this.played.push(whiteChip);
}



function greenOneTwo2(player) {
    return new Promise(resolve => {
        //buttonTwo.replaceWith(buttonTwo.cloneNode(true));
        const buttonTwo = document.getElementById("button2");
        buttonTwo.innerHTML = "Red-1"
        buttonTwo.setAttribute("style","display:inline");
        buttonTwo.addEventListener("click", 
            function() 
            {
                player.addToBag(new Chip("red",1));
                under.textContent = player.name + " added red-1 token to bag";
                let num = under.textContent;
                let left = 50 - 0.2*num.length;
                under.style.left = left + "%";
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve(); 
                // setTimeout(() => resolve(),2000);
            },
            {once : true}
        );

    })}

function add2chips(selector) {
    if (availArray[3] >0) {
        let red = document.createElement("option");
        red.value = "red";
        red.text = "red";
        selector.appendChild(red);
        }
    
        if (availArray[12] > 0) {
        let green = document.createElement("option");
        green.value = "green";
        green.text = "green";
        selector.appendChild(green);
        }
    
        if (availArray[6]>0) {
        let blue = document.createElement("option");
        blue.value = "blue";
        blue.text = "blue";
        selector.appendChild(blue);
        }
    
        if (availArray[9]>0) {
        let yellow = document.createElement("option");
        yellow.value = "yellow";
        yellow.text = "yellow";
        selector.appendChild(yellow);
        }
}
 

function add4chips(selector) {
    if (availArray[4] >0) {
    let red = document.createElement("option");
    red.value = "red";
    red.text = "red";
    selector.appendChild(red);
    }

    if (availArray[13] > 0) {
    let green = document.createElement("option");
    green.value = "green";
    green.text = "green";
    selector.appendChild(green);
    }

    if (availArray[7]>0) {
    let blue = document.createElement("option");
    blue.value = "blue";
    blue.text = "blue";
    selector.appendChild(blue);
    }

    if (availArray[10]>0) {
    let yellow = document.createElement("option");
    yellow.value = "yellow";
    yellow.text = "yellow";
    selector.appendChild(yellow);
    }
}

function add1chips(selector) {
    if (availArray[2] >0) {
        let red = document.createElement("option");
        red.value = "red";
        red.text = "red";
        selector.appendChild(red);
        }
    
        if (availArray[11] > 0) {
        let green = document.createElement("option");
        green.value = "green";
        green.text = "green";
        selector.appendChild(green);
        }
    
        if (availArray[5]>0) {
        let blue = document.createElement("option");
        blue.value = "blue";
        blue.text = "blue";
        selector.appendChild(blue);
        }
    
        if (availArray[8]>0) {
        let yellow = document.createElement("option");
        yellow.value = "yellow";
        yellow.text = "yellow";
        selector.appendChild(yellow);
        }
    
    if (availArray[0] > 0) {
    let orange = document.createElement("option");
    orange.value = "orange";
    orange.text = "orange";
    selector.appendChild(orange);
    }

    if (availArray[13] > 0) {
    let purple = document.createElement("option");
    purple.value = "purple";
    purple.text = "purple";
    selector.appendChild(purple);
    }

    if (availArray[1] > 0) {
    let black = document.createElement("option");
    black.value = "black";
    black.text = "black";
    selector.appendChild(black);
    }
}



function card0(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    let num = turnIndicator.textContent;
    let left = 50 - 0.2*num.length;
    turnIndicator.style.left = left + "%";
    // under.textContent = "Take any 4-token or get 1 VP per catch up this round";
    return new Promise (resolve => 
        {
            const button1 = document.getElementById("card1");
            const button2 = document.getElementById("card3");
            button1.innerHTML = "4-token";
            button1.setAttribute("style","display:inline");
            button1.addEventListener("click", 
                function() {
                    //player.vp += 4;
                    //message.textContent = "4 VP added"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    const selector = document.getElementById("selector");
                    const doneButton = document.getElementById("card3");
                    selector.setAttribute("style", "display:inline");
                    doneButton.setAttribute("style","display:inline");
                    doneButton.innerHTML = "Done";
                    doneButton.disabled = true;
                    let blankOption = document.createElement("option");
                    blankOption.value = "";
                    blankOption.text = "";
                    selector.appendChild(blankOption);
                    add4chips(selector);

                    selector.addEventListener("change",
                        function() {
                            if (selector.value !== "") {
                                doneButton.disabled = false;
                            }
                            else {
                                doneButton.disabled = true;
                            }
                        }
                    )
                    doneButton.addEventListener("click",
                        function() {
                            player.addToBag(new Chip(selector.value,4));
                            selector.setAttribute("style","display:none");
                            doneButton.setAttribute("style","display:none");
                            while (selector.options.length > 0) {
                                selector.remove(0);
                            }
                            selector.replaceWith(selector.cloneNode(true));
                            doneButton.replaceWith(doneButton.cloneNode(true));
                            updateTable();
                            setTimeout(resolve,1000);
                        }
                    )

                
                })
            //const button3 = document.getElementById("card3");
            button2.innerHTML = "Catch ups";
            button2.setAttribute("style","display:inline");
            // console.log(player.bag);
            button2.addEventListener("click", 
                function() {
                    player.vp += player.rats;
                    // remove from bag
                    //console.log(player.bag);
                    //message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            
            )
            }
        
    )
    // take any 4 chip OR 1 VP per rat tail
}

function card1(player) {

        turnIndicator.textContent = player.name + "'s card turn";
        // under.textContent = "Each player draws 5 tokens. Lowest space gets blue-2 token, others get sapphire";
        // let num = under.textContent;
        // let left = 50 - 0.3*num.length;
        // under.style.left = left + "%";
        return new Promise(resolve => {
            let drawn = 0;
            let draw = document.getElementById("card2");
            // let done = document.getElementById("card3");
            // let selector = document.getElementById("selector");
            draw.innerHTML = "Draw";
            // done.innerHTML = "Done";
            // let blankOption = document.createElement("option");
            //         blankOption.value = "";
            //             blankOption.text = "";
            //             selector.appendChild(blankOption);
            draw.setAttribute("style","display:inline");
    
            draw.addEventListener("click",
                function() {
                    drawn++;
                    player.draw();
                    player.played[player.played.length-1].space = drawn+1;
                    placeChip(player.played[player.played.length-1]);
                    player.space += player.played[player.played.length-1].value;
                    updateTable();
                    if (drawn >=5) {
                        draw.setAttribute("style","display:none");
                        draw.replaceWith(draw.cloneNode(true));
                        setTimeout(resetBoard,999);
                        setTimeout(resolve,1000);
                    }
            
                }
            )

            

                }
            )
    
    
    
        
        //player draws 4 and chooses one to upgrade to higher color
    
    // all draw 5 chips, lowest gets blue-2 chip, others get sappgire
    // ass
}





function resetCard1() {
    return new Promise(resolve =>
        {
            // let maxSpace = 0;
            let spaces = [];
            for (x of playerArray) {
                spaces.push(x.space);
            }
            let minimums = "";
            let minSpace = Math.min(...spaces);
            for (x of playerArray) {
                if (x.space == minSpace) {
                    x.addToBag(new Chip("blue",2));
                    minimums += x.name + " ";
                }
                else {
                    x.sapphires++;
                }
            }
            updateTable();
            under.textContent = minimums + " gained blue-2 tokens, others sapphires";
            for (x of playerArray){
                x.bag = [...x.bag,...x.played];
                x.played = [];
                x.space = x.piece + x.rats;
                x.coins = 0;
                x.white_sum = 0;
                x.busted = false;
                x.white_max = 8;
            }
            setTimeout(resolve,3000);
        }
    )
}

function card2(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Take 4 VP OR remove a white-1 token from your bag";
    return new Promise (resolve => 
        {
            const button1 = document.getElementById("card1");
            button1.innerHTML = "4 VP";
            button1.setAttribute("style","display:inline");
            button1.addEventListener("click", 
                function() {
                    player.vp += 4;
                    message.textContent = "4 VP added"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    turnIndicator.textContent = "";
                    under.textContent = "";
                    updateTable();
                    setTimeout(resolve,1000);
                }
            )

            const button2 = document.getElementById("card2");
            button2.innerHTML = "Remove";
            button2.setAttribute("style","display:inline");
            console.log(player.bag);
            button2.addEventListener("click", 
                function() {
                    // remove from bag
                    //console.log(player.bag);
                    player.removeFromBag(new Chip("white",1));
                    console.log(player.bag);
                    message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            )
        }
    )
    // take 4 vp or remove white-1 chip permanently
}

function card3(player) {
    return new Promise(resolve =>
        {
            turnIndicator.textContent = "Card event: all players advance player piece";
            player.piece++;
            let time = 2000/playerArray.length;
            // console.log(time);
            setTimeout(resolve,time);
        }
    )
}

function card4(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Trade a sapphire for any 1-token";
    return new Promise (resolve => 
        {
            if (player.sapphires == 0) {
                message.textContent = "No catch ups available";
                setTimeout(resolve,1000);
            }
            else{
            const button1 = document.getElementById("card1");
            // const button2 = document.getElementById("card2");
            button1.innerHTML = "Trade";
            button1.setAttribute("style","display:inline");
            button1.addEventListener("click", 
                function() {
                    //player.vp += 4;
                    //message.textContent = "4 VP added"
                    button1.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    const selector = document.getElementById("selector");
                    const doneButton = document.getElementById("card3");
                    selector.setAttribute("style", "display:inline");
                    doneButton.setAttribute("style","display:inline");
                    doneButton.innerHTML = "Done";
                    doneButton.disabled = true;
                    let blankOption = document.createElement("option");
                    blankOption.value = "";
                    blankOption.text = "";
                    selector.appendChild(blankOption);
                    add1chips(selector);

                    selector.addEventListener("change",
                        function() {
                            if (selector.value !== "") {
                                doneButton.disabled = false;
                            }
                            else {
                                doneButton.disabled = true;
                            }
                        }
                    )
                    doneButton.addEventListener("click",
                        function() {
                            player.sapphires -= 1;
                            player.addToBag(new Chip(selector.value,1));
                            selector.setAttribute("style","display:none");
                            doneButton.setAttribute("style","display:none");
                            while (selector.options.length > 0) {
                                selector.remove(0);
                            }
                            selector.replaceWith(selector.cloneNode(true));
                            doneButton.replaceWith(doneButton.cloneNode(true));
                            updateTable();
                            setTimeout(resolve,1000);
                        }
                    )

                
                })
            const button3 = document.getElementById("card3");
            button3.innerHTML = "No trade";
            button3.setAttribute("style","display:inline");
            // console.log(player.bag);
            button3.addEventListener("click", 
                function() {
                    // remove from bag
                    //console.log(player.bag);
                    //message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            
            )
            }
        }
    )
    //trade ruby for any one chip
}

function card6(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Use catch-ups normally or pass on 1-3 to gain that many sapphires instead";
    return new Promise (resolve => 
        {
            if (player.rats == 0) {
                message.textContent = "No catch ups available";
                setTimeout(resolve,1000);
            }
            else{
            const button1 = document.getElementById("card1");
            // const button2 = document.getElementById("card2");
            button1.innerHTML = "Sapphires";
            button1.setAttribute("style","display:inline");
            button1.addEventListener("click", 
                function() {
                    //player.vp += 4;
                    //message.textContent = "4 VP added"
                    button1.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    const selector = document.getElementById("selector");
                    const doneButton = document.getElementById("card3");
                    selector.setAttribute("style", "display:inline");
                    doneButton.setAttribute("style","display:inline");
                    doneButton.innerHTML = "Done";
                    doneButton.disabled = true;
                    let blankOption = document.createElement("option");
                    blankOption.value = "";
                    blankOption.text = "";
                    selector.appendChild(blankOption);
                    for (i = 1; i <4; i++) {
                        if (i <= player.rats) {
                            let newOption = document.createElement("option");
                            newOption.value = i;
                            newOption.text = i;
                            selector.appendChild(newOption);
                        }
                    }

                    selector.addEventListener("change",
                        function() {
                            if (selector.value !== "") {
                                doneButton.disabled = false;
                            }
                            else {
                                doneButton.disabled = true;
                            }
                        }
                    )
                    doneButton.addEventListener("click",
                        function() {
                            player.rats -= parseInt(selector.value);
                            player.sapphires+= parseInt(selector.value);
                            selector.setAttribute("style","display:none");
                            doneButton.setAttribute("style","display:none");
                            while (selector.options.length > 0) {
                                selector.remove(0);
                            }
                            selector.replaceWith(selector.cloneNode(true));
                            doneButton.replaceWith(doneButton.cloneNode(true));
                            updateTable();
                            setTimeout(resolve,1000);
                        }
                    )

                
                })
            const button3 = document.getElementById("card3");
            button3.innerHTML = "Normal";
            button3.setAttribute("style","display:inline");
            // console.log(player.bag);
            button3.addEventListener("click", 
                function() {
                    // remove from bag
                    //console.log(player.bag);
                    //message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            
            )
            }
        }
    )
    //use rat or pass 1-3 rat tails for rubies
}

function card7(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Choose: black-1, any 2-token, 3 rubies";
    return new Promise (resolve => 
        {
            const button2 = document.getElementById("card2");
            // const button2 = document.getElementById("card2");
            button2.innerHTML = "2-token";
            button2.setAttribute("style","display:inline");
            button2.addEventListener("click", 
                function() {
                    //player.vp += 4;
                    //message.textContent = "4 VP added"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    const selector = document.getElementById("selector");
                    const doneButton = document.getElementById("card4");
                    selector.setAttribute("style", "display:inline");
                    doneButton.setAttribute("style","display:inline");
                    doneButton.innerHTML = "Done";
                    doneButton.disabled = true;
                    let blankOption = document.createElement("option");
                    blankOption.value = "";
                    blankOption.text = "";
                    selector.appendChild(blankOption);
                    add2chips(selector);

                    selector.addEventListener("change",
                        function() {
                            if (selector.value !== "") {
                                doneButton.disabled = false;
                            }
                            else {
                                doneButton.disabled = true;
                            }
                        }
                    )
                    doneButton.addEventListener("click",
                        function() {
                            player.addToBag(new Chip(selector.value,2));
                            selector.setAttribute("style","display:none");
                            doneButton.setAttribute("style","display:none");
                            while (selector.options.length > 0) {
                                selector.remove(0);
                            }
                            selector.replaceWith(selector.cloneNode(true));
                            doneButton.replaceWith(doneButton.cloneNode(true));
                            updateTable();
                            setTimeout(resolve,1000);
                        }
                    )

                
                })
            const button3 = document.getElementById("card3");
            button3.innerHTML = "3 sapphires";
            button3.setAttribute("style","display:inline");
            // console.log(player.bag);
            button3.addEventListener("click", 
                function() {
                    player.sapphires+=3;
                    // remove from bag
                    //console.log(player.bag);
                    //message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            
            )

            const button1 = document.getElementById("card1");
            button1.innerHTML = "Black-1";
            button1.setAttribute("style","display:inline");
            // console.log(player.bag);
            button1.addEventListener("click", 
                function() {
                    player.addToBag(new Chip("black",1));
                    // remove from bag
                    //console.log(player.bag);
                    //message.textContent = "White-1 chip removed from bag"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button3.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button3.replaceWith(button3.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            
            )
            }
        
    )
    // choose : one black chip OR any 2-chip OR 3 rubies

}

function card8(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Advance player piece 2 spaces OR gain a purple chip";
    return new Promise (resolve => 
        {
            const button1 = document.getElementById("card1");
            button1.innerHTML = "Piece+2";
            button1.setAttribute("style","display:inline");
            button1.addEventListener("click", 
                function() {
                    player.piece += 2;
                    message.textContent = "Player piece advanced 2"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    turnIndicator.textContent = "";
                    under.textContent = "";
                    updateTable();
                    setTimeout(resolve,1000);
                }
            )

            const button2 = document.getElementById("card3");
            button2.innerHTML = "Purple";
            button2.setAttribute("style","display:inline");
            button2.addEventListener("click", 
                function() {
                    player.addToBag(new Chip("purple",1));
                    message.textContent = "Purple chip added to bag"
                    button1.setAttribute("style","display:none");
                    button2.setAttribute("style","display:none");
                    button1.replaceWith(button1.cloneNode(true));
                    button2.replaceWith(button2.cloneNode(true));
                    updateTable();
                    setTimeout(resolve,1000);
                }
            )
        }
    )
    //move droplet 2 spaces OR gaine 1 purple chip
}

function card9(player) {
    let square = document.getElementById("roll");
    let rollText = document.getElementById("rollText");
    let circle = document.getElementById("circle");
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Everyone rolls dice and gains reward";
    return new Promise(resolve =>
        {
            let rollButton = document.getElementById("card1");
            rollButton.innerHTML = "Roll";
            rollButton.setAttribute("style","display:inline");

            rollButton.addEventListener("click", 
                function() {
            
    let roll = Math.floor(Math.random()*6);
    square.setAttribute("style", "display:inline");
    // console.log(square);
    if (roll == 0 || roll == 1) {
        player.vp += 1;
        rollText.setAttribute("style","display:inline");
        rollText.textContent = "1VP";
        under.textContent = player.name + " gained 1 victory point";
    }
    else if (roll == 2) {
        player.vp +=2;
        rollText.setAttribute("style","display:inline");
        rollText.textContent = "2VP";
        under.textContent = player.name + " gained 2 victory points";
    }
    else if (roll == 3) {
        player.addToBag(new Chip("orange",1));
        circle.setAttribute("style","display:inline");
        circle.setAttribute("fill","orange");
        circle.setAttribute("stroke","black");
        rollText.setAttribute("style","display:inline");
        rollText.setAttribute("x",24);
        rollText.setAttribute("y",36);
        rollText.textContent= "1";
        under.textContent = player.name + " gained one orange-1 token";
    }
    else if (roll == 4) {
        player.sapphires += 1;
        square.setAttribute("fill","blue");
        under.textContent = player.name + " gained a sapphire";
    }
    else if (roll == 5) {
        player.piece += 1;
        circle.setAttribute("style","display:inline");
        circle.setAttribute("fill","grey");
        circle.setAttribute("stroke","black");
        rollText.setAttribute("style","display:inline");
        rollText.setAttribute("x",24);
        rollText.setAttribute("y",36);
        rollText.textContent= "P";
        under.textContent = player.name + " advanced their player piece";
    }
    rollButton.setAttribute("style","display:none");
    rollButton.replaceWith(rollButton.cloneNode(true));
    updateTable();

    setTimeout(() => {disable(square,rollText,circle,under)},999);
    setTimeout(resolve,1000);
        })
    })
    //player rolls die
}

function disable(square,rollText,circle,under) {
    square.setAttribute("style","display:none");
    rollText.setAttribute("style","display:none");
    circle.setAttribute("style","display:none");
    under.textContent = "";
}

function addUpgradeable(player,selector) {
    console.log("hello");
    for (x of player.played) {
        if (x.value !== 4) {
            if (x.color !== "white" && x.color !== "orange" && x.color !== "black" && x.color !== "purple") {
                if ((x.color == "red" && x.value == 1 && availArray[3] < 1) || (x.color == "red" && x.value == 2 && availArray[4] < 1) || (x.color == "blue" && x.value == 1 && availArray[6] < 1) || (x.color == "blue" && x.value == 2 && availArray[7] < 1) || (x.color == "yellow" && x.value == 1 && availArray[9] < 1) || (x.color == "yellow" && x.value == 2 && availArray[10] < 1) || (x.color == "green" && x.value == 1 && availArray[12] < 1) || (x.color == "green" && x.value == 2 && availArray[13] < 1)) {

                }
                else {
                let newOption = document.createElement("option");
                newOption.value = x.color + x.value;
                newOption.setAttribute("color", x.color);
                //console.log(newOption.getAttribute("color"));
                newOption.text = x.color + "-" + x.value;
                selector.appendChild(newOption);
                }
            }
        }
    }
}

function card10(player) {
    turnIndicator.textContent = player.name + "'s card turn";
    // under.textContent = "Draw 4 tokens and choose one to upgrade to next highest value. Otherwise, gain green-1";
    return new Promise(resolve => {
        let drawn = 0;
        let draw = document.getElementById("card2");
        let done = document.getElementById("card3");
        let selector = document.getElementById("selector");
        draw.innerHTML = "Draw";
        done.innerHTML = "Done";
        let blankOption = document.createElement("option");
                    blankOption.value = "";
                    blankOption.text = "";
                    selector.appendChild(blankOption);
        draw.setAttribute("style","display:inline");

        draw.addEventListener("click",
            function() {
                drawn++;
                player.draw();
                player.played[player.played.length-1].space = drawn+1;
                placeChip(player.played[player.played.length-1]);
                if (drawn >=4) {
                    draw.setAttribute("style","display:none");
                    draw.replaceWith(draw.cloneNode(true));
                    selector.setAttribute("style","display:inline");
                    addUpgradeable(player,selector);
                    done.setAttribute("style","display:inline");
                }
        
            }
        )
        // selector.addEventListener("change",
        // function() {
        //     if (selector.value !== "") {
        //         doneButton.disabled = false;
        //     }
        //     else {
        //         doneButton.disabled = true;
        //     }
        // }
    // ) 
        done.addEventListener("click",
            function() {
                if (selector.value == "") {
                    player.addToBag(new Chip("green",1));
                    player.bag = [...player.bag,...player.played];
                    player.played = [];
                }
                else {
                    let value = parseInt(selector.value.slice(-1));
                    let color = selector.value.slice(0,-1);
                    let newVal;
                    if (value == 1) {
                        newVal = 2;
                    }
                    else {
                        newVal = 4;
                    }
                    player.addToBag(new Chip(color,newVal));
                    player.bag = [...player.bag,...player.played];
                    player.removeFromBag(new Chip(color,value));
                    player.played = [];
                }

                // for (let i = 0; i < 5; i++) {
                //     board.removeChild();
                // }
                resetBoard();

                selector.setAttribute("style","display:none");
                done.setAttribute("style","display:none");
                while (selector.options.length > 0) {
                    selector.remove(0);
                }
                selector.replaceWith(selector.cloneNode(true));
                done.replaceWith(done.cloneNode(true));
                updateTable();
                setTimeout(resolve,1000);
            }
        )



    })
    //player draws 4 and chooses one to upgrade to higher color
}

function card11() {
    return new Promise(resolve => 
        {
            turnIndicator.textContent = "Card: player(s) with least sapphires gain 1 VP"
            let minRubies;
            let rubies = [];
            let gainers = "";
            for (x of playerArray) {
                rubies.push(x.sapphires);
            }
            minRubies = Math.min(...rubies);
            for (x of playerArray) {
                if (x.sapphires == minRubies) {
                    x.sapphires++;
                    gainers += x.name + " ";
                }
            }
            under.textContent = gainers + " gained 1 sapphire";
            setTimeout(resolve,2000);
        }
    )
}

function card12() {
    return new Promise(resolve =>
        {
        turnIndicator.textContent = "Card: player(s) with least VP gain green-1 token"
        let minVP;
        let vp = [];
        let gainers = "";
        for (x of playerArray) {
            vp.push(x.vp);
        }
        minVP = Math.min(...vp);
        for (x of playerArray) {
            if (x.vp == minVP) {
                x.addToBag(new Chip("green",1));
                gainers += x.name + " ";
            }
        }
        under.textContent = gainers + " gained one green-1 token";
        // fewest vp gain 1 green chip
        setTimeout(resolve,2000);
        }
    )
}

function card22() {
    return new Promise(resolve =>
        {
            for (x of playerArray) {
                x.white_max = 10;
            }
            turnIndicator.textContent = "Event card: bust at a total of 10 this round";
            setTimeout(resolve,2000);
        }
    )
}

async function cardPreRound(card) {
    if (card == 0) {
        // take any 4-chip OR 1 VP per rat tail
        for (x of playerArray) {
            await card0(x);
        }
    }
    else if (card == 1) {
        // all draw 5 chips, lowest gets blue-2 chip, others get sapphire
        for (player of playerArray) {
            await card1(player);
        }
        await resetCard1();
    }
    else if (card == 2) {
        //take 4 vp or remove white-1chip permanently
        for (x of playerArray) {
            await card2(x);
        }
    }
    else if (card ==3) {
        for (x of playerArray) {
            await card3(x);
            //x.piece++;
        }
        //message.textContent = "Event: all players advanced piece 1 space";
        //move droplet one space forward
    } 
    else if (card == 4) {
        for (x of playerArray) {
            await card4(x);
        }
        //trade ruby for any one chip
    }
    else if (card == 5) {
        for (x of playerArray) {
            x.rats += x.rats;
        }
        message.textContent = "Event: double catch-ups this round";
        // double rat tails this round
    }
    else if (card == 6) {
        for (x of playerArray) {
            await card6(x);
        }
        // use rat OR pass 1-3 to get that many sapphires
    }
    else if (card == 7) {
        for (x of playerArray) {
            await card7(x);
        }
        // choose : one black chip OR any 2-chip OR 3 rubies
    }
    else if (card == 8) {
        for (x of playerArray) {
            await card8(x);
        }
        // move droplet 2 spaces forward OR take 1 purple chip
    }
    else if (card == 9) {
        for (x of playerArray) {
            await card9(x);
        }
        //everyone rolls die and gets bonus shown
    }
    else if (card == 10) {
        for (x of playerArray) {
            await card10(x);
        }
        //draw 4 chips from bag. trade 1 for same color of higher value. if not, get green1
    }
    else if (card == 11) {
        await card11();
        //fewest rubies gain 1 ruby
    } 
    else if (card == 12) {
        await card12();
        // fewest vp gain green1
    }
    else if (card == 22) {
        await card22();
        // threshold for white raised to 10
    }
    else if (card == 23) {
        // may put first white chip back in bag (kinda ass)
    }
    message.textContent = "";
    under.textContent = "";
    updateTable();
    playGame();
}





const coinArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,35];
const vpArray = [0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,12,13,13,13,14,14,15];
const sapphireArray = [0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0];

function createPlaceArray() {
    let placeArray = [];

    function createSpace(x,y,placeCounter) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x",x);
            rect.setAttribute("y",y);  
            rect.setAttribute("width", 5);
            rect.setAttribute("height",5);
            rect.setAttribute("fill","white");
            rect.setAttribute("stroke", "black");
            rect.setAttribute("stroke-width","0.2")
            rect.setAttribute("style","display:inline");
            //main.appendChild(rect);
            placeArray[placeCounter] = rect;
            // console.log(placeArray[placeCounter].x.value);

        // let num = document.createElementNS("http://www.w3.org/2000/svg","text");
        //     num.setAttribute("x",x+0.1);
        //     num.setAttribute("y",y+1.5);
        //     num.setAttribute("font-size",1.75);
        //     num.textContent = coinArray[placeCounter];
        //     main.appendChild(num);

        //     let vp = document.createElementNS("http://www.w3.org/2000/svg","text");
        //     vp.setAttribute("x",x+3);
        //     vp.setAttribute("y",y+1.5);
        //     vp.setAttribute("font-size",1.75);
        //     vp.setAttribute("fill","green");
        //     vp.textContent = vpArray[placeCounter];
        //     main.appendChild(vp);

        //     let sapphire = document.createElementNS("http://www.w3.org/2000/svg","rect");
        //     sapphire.setAttribute("x",x+0.1);
        //     sapphire.setAttribute("y",y+4);
        //     sapphire.setAttribute("width",1);
        //     sapphire.setAttribute("height",1);
        //     sapphire.setAttribute("fill","blue");
        //     sapphire.setAttribute("style","display:none");

        //     if (sapphireArray[placeCounter] ==1)
                //sapphire.setAttribute("style","display:inline");
            
            //main.appendChild(sapphire);
    }
    createSpace(0,0,0);

    let swap = false;
    let placeCounter =1;
    for (let j = 1; j < 4; j++) {
        for (let i = 1; i < 18; i++) {
            let x;
            if (swap)
                x = 85-i*5;
            else 
                x= i*5-5;
            let y = 10*j-5;

            createSpace(x,y,placeCounter);
            placeCounter++;
        } 
        placeCounter++;  
        if (swap)
            swap = false;
        else
            swap = true;

    };
    createSpace(80,10,18);
    createSpace(0,20,36);
    return placeArray;

}
let placeArray = new createPlaceArray();

function createEmptyBoard() {
    let main = document.getElementById("board");
    let placeArray = [];

    function createSpace(x,y,placeCounter) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x",x);
            rect.setAttribute("y",y);  
            rect.setAttribute("width", 5);
            rect.setAttribute("height",5);
            rect.setAttribute("fill","white");
            rect.setAttribute("stroke", "black");
            rect.setAttribute("stroke-width","0.1")
            rect.setAttribute("style","display:inline");
            main.appendChild(rect);
            placeArray[placeCounter] = rect;
            // console.log(placeArray[placeCounter].x.value);

        let num = document.createElementNS("http://www.w3.org/2000/svg","text");
            num.setAttribute("x",x+0.1);
            num.setAttribute("y",y+1.5);
            num.setAttribute("font-size",1.75);
            num.textContent = coinArray[placeCounter];
            main.appendChild(num);

            let vp = document.createElementNS("http://www.w3.org/2000/svg","text");
            vp.setAttribute("x",x+3);
            vp.setAttribute("y",y+1.5);
            vp.setAttribute("font-size",1.75);
            vp.setAttribute("fill","green");
            vp.textContent = vpArray[placeCounter];
            main.appendChild(vp);

            let sapphire = document.createElementNS("http://www.w3.org/2000/svg","rect");
            sapphire.setAttribute("x",x+0.1);
            sapphire.setAttribute("y",y+4);
            sapphire.setAttribute("width",1);
            sapphire.setAttribute("height",1);
            sapphire.setAttribute("fill","blue");
            sapphire.setAttribute("style","display:none");

            if (sapphireArray[placeCounter] ==1)
                sapphire.setAttribute("style","display:inline");
            
            main.appendChild(sapphire);
    }
    createSpace(0,0,0);

    let swap = false;
    let placeCounter =1;
    for (let j = 1; j < 4; j++) {
        for (let i = 1; i < 18; i++) {
            let x;
            if (swap)
                x = 85-i*5;
            else 
                x= i*5-5;
            let y = 10*j-5;

            createSpace(x,y,placeCounter);
            placeCounter++;
        } 
        placeCounter++;  
        if (swap)
            swap = false;
        else
            swap = true;

    };
    createSpace(80,10,18);
    createSpace(0,20,36);
    Object.defineProperty(this,'placeArray',{
        get: function() { return placeArray;}
});
}
// let createBoard = new createEmptyBoard();
// let placeArray = createBoard.placeArray;
// let board = document.getElementById("board");
//board.setAttribute("style","display:none");



function createScores(playerArray) {
// create the scoreboard
}

function Chip(color,value) {
    this.color = color;
    this.value = value;
    this.space = null;

    // need to add things 
}

Player.prototype.draw = 
function() {
    const max = this.bag.length;
    //console.log(max);
    let choice = Math.floor(Math.random()*(max));
    //console.log(choice);
    let drawnChip = this.bag.splice(choice,1)[0];
    this.played.push(drawnChip);
    // complete
    // draws chip
}

Player.prototype.playChip = 
function() {
    //console.log(this.played[this.played.length-1].value);
    //console.log(this.played[this.played.length-1].value);
    this.space += this.played[this.played.length-1].value;
    this.played[this.played.length-1].space = this.space;
}





function checkBust(white_sum) {
    let player = playerArray[turnIndex];
    let white_max = player.white_max;
    let bust = false;
    if (white_sum >= white_max) {
        bust = true;
    }
    return bust;
    // complete
    // checks if the chip caused a bust
}

function resetChipSpace(chip) {
    chip.space = null;
}

function placePlayer() {
    let player = playerArray[turnIndex];
    let piece = document.createElementNS("http://www.w3.org/2000/svg","rect");
    //console.log(chip);
    let x = parseInt(placeArray[player.piece].getAttribute("x"));
    let y = parseInt(placeArray[player.piece].getAttribute("y"));
    x = x+ 2.2;
    y += 2.2;
    piece.setAttribute("x",x);
    piece.setAttribute("y",y);
    piece.setAttribute("width",2.5);
    piece.setAttribute("height",2.5);
    piece.setAttribute("fill","grey");
    piece.setAttribute("stroke","black");
    piece.setAttribute("stroke-width",0.25);
    board.appendChild(piece);
    let p = document.createElementNS("http://www.w3.org/2000/svg","text");
    p.textContent = "P";
    p.setAttribute("x",x+0.5);
    p.setAttribute("y",y+2);
    p.setAttribute("font-size",2.5);
    board.appendChild(p);

    if (player.rats != 0) {
        let rat = document.createElementNS("http://www.w3.org/2000/svg","rect");
        let x = parseInt(placeArray[player.piece+player.rats].getAttribute("x"));
        let y = parseInt(placeArray[player.piece+player.rats].getAttribute("y"));
        x = x+ 2.2;
        y += 2.2;
        rat.setAttribute("x",x);
        rat.setAttribute("y",y);
        rat.setAttribute("width",2.5);
        rat.setAttribute("height",2.5);
        rat.setAttribute("fill","grey");
        rat.setAttribute("stroke","black");
        rat.setAttribute("stroke-width",0.25);
        board.appendChild(rat);

        let c = document.createElementNS("http://www.w3.org/2000/svg","text");
        c.textContent = "C";
        c.setAttribute("x",x+0.5);
        c.setAttribute("y",y+2);
        c.setAttribute("font-size",2.5);
        board.appendChild(c);
    }
    // let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    // number.textContent = chip.value;
    // number.setAttribute("x",x-0.5);
    // number.setAttribute("y",y+0.7);
    // number.setAttribute("font-size",2.5);
    // number.setAttribute("fill","black");
    // board.appendChild(number);
    // complete
    //places the chip on the board
}



// console.log(placeArray);
function placeChip(chip) {
    let chips = document.getElementById("chips");
    // let board = document.getElementById("board");
    const svgNS = "http://www.w3.org/2000/svg";
    let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    //console.log(chip);
    let x;
    let y;
    if (chip.space < placeArray.length-1) {
    x = parseInt(placeArray[chip.space].getAttribute("x"));
    y = parseInt(placeArray[chip.space].getAttribute("y"));
    }
    else {
        x = parseInt(placeArray[playerArray.length-1].getAttribute("x"));
        y = parseInt(placeArray[playerArray.length-1].getAttribute("y"));
    }
    x = x+ 3.2;
    y += 3.2;
    token.setAttribute("cx",x);
    token.setAttribute("cy",y);
    token.setAttribute("r",1.75);
    // token.setAttribute("fill",chip.color);
    // token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",0.15);
    token.style.borderRadius = "50%";


    if (chip.color == "white") {
        token.setAttribute("fill", "url(#gradWhite)");
    }
    else if (chip.color == "orange") {
        token.setAttribute("fill", "url(#gradOrange)");
    }
    else if (chip.color == "black") {
        token.setAttribute("fill", "url(#gradBlack)");
    }
    else if (chip.color == "red") {
        token.setAttribute("fill", "url(#gradRed)");
    }
    else if (chip.color == "blue") {
        token.setAttribute("fill", "url(#gradBlue)");
    }
    else if (chip.color == "yellow") {
        token.setAttribute("fill", "url(#gradYellow)");
    }
    else if (chip.color == "green") {
        token.setAttribute("fill", "url(#gradGreen)");
    }
    else if (chip.color == "purple") {
        token.setAttribute("fill", "url(#gradPurple)");
    }

    board.appendChild(token);

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = chip.value;
    number.setAttribute("x",x-0.5);
    number.setAttribute("y",y+0.7);
    number.setAttribute("font-size",2.5);
    // console.log(chip.color);
    if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
        number.setAttribute("fill","white");
    }
    else{
        number.setAttribute("fill","black");
    }
    number.style.fill = "white";
    number.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
    number.style.textShadow = "-1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black, 1.5px 1.5px 0 black";
    board.appendChild(number);
    // complete
    //places the chip on the board
}



function resetBoard() {
    let board = document.getElementById("board");
    let num = board.children.length - 8;
    for (let i = 0; i < num; i++) {
        board.removeChild(board.lastChild);
    }
}

async function turnOver() {
    //console.log(playerArray[turnIndex]);
    drawButton.disabled = true;
    reviveButton.disabled = true;
    endTurnButton.disabled = true;
    let player = playerArray[turnIndex];
    if (card == 16) {
        if (!playerArray[turnIndex].busted) {
            await card16(playerArray[turnIndex]);
        }

    }
    if (sets[0] == 1 && (player.redOnes > 0 || player.redTwos >0 || player.redFours>0)) {
        await activateRed1Ability();
    }
    playerArray[turnIndex].coins = coinArray[playerArray[turnIndex].space+1];
    //console.log(playerArray[turnIndex]);
    localStorage.setItem("playerArray",JSON.stringify(playerArray));
    localStorage.setItem("availArray",JSON.stringify(availArray));
    if (turnIndex >= playerArray.length-1) {
        localStorage.setItem("turnIndex",0);
        window.location.href = "end_turn.html";
    }
    else {
        localStorage.setItem("turnIndex",turnIndex+1);
        // resetBoard();
        window.location.href = "turn.html";
    }
}

let table = document.getElementById("table");
let chipTable = document.getElementById("chipTable");



//let chip = new Chip("white",3);
//console.log(chip);
//playTurn(playerArray[0]);

// for (let i = 0; i < playerNameArray.length; i++) {
//     //playTurn(playerArray[i]);
// }





//let index = 0;
//Player.white_sum = 0;



// let playerArrayString = localStorage.getItem("playerArray");
// let playerArray = JSON.parse(playerArrayString);
// console.log(playerNameArray);

// console.log(playerArray);
// placePlayer();


function initializeTable() {
    for (let i = 0; i < playerArray.length; i++) {
        let row = table.insertRow(); // Insert a new row
        row.style.color = "black";
        row.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
        let cell = [];
        for (let j = 0; j < 11; j++) {
          cell[j] = row.insertCell(); // Insert a new cell
        //   if (i == turnIndex-1) {
        //     cell[j].backgroundColor = "yellow";
        // }
        // else {
        //     console.log("hi");
        //     cell[j].backgroundColor = "white";
        // }
        }
        cell[0].textContent = playerArray[i].name;
        cell[1].textContent = playerArray[i].vp;
        cell[2].textContent = playerArray[i].piece;
        cell[3].textContent = playerArray[i].rats;
        cell[4].textContent = playerArray[i].revive;
        cell[5].textContent = playerArray[i].sapphires;
        cell[7].textContent = playerArray[i].space;
        cell[8].textContent = coinArray[playerArray[i].space+1];
        cell[9].textContent = vpArray[playerArray[i].space+1];
        cell[10].textContent = sapphireArray[playerArray[i].space+1];        
      }
}

function initializeChipTable() {
    for (let i = 0; i <15; i++) {
        let row = chipTable.insertRow(); // Insert a new row
        row.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
        if (i == 0) {
            row.style.backgroundColor = 'orange';
        }
        else if (i == 1) {
            row.style.backgroundColor = 'black';
        }
        else if (i == 2 || i == 3 || i == 4) {
            row.style.backgroundColor = 'red';
        }
        else if (i == 5 || i == 6 || i == 7) {
            row.style.backgroundColor = 'blue';
        }
        else if (i == 8 || i == 9 || i == 10) {
            row.style.backgroundColor = 'yellow';
        }
        else if (i == 11 || i == 12 || i == 13) {
            row.style.backgroundColor = 'green';
        }
        else if (i == 14) {
            row.style.backgroundColor = 'purple';
        }
        let cell = [];
        for (let j = 0; j < 3; j++) {
          cell[j] = row.insertCell(); // Insert a new cell
          if (i == 1 || i == 5 || i == 6 || i == 7 || i == 14) {
            cell[j].style.color = 'white';
          }
          else {
            cell[j].style.color = 'black';
          }
          cell[j].style.color = 'white';
        }
        cell[0].textContent = chipNameArray[i];
        cell[1].textContent = costArray[i];
        cell[2].textContent = availArray[i];    
      }
}
// initializeTable();

function updateTable() {
    for (let i = 0; i < playerArray.length; i++) {
    document.getElementById("table").rows[i+1].cells[1].textContent = playerArray[i].vp;
    document.getElementById("table").rows[i+1].cells[2].textContent = playerArray[i].piece;
    document.getElementById("table").rows[i+1].cells[3].textContent = playerArray[i].rats;
    document.getElementById("table").rows[i+1].cells[4].textContent = playerArray[i].revive;
    document.getElementById("table").rows[i+1].cells[5].textContent = playerArray[i].sapphires;
    document.getElementById("table").rows[i+1].cells[7].textContent = playerArray[i].space;
    document.getElementById("table").rows[i+1].cells[8].textContent = coinArray[playerArray[i].space+1];
    document.getElementById("table").rows[i+1].cells[9].textContent = vpArray[playerArray[i].space+1];
    document.getElementById("table").rows[i+1].cells[10].textContent = sapphireArray[playerArray[i].space+1];
    // document.getElementById("table").rows[i+1].cells[11].textContent = playerArray[i].busted;
    }
}

function updateTableColor() {
    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].busted) {
            document.getElementById("table").rows[i+1].style.backgroundColor = "red";
        }
        else if (turnIndex == i) {
            document.getElementById("table").rows[i+1].style.backgroundColor = "yellow";
        }
        else if (turnIndex > i) {
            document.getElementById("table").rows[i+1].style.backgroundColor = "green";
        }
        else {
            document.getElementById("table").rows[i+1].style.backgroundColor = "white";
        }
    }
}

function updateChipTable() {
    for (let i = 0; i < 15; i++) {
    document.getElementById("chipTable").rows[i+1].cells[2].textContent = availArray[i];
    }
}
// let turnIndicator = document.getElementById("turnIndicator");
// turnIndicator.textContent = playerArray[turnIndex].name + "'s turn";
// reviveButton.disabled = true;

// module.exports = {Player, PlayerMethods: Player.prototype, becomePlayer, initializeTable, updateTable};

initializeTable();
updateTableColor();
initializeChipTable();
let simHappening = false;

if (turnIndex == 0) {
    cardPreRound(card);
    // need to do the thing where it waits
}
else {
    playGame();
}



// function card16(player) {
//     title.textContent = player.name + "'s card turn";
//     under.textContent = "Draw up to 5 tokens, you may place one (token ability does not trigger)";
//     return new Promise(resolve => {
//         let drawn = 0;
//         let draw = document.getElementById("card2");
//         let done = document.getElementById("card3");
//         let selector = document.getElementById("selector");
//         draw.innerHTML = "Draw";
//         done.innerHTML = "Done";
//         let blankOption = document.createElement("option");
//                     blankOption.value = "";
//                     blankOption.text = "";
//                     selector.appendChild(blankOption);
//         draw.setAttribute("style","display:inline");

//         draw.addEventListener("click",
//             function() {
//                 drawn++;
//                 player.draw();
//                 player.played[player.played.length-1].space = drawn+1;
//                 placeChip(player.played[player.played.length-1]);
//                 if (drawn >=5 || player.bag.length <1) {
//                     draw.setAttribute("style","display:none");
//                     draw.replaceWith(draw.cloneNode(true));
//                     selector.setAttribute("style","display:inline");
//                     addUpgradeable(player,selector);
//                     done.setAttribute("style","display:inline");
//                 }
        
//             }
//         )
//         // selector.addEventListener("change",
//         // function() {
//         //     if (selector.value !== "") {
//         //         doneButton.disabled = false;
//         //     }
//         //     else {
//         //         doneButton.disabled = true;
//         //     }
//         // }
//     // ) 
//         done.addEventListener("click",
//             function() {
//                 if (selector.value == "") {
//                     player.addToBag(new Chip("green",1));
//                     player.bag = [...player.bag,...player.played];
//                     player.played = [];
//                 }
//                 else {
//                     let value = parseInt(selector.value.slice(-1));
//                     let color = selector.value.slice(0,-1);
//                     let newVal;
//                     if (value == 1) {
//                         newVal = 2;
//                     }
//                     else {
//                         newVal = 4;
//                     }
//                     player.addToBag(new Chip(color,newVal));
//                     player.bag = [...player.bag,...player.played];
//                     player.removeFromBag(new Chip(color,value));
//                     player.played = [];
//                 }

//                 // for (let i = 0; i < 5; i++) {
//                 //     board.removeChild();
//                 // }
//                 resetBoard();

//                 selector.setAttribute("style","display:none");
//                 done.setAttribute("style","display:none");
//                 while (selector.options.length > 0) {
//                     selector.remove(0);
//                 }
//                 selector.replaceWith(selector.cloneNode(true));
//                 done.replaceWith(done.cloneNode(true));
//                 updateTable();
//                 setTimeout(resolve,1000);
//             }
//         )



//     })
//     //player draws 4 and chooses one to upgrade to higher color
// }
// need to implement at turnOver, need to change so placement occurs
// in same area as blue set 1 will go
// need to fix overall

// Bot section

function sortedChipArray(costArray) {
    let arrayOrder = [new Chip("orange",1), new Chip("black",1), new Chip("red",1), new Chip("red",2), new Chip("red",4), new Chip("blue",1), new Chip("blue",2), new Chip("blue",4), new Chip("yellow",1), new Chip("yellow",2), new Chip("yellow",4), new Chip("green",1),new Chip("green",2), new Chip("green",4), new Chip("purple",1)]
    let sortedCostArray = []
    let sortedArray = []
    for (let i = 19; i>2; i--) {
        for (let j = 0; j < costArray.length; j++) {
            if (costArray[j] == i) {
                sortedCostArray.push(costArray[j])
                sortedArray.push(arrayOrder[j])
            }
        }
    }
    return [sortedCostArray, sortedArray]
}

X = sortedChipArray(costArray)
let sortedCostArray = X[0]
let sortedBuyArray = X[1]



function allPossibleChipCombos(sortedBuyArray,sortedCostArray) {
    let possiblePurchases = []
    for (let i = 0; i < 39; i++) {
        possiblePurchases[i] = []
    }
    for (let i = 0; i < sortedCostArray.length-1;i++) {
        possiblePurchases[sortedCostArray[i]].push([sortedBuyArray[i]])
        for (let j = i+1; j < sortedCostArray.length;j++) {
            if (sortedBuyArray[i].color != sortedBuyArray[j].color){
            index = sortedCostArray[i]+sortedCostArray[j];
            combo = [sortedBuyArray[i],sortedBuyArray[j]];
            // console.log(combo)
            x = possiblePurchases[index]
            // console.log(x)
            x.push(combo)
            possiblePurchases[index] = x
            }
        }
    }
    possiblePurchases[sortedCostArray[sortedCostArray.length-1]].push([sortedBuyArray[sortedBuyArray.length-1]])
    let possiblePurchases2 = []
    let possiblePurchases3 = []
    // for (let i = 0; i < possiblePurchases.length;i++) {
    //     x = possiblePurchases[i]
    //     for (let j = 0; j<x.length;j++) {
    //         y = x[j]
    //         for (let k = 0; k < y.length; k++) {
    //             if (y[k].color == "purple") {

    //             }
    //         }
    //     }
    // }

    for (let k = 0; k < possiblePurchases.length; k++) {
        x = possiblePurchases[k]
        x2 = []
        x3 = []
        // console.log(x)
        for (let i = 0; i < x.length; i++) {
            y = x[i]
            remove2 = false;
            remove3 = false;
            // console.log(y)
            for (let j = 0; j< y.length; j++) {
                // z = 
                // console.log(x[i].color)
                if (y[j].color == "purple") {
                    remove2 = true;
                }
                if (y[j].color == "yellow") {
                    remove3 = true
                }
            }
            if (!remove2) {
                x2.push(y)
            }
            if(!remove3) {
                x3.push(y)
            }
        }
        possiblePurchases2[k] = x2
        possiblePurchases3[k] = x3
    }
    return [possiblePurchases,possiblePurchases2,possiblePurchases3]

}
let allPossibleCombosArray = allPossibleChipCombos(sortedBuyArray,sortedCostArray)
let allPossibleCombos = allPossibleCombosArray[0]
let allPossibleNonPurple = allPossibleCombosArray[1]
let allPossibleNonPurpOrYellow = allPossibleCombosArray[2]
// console.log(allPossibleCombos)
// console.log(allPossibleNonPurple)
// console.log(allPossibleNonPurpOrYellow)

function allPossibleChipPurchases(budget, sortedBuyArray, sortedCostArray) {
    console.log(budget)
    let possiblePurchases = []
    let colorPairing = []
    for (let i = 0; i < sortedCostArray.length-1; i++) {
        if (sortedCostArray[i] <= budget) {
            if (budget-sortedCostArray[i] >= 3) {
                bought = [sortedBuyArray[i].color]
                for (let j = i+1; j < sortedCostArray.length; j++) {
                    valid = true
                    for (let k = 0; k < bought.length; k++) {
                        if (sortedBuyArray[j].color == bought[k]) {
                            valid = false
                        }
                    }
                    for (let k = 0; k < colorPairing.length; k++) {
                        // console.log(colorPairing[k][1])
                        // console.log(possiblePurchases[k][1])
                        // pair = [sortedBuyArray[i].color, sortedBuyArray[j].color]
                        if (((sortedBuyArray[i].color == colorPairing[k][0]) && (sortedBuyArray[j].color == colorPairing[k][1]))) {

                            valid = false
                        }
                        if (possiblePurchases[k].length > 1) {
                            if (((sortedBuyArray[j].color == colorPairing[k][0]) && (sortedBuyArray[i].color == colorPairing[k][1]) && ((possiblePurchases[k][0].value >= sortedBuyArray[j].value )&& (possiblePurchases[k][1].value >= sortedBuyArray[i].value)))) {
                                valid = false;
                            }
                        } 
                    }
                    if ((valid) && (sortedCostArray[i] + sortedCostArray[j] <= budget)) {
                        possiblePurchases.push([sortedBuyArray[i],sortedBuyArray[j]])
                        bought.push(sortedBuyArray[j].color)
                        colorPairing.push([sortedBuyArray[i].color,sortedBuyArray[j].color])
                    }
                }
            }
            else {
                possiblePurchases.push([sortedBuyArray[i]])
            }
        }
    }
    console.log(possiblePurchases)
    let newPossPurchases = []
    let remove;
    if (round < 3) {
        for (let k = 0; k < possiblePurchases.length; k++) {
            remove = false;
            x = possiblePurchases[k]
            console.log(x)
            for (let i = 0; i < x.length; i++) {
                console.log(x[i].color)
                if (x[i].color == "purple") {
                    remove = true;
                }
                if ((round == 1) && (x[i].color == "yellow")) {
                    remove = true
                }
            }
            if (!remove) {
                // console.log(possiblePurchases)
                // possiblePurchases.splice(k,1)
                // console.log(possiblePurchases)
                // console.log("spliced")
                newPossPurchases.push(x)
            }
        }
    }
    else {
        newPossPurchases = possiblePurchases;
    }
    console.log(round)
    console.log(colorPairing)
    // return possiblePurchases
    return newPossPurchases
}

// console.log(allPossibleChipPurchases(331,sortedBuyArray,sortedCostArray))
// for (let i = 0; i<playerArray.length; i++) {
//     if (playerArray[i].type == "bot") {
//         possiblePurchases = allPossibleChipPurchases(playerArray[i].coins,sortedBuyArray, sortedCostArray)
//         console.log(possiblePurchases)
//     }
// }

// possiblePurchases = allPossibleChipPurchases(35,sortedBuyArray, sortedCostArray)
// console.log(possiblePurchases)

// let botWaitTime = 1;

function calcBustable(player, whiteSum, whiteMax) {
    if (whiteMax - whiteSum > 3) {
        return false
    }
    else {
        for (x of player.bag) {
            if ((x.color == "white") &&(x.value + whiteSum >= whiteMax)) {
                return true
            }
        }
        return false
    }
}

function spaceToScore(space, busted, round) {
    // this is what needs to become way more advanced

    // need to consider in the algorithm for different chips
    // blue needs to consider the benefit if landing on a sapphire space
    // green needs to consider benefit if ending turn at that time with green last/2ndlast
    // need to consider getting victory die

    let coins = coinArray[space+1];
    let vp = vpArray[space+1];
    let saph = sapphireArray[space+1];
    
    let total;
    if (busted) {
        console.log("busted scenario")
        vpChoice = crudeVpOrCoins(round)
        console.log(vpChoice)
        // let total
        if (vpChoice) {
            total = vp + 0.5*saph
        }
        else {
            total = 0.2*coins+0.5*saph
        }
        // console.log(total)
    }
    else{        
        total = 0.2*coins + vp + 0.5*saph
    }
    // console.log(total)
    return total
}

function scoreChip(chip, sets, player) {
    // console.log(player)
    // localStorage.setItem("playerArray",playerArray.stringify())
    localStorage.setItem("playerArray",JSON.stringify(playerArray));
    priorSpace = player.space
    priorPlayerVp = player.vp
    priorPlayerSapp = player.sapphires
    player.played.push(chip)
    player.activateRoundChipAbility();
    player.playChip()
    console.log(chip)
    let busted = false
    if ((chip.color == "white") && (player.white_sum + chip.value >= player.white_max)) {
        busted = true
    }

    let tempSpace = player.space


    player.played.pop()
    // player.playChip()

    score = spaceToScore(tempSpace, busted, round)+ player.vp-priorPlayerVp + 0.5*(player.sapphires - priorPlayerSapp)
    // player.vp = priorPlayerVp
    // player.sapphires = priorPlayerSapp
    // player.space = priorSpace
    let playerArrayString = localStorage.getItem("playerArray");
    playerArray = JSON.parse(playerArrayString);
    playerArray = playerArray.map(becomePlayer);

    player = playerArray[turnIndex]
    // console.log(score)
    return score
}

function continueOrNot(player, round) {
    let bag = player.bag
    // let prevSpace = player.space
    let currentScore = spaceToScore(player.space, false, round)
    let probability = 1/bag.length
    let expectedScore = 0;

    for (x of bag) {
        score = scoreChip(x, sets, player)
        // console.log(score)
        expectedScore += probability * score
    }
    // console.log(expectedScore)
    // console.log(currentScore)
    // player.space = prevSpace
    if (expectedScore >= currentScore) {
        return true
    }
    else {
        return false
    }
}

function doNothing() {
    console.log("waiting")
}

async function botDrawing() {
    reviveButton.disabled = true;
    replace.disabled = true;
    let player = playerArray[turnIndex];
    player.turnDone = false
    let bust = false;
    let exceed = false;
    player.draw();
    player.activateRoundChipAbility();
    // console.log(player.played[player.played.length-1]);
    if (sets[0] == 1 && player.played[player.played.length-1].color == "red") {
        let redChip = player.played.pop();
        player.side.push(redChip);
        placeRed(player.side[player.side.length-1]);
        updateRedText();
    }
    else{
    player.playChip();
    // console.log(player.space);
    // console.log(placeArray);
    if (player.space >= placeArray.length-2) {
        player.space = placeArray.length-2;
        player.played[player.played.length-1].space = player.space;
        exceed = true;
    }
    placeChip(player.played[player.played.length-1]);

    // do the after 5 chips thing
    if (player.played[player.played.length-1].color == "white") {
        if (player.revive) {
            // reviveButton.disabled = false;
        }
        player.white_sum += player.played[player.played.length-1].value;
        if (player.white_sum == player.played[player.played.length-1].value)
            replace.disabled = false;
    }

    if (player.played.length >=3) {
        // endTurnButton.disabled = false;
    }
}
    if (card == 14 && player.played.length == 5 && !card17used[turnIndex]) {
        console.log("waiting");
        await card17();
    }
    bust = checkBust(player.white_sum,player.white_max);
    updateTable();
    if (bust) {
        bustedTextElement.textContent = "Busted!";
        player.busted = true;
        updateTable();
        updateTableColor();
        drawButton.disabled = true;
        reviveButton.disabled = true;
        player.turnDone = true;
        // setTimeout(turnOverBot,2000);
    }

    if (exceed) {
        messageElement.textContent = "Max reached!";
        updateTable();
        // player.space = placeArray[placeArray.length-1];
        // player.played[player.played.length-1] = player.space;

        drawButton.disabled = true;
        reviveButton.disabled = true;
        player.turnDone = true
        // setTimeout(turnOver,2000);
    }
    // return false;
}

function crudeVpOrCoins(round) {
    // for vp, not coins
    if (round < 5) {
        return false
    }
    else {
        return true
    }
}

let continueButton = document.getElementById("continueButton");
let startOver = document.getElementById("startOver");
let card17usedstring = localStorage.getItem("card17used")
let card17used = JSON.parse(card17usedstring);

function playGame() {
    console.log(playerArray[turnIndex].type)
    if (playerArray[turnIndex].type == "bot") {
        console.log('why am i here')
        playGameBot();
    }
    else {
    let createBoard = new createEmptyBoard();
    // let placeArray = createBoard.placeArray;
    let board = document.getElementById("board");
    if (card == 22) {
        message.textContent = "Event card: bust at a total of 10 this round";
    } 
    placeInitialRed();
    updateRedText();
    playerArray[turnIndex].space = playerArray[turnIndex].piece + playerArray[turnIndex].rats;
    drawButton.setAttribute("style", "display:inline");
    endTurnButton.setAttribute("style","display:inline");
    reviveButton.setAttribute("style","display:inline");
    placePlayer();
    turnIndicator.textContent = playerArray[turnIndex].name + "'s turn";
    reviveButton.disabled = true;
    endTurnButton.disabled = true;
    let replace = document.getElementById("replace");
    replace.disabled = true;
}
}

function playGameBot() {
    // console.log('entered bot behavior')
    let player = playerArray[turnIndex]
    let createBoard = new createEmptyBoard();
    // let placeArray = createBoard.placeArray;
    let board = document.getElementById("board");
    if (card == 22) {
        message.textContent = "Event card: bust at a total of 10 this round";
    } 
    placeInitialRed();
    updateRedText();
    playerArray[turnIndex].space = playerArray[turnIndex].piece + playerArray[turnIndex].rats;
    drawButton.setAttribute("style", "display:inline");
    endTurnButton.setAttribute("style","display:inline");
    reviveButton.setAttribute("style","display:inline");
    placePlayer();
    turnIndicator.textContent = playerArray[turnIndex].name + "'s turn";
    drawButton.disabled = true;
    reviveButton.disabled = true;
    endTurnButton.disabled = true;
    let replace = document.getElementById("replace");
    replace.disabled = true;

    let keepGoing;
    let turnDone = false;
    let bustable = false;
    let firstTime = true;
    
    function botTurn() {
        let player = playerArray[turnIndex]
        if (player.busted) {
            player.turnDone = true
        }
        else if (bustable) {
            // need to consider in the algorithm for different chips
            // blue needs to consider the benefit if landing on a sapphire space
            // green needs to consider benefit if ending turn at that time with green last/2ndlast
            //need to consider getting victory die
            keepGoing = continueOrNot(player, round);
            if (keepGoing) {
                botDrawing()
                setTimeout(botTurn, botWaitTime) 
                // setTimeout(botTurn, 10000)
            }
            else {
                bustedTextElement.textContent = "Stopped drawing";
                player.turnDone = true;
            }
        }
        else {
            botDrawing()
            console.log(player)
            bustable = calcBustable(player,player.white_sum,player.white_max)
            console.log(bustable)
            setTimeout(botTurn, botWaitTime)        
        }
        if ((player.turnDone) && (firstTime)) {
            firstTime = false
            if(player.busted) {
                console.log("BOT BUSTED")
            }
            else {
                console.log("BOT DID NOT BUST")
            }
            turnOverBot()
            // setTimeout(turnOverBot,10000)
        }
        
    }

    botTurn(player)
    // setTimeout(turnOver,2000)
}
// console.log(sortedBuyArray)
// console.log(sortedCostArray)
// console.log(allPossibleChipPurchases(13,sortedBuyArray,sortedCostArray))

async function botDrawingSim() {
    reviveButton.disabled = true;
    replace.disabled = true;
    let player = playerArray[turnIndex];
    player.turnDone = false
    let bust = false;
    let exceed = false;
    player.draw();
    player.activateRoundChipAbility();
    // console.log(player.played[player.played.length-1]);
    if (sets[0] == 1 && player.played[player.played.length-1].color == "red") {
        let redChip = player.played.pop();
        player.side.push(redChip);
        placeRed(player.side[player.side.length-1]);
        updateRedText();
    }
    else{
    player.playChip();
    // console.log(player.space);
    // console.log(placeArray);
    if (player.space >= placeArray.length-2) {
        player.space = placeArray.length-2;
        player.played[player.played.length-1].space = player.space;
        exceed = true;
    }
    // placeChip(player.played[player.played.length-1]);

    // do the after 5 chips thing
    if (player.played[player.played.length-1].color == "white") {
        if (player.revive) {
            // reviveButton.disabled = false;
        }
        player.white_sum += player.played[player.played.length-1].value;
        if (player.white_sum == player.played[player.played.length-1].value)
            replace.disabled = false;
    }

    if (player.played.length >=3) {
        // endTurnButton.disabled = false;
    }
}
    if (card == 14 && player.played.length == 5 && !card17used[turnIndex]) {
        // console.log("waiting");
        await card17();
    }
    bust = checkBust(player.white_sum,player.white_max);
    updateTable();
    if (bust) {
        bustedTextElement.textContent = "Busted!";
        player.busted = true;
        updateTable();
        updateTableColor();
        drawButton.disabled = true;
        reviveButton.disabled = true;
        player.turnDone = true;
        // setTimeout(turnOver,2000);
    }

    if (exceed) {
        messageElement.textContent = "Max reached!";
        updateTable();
        // player.space = placeArray[placeArray.length-1];
        // player.played[player.played.length-1] = player.space;

        drawButton.disabled = true;
        reviveButton.disabled = true;
        player.turnDone = true
        // setTimeout(turnOver,2000);
    }
    // return false;
}

function simulateRoundBot(allPossible) {
    // console.log("sim called")
    let player = playerArray[turnIndex]
    let chips = allPossible[simIndex];
    player.bag = [...player.bag, ...player.played]
    player.played = []
    player.white_sum = 0
    player.vp = 0;
    player.space = 0;
    player.coins = 0;
    player.rats = 0;
    player.piece = 0;
    player.white_sum = 0;
    // this.revive = true;
    player.sapphires = 0;
    player.busted = false;
    player.white_max = 8;
    player.side = [];
    player.turnDone = false
    // this.redOnes = 0;
    // this.redTwos = 0;
    // this.redFours = 0;

    // let originalBag = player.bag
    if (numSims == 0) {
        for (let i = 0; i < chips.length; i++){
            player.addToBag(chips[i])
        }
    }
    // let createBoard = new createEmptyBoard();
    // let placeArray = createBoard.placeArray;
    // let board = document.getElementById("board");
    // if (card == 22) {
    //     message.textContent = "Event card: bust at a total of 10 this round";
    // } 
    // placeInitialRed();
    // updateRedText();

    playerArray[turnIndex].space = playerArray[turnIndex].piece + playerArray[turnIndex].rats;
    
    // drawButton.setAttribute("style", "display:inline");
    // endTurnButton.setAttribute("style","display:inline");
    // reviveButton.setAttribute("style","display:inline");
    // placePlayer();
    // turnIndicator.textContent = playerArray[turnIndex].name + "'s turn";
    // drawButton.disabled = true;
    // reviveButton.disabled = true;
    // endTurnButton.disabled = true;
    // let replace = document.getElementById("replace");
    // replace.disabled = true;

    let keepGoing;
    let turnDone = false;
    let bustable = false;
    let firstTime = true;
    function botTurnSim() {
        // console.log("bot turn sim called")
        let player = playerArray[turnIndex]
        if (player.busted) {

        }
        else if (bustable) {
            // need to consider in the algorithm for different chips
            // blue needs to consider the benefit if landing on a sapphire space
            // green needs to consider benefit if ending turn at that time with green last/2ndlast
            //need to consider getting victory die
            keepGoing = continueOrNot(player, round);
            if (keepGoing) {
                botDrawingSim()
                botTurnSim()
            }
            else {
                bustedTextElement.textContent = "Stopped drawing";
                player.turnDone = true;
            }
        }
        else {
            botDrawingSim()
            // console.log(player)
            bustable = calcBustable(player,player.white_sum,player.white_max)
            // console.log(bustable)
            botTurnSim()       
        }
        if ((player.turnDone) && (firstTime)) {
            firstTime = false
            // console.log("entering final sim")
            analyzeFinalSimSpace()
        }
        
    }
    // player.removeFromBag()
    botTurnSim()
    // setTimeout(turnOver,2000)
}

let valueOfEachSim = []
let simIndex = 0

let numSims = 0
let maxSims = 5

// function turnOverBot() {
//     let player = playerArray[turnIndex];
//     playerArray[turnIndex].coins = coinArray[playerArray[turnIndex].space+1];
//     let coins = playerArray[turnIndex].coins;
//     let finalSpace = player.space;
//     let finalBag = player.bag;
//     let finalPlayed = player.played

//     let allPossible = allPossibleChipPurchases(coins, sortedBuyArray, sortedCostArray);
//     player.bag = [...player.bag,...player.played]
//     simulateRoundBot(allPossible)

// }

function turnOverBot() {
    //console.log(playerArray[turnIndex]);
    drawButton.disabled = true;
    reviveButton.disabled = true;
    endTurnButton.disabled = true;
    simHappening = true;
    let player = playerArray[turnIndex];
    // if (card == 16) {
    //     if (!playerArray[turnIndex].busted) {
    //         await card16(playerArray[turnIndex]);
    //     }

    // }
    // if (sets[0] == 1 && (player.redOnes > 0 || player.redTwos >0 || player.redFours>0)) {
    //     await activateRed1Ability();
    // }
    playerArray[turnIndex].coins = coinArray[playerArray[turnIndex].space+1];
    //console.log(playerArray[turnIndex]);
    localStorage.setItem("playerArray",JSON.stringify(playerArray));
    localStorage.setItem("availArray",JSON.stringify(availArray));
    let coins = playerArray[turnIndex].coins;
    console.log(coins)
    // this is where I need to do the things
    // theoretically I should have free will to do and change absolutely anything here
    // can reset vp to 0 each round and reset space and everything
    let allPossible = allPossibleChipPurchases(coins, sortedBuyArray, sortedCostArray);
    console.log(allPossible)
    localStorage.setItem("allPossible", JSON.stringify(allPossible))

    simulateRoundBot(allPossible)
}

function changeTurn() {
    if (turnIndex >= playerArray.length-1) {
        localStorage.setItem("turnIndex",0);
        window.location.href = "end_turn.html";
    }
    else {
        localStorage.setItem("turnIndex",turnIndex+1);
        // resetBoard();
        window.location.href = "turn.html";
    }
}

function analyzeFinalSimSpace() {
    // console.log("analyze final sim called")
    let player = playerArray[turnIndex]
    numSims++;
    let allPossibleString = localStorage.getItem("allPossible")
    let allPossible = JSON.parse(allPossibleString)
    let roundScore = spaceToScore(player.space, player.busted, round)
    // console.log(allPossible)
    // console.log(allPossible.length)
    // console.log(simIndex)
    // console.log(numSims)

    if (numSims == 1) {
        // console.log(allPossible)
        valueOfEachSim[simIndex] = roundScore
    }
    else {
        valueOfEachSim[simIndex] = (valueOfEachSim[simIndex]*(numSims-1) + roundScore)/(numSims);
    }

    player.bag = [...player.bag, ...player.played];
    player.played = []
    if (numSims >= maxSims) {
        numSims = 0
        let chips = allPossible[simIndex]
        // console.log(chips)

    
        simIndex++;
        // console.log("inner loop")
        // console.log(simIndex)
        // console.log(allPossible.length)
        if (simIndex >= allPossible.length) {
            // console.log("purchase chosen")
            // choosePurchase()
            setTimeout(choosePurchase,1000)
            // choosePurchase2(allPossible)
        }
        else {
            // console.log("purhchase not chosen")
            for (let i = 0; i < chips.length; i++) {
                player.removeFromBag(chips[i])
            }
            simulateRoundBot(allPossible)
        }
    }
    else {
        // console.log("entered final loop")
        // player.bag = [...player.bag, ...player.played];
        simulateRoundBot(allPossible)
    }
}

function choosePurchase() {
    // console.log(valueOfEachSim);
    // localStorage.setItem("vals", valueOfEachSim)
    let player = playerArray[turnIndex]
    let max = Math.max(...valueOfEachSim);
    let maxIndex;
    let allPossibleString = localStorage.getItem("allPossible")
    let allPossible = JSON.parse(allPossibleString)
    for (let i = 0; i < valueOfEachSim.length; i++) {
        if (max == valueOfEachSim[i]) {
            maxIndex = i
        }
    }
    let playerArrayString = localStorage.getItem("playerArray");
    playerArray = JSON.parse(playerArrayString);
    playerArray = playerArray.map(becomePlayer);
    player = playerArray[turnIndex]
    player.purchase = allPossible[maxIndex];
    localStorage.setItem("playerArray",JSON.stringify(playerArray));
    console.log(player.purchase)
    // changeTurn()
    // console.log("changing turn")
    setTimeout(changeTurn,5000);
    // console.log("change turn on timeout")
}

function choosePurchase2(allPossible) {
    // console.log(valueOfEachSim);
    // localStorage.setItem("vals", valueOfEachSim)
    let player = playerArray[turnIndex]
    let max = Math.max(...valueOfEachSim);
    let maxIndex;
    // let allPossibleString = localStorage.getItem("allPossible")
    // let allPossible = JSON.parse(allPossibleString)
    for (let i = 0; i < valueOfEachSim.length; i++) {
        if (max == valueOfEachSim[i]) {
            maxIndex = i
        }
    }
    let playerArrayString = localStorage.getItem("playerArray");
    playerArray = JSON.parse(playerArrayString);
    playerArray = playerArray.map(becomePlayer);
    player = playerArray[turnIndex]
    player.purchase = allPossible[maxIndex];
    localStorage.setItem("playerArray",JSON.stringify(playerArray));
    console.log(player.purchase)

    // changeTurn()
    // console.log("changing turn")
    setTimeout(changeTurn,5000);
    // console.log("change turn on timeout")
}

// if (playerArray[turnIndex].type == "player"){
//     let possibleCombos;
//     let allPossibleCombosArray = allPossibleChipCombos(sortedBuyArray,sortedCostArray)
//     if (round == 1) {
//         possibleCombos = allPossibleCombosArray[2]
//     }
//     else if (round == 2) {
//         possibleCombos = allPossibleCombosArray[1]
//     }
//     else {
//         possibleCombos = allPossibleCombosArray[0]
//     }
//     // let allPossibleCombosArray = allPossibleChipCombos(sortedBuyArray,sortedCostArray)
//     // let allPossibleCombos = allPossibleCombosArray[0]
//     // let allPossibleNonPurple = allPossibleCombosArray[1]
//     // let allPossibleNonPurpOrYellow = allPossibleCombosArray[2]
//     for (let i = 0; i < possibleCombos.length;i++) {
//         if (possibleCombos[i].length >0){
//             // console.log(i)
//             // simulateRoundBot(possibleCombos[i])
//         }
//     }
// }



// no more bot stuff

function card17() {
    drawButton.setAttribute("style","display:none");
    reviveButton.setAttribute("style","display:none");
    endTurnButton.setAttribute("style","display:none");
    startOver.setAttribute("style","display:inline");
    continueButton.setAttribute("style","display:inline");
    card17used[turnIndex] = true;
    localStorage.setItem("card17used",JSON.stringify(card17used));
    return new Promise(resolve =>
        {
            continueButton.addEventListener("click", 
    function() {
        continueButton.setAttribute("style","display:none");
        startOver.setAttribute("style","display:none");
        drawButton.setAttribute("style","display:inline");
        endTurnButton.setAttribute("style","display:inline");
        reviveButton.setAttribute("style","display:inline");
        resolve();
    }
)

startOver.addEventListener("click",
    function() {
        let player = playerArray[turnIndex];
        player.bag = [...player.bag,...player.played];
            player.played = [];
            player.space = player.piece + player.rats;
            player.coins = 0;
            player.white_sum = 0;
            player.busted = false;
            player.white_max = 8;
            updateTable();
        localStorage.setItem("playerArray",JSON.stringify(playerArray));
        window.location.href = "turn.html";
    }
)
        })}

drawButton.addEventListener('click',
async function() {
    reviveButton.disabled = true;
    replace.disabled = true;
    let player = playerArray[turnIndex];
    let bust = false;
    let exceed = false;
    player.draw();
    player.activateRoundChipAbility();
    // console.log(player.played[player.played.length-1]);
    if (sets[0] == 1 && player.played[player.played.length-1].color == "red") {
        let redChip = player.played.pop();
        player.side.push(redChip);
        placeRed(player.side[player.side.length-1]);
        updateRedText();
    }
    else{
    player.playChip();
    // console.log(player.space);
    // console.log(placeArray);
    if (player.space >= placeArray.length-2) {
        player.space = placeArray.length-2;
        player.played[player.played.length-1].space = player.space;
        exceed = true;
    }
    placeChip(player.played[player.played.length-1]);

    // do the after 5 chips thing
    if (player.played[player.played.length-1].color == "white") {
        if (player.revive) {
            reviveButton.disabled = false;
        }
        player.white_sum += player.played[player.played.length-1].value;
        if (player.white_sum == player.played[player.played.length-1].value)
            replace.disabled = false;
    }

    if (player.played.length >=3) {
        endTurnButton.disabled = false;
    }
}
    if (card == 14 && player.played.length == 5 && !card17used[turnIndex]) {
        console.log("waiting");
        await card17();
    }
    bust = checkBust(player.white_sum,player.white_max);
    updateTable();
    if (bust) {
        bustedTextElement.textContent = "Busted!";
        player.busted = true;
        updateTable();
        updateTableColor();
        drawButton.disabled = true;
        reviveButton.disabled = true;
        setTimeout(turnOver,2000);
    }

    if (exceed) {
        messageElement.textContent = "Max reached!";
        updateTable();
        // player.space = placeArray[placeArray.length-1];
        // player.played[player.played.length-1] = player.space;

        drawButton.disabled = true;
        reviveButton.disabled = true;
        setTimeout(turnOver,2000);
    }


});

function closePopup() {
    popup.style.display = "none";
}

function handleYes() {
    closePopup();
    turnOver();
}

function handleNo() {
    closePopup();
}

let bluePopup = document.getElementById("blue1popup");

// let redOnes = parseInt(localStorage.getItem("redOnes"));
// let redTwos = parseInt(localStorage.getItem("redTwos"));
// let redFours = parseInt(localStorage.getItem("redFours"));


localStorage.setItem("trigger",false);

function placeInitialRed() {
    let player = playerArray[turnIndex];
    if (player.redOnes > 0) {
        let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let y = 5;
    let x;
    x = 88.2;
    token.setAttribute("cx",x);
    token.setAttribute("cy",y);
    token.setAttribute("r",1.75);
    token.setAttribute("fill","red");
    token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",0.15);
    token.disabled = true;

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = 1;
    number.setAttribute("x",x-0.5);
    number.setAttribute("y",y+0.7);
    number.setAttribute("font-size",2.5);
    number.style.display = "inline";
    // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }

    token.addEventListener("click", 
        function() {
            let trigger = localStorage.getItem("trigger");
            if(trigger == "true") {
                player.redOnes--;
                updateRedText();
                if (player.redOnes == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
            
            
            player.sideToPlayed(new Chip("red",1));
            player.playChip();
            updateTable();
            let exceed = false;
            if (player.space >= placeArray.length-2) {
                player.space = placeArray.length-2;
                player.played[player.played.length-1].space = player.space;
                exceed = true;
            }
            placeChip(player.played[player.played.length-1]);
            if (exceed == true) {
                messageElement.textContent = "Max reached!";
                updateTable();
                // player.space = placeArray[placeArray.length-1];
                // player.played[player.played.length-1] = player.space;
        
                // drawButton.disabled = true;
                // reviveButton.disabled = true;
                setTimeout(turnOver,2000);
            }
        }
    }
    )

    redChips.appendChild(token);
    redChips.appendChild(number);
    }
    if (player.redTwos > 0) {
        let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let y = 5;
    let x;
    x = 93.2;


    token.setAttribute("cx",x);
    token.setAttribute("cy",y);
    token.setAttribute("r",1.75);
    token.setAttribute("fill","red");
    token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",0.15);
    token.disabled = true;

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = 2;
    number.setAttribute("x",x-0.5);
    number.setAttribute("y",y+0.7);
    number.setAttribute("font-size",2.5);
    number.style.display = "inline";
    // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }

    token.addEventListener("click", 
        function() {
            let trigger = localStorage.getItem("trigger");
            if(trigger == "true") {

                player.redTwos--;
                updateRedText();
                if (player.redTwos == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
        

            player.sideToPlayed(new Chip("red",2));
            player.playChip();
            updateTable();
            let exceed = false;
            if (player.space >= placeArray.length-2) {
                player.space = placeArray.length-2;
                player.played[player.played.length-1].space = player.space;
                exceed = true;
            }
            placeChip(player.played[player.played.length-1]);
            if (exceed == true) {
                messageElement.textContent = "Max reached!";
                updateTable();
                // player.space = placeArray[placeArray.length-1];
                // player.played[player.played.length-1] = player.space;
        
                // drawButton.disabled = true;
                // reviveButton.disabled = true;
                setTimeout(turnOver,2000);
            }
        }
    }
    )

    redChips.appendChild(token);
    redChips.appendChild(number);
    }
    if (player.redFours > 0) {
        let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let y = 5;
    let x;
        x = 98.2;

    token.setAttribute("cx",x);
    token.setAttribute("cy",y);
    token.setAttribute("r",1.75);
    token.setAttribute("fill","red");
    token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",0.15);
    token.disabled = true;

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = 4;
    number.setAttribute("x",x-0.5);
    number.setAttribute("y",y+0.7);
    number.setAttribute("font-size",2.5);
    number.style.display = "inline";
    // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }

    token.addEventListener("click", 
        function() {
            let trigger = localStorage.getItem("trigger");
            if(trigger == "true") {
                player.redFours--;
                updateRedText();
                if (player.redFours == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
            player.sideToPlayed(new Chip("red",4));
            player.playChip();
            updateTable();
            let exceed = false;
            if (player.space >= placeArray.length-2) {
                player.space = placeArray.length-2;
                player.played[player.played.length-1].space = player.space;
                exceed = true;
            }
            placeChip(player.played[player.played.length-1]);
            if (exceed == true) {
                messageElement.textContent = "Max reached!";
                updateTable();
                // player.space = placeArray[placeArray.length-1];
                // player.played[player.played.length-1] = player.space;
        
                // drawButton.disabled = true;
                // reviveButton.disabled = true;
                setTimeout(turnOver,2000);
            }
        }
    }
    )

    redChips.appendChild(token);
    redChips.appendChild(number);
    }
}

function placeRed(chip) {
    let player = playerArray[turnIndex];
    if (chip.value == 1) {
            player.redOnes++;
        }
        else if (chip.value == 2) {
            player.redTwos++;
        }
        else if (chip.value == 4) {
            player.redFours++;
        }


    if ((chip.value == 1 && player.redOnes == 1) || (chip.value == 2 && player.redTwos == 1) || (chip.value ==4 && player.redFours == 1)) {
    let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    let y = 5;
    let x;
    if (chip.value == 1) {
        x = 88.2;
    }
    else if (chip.value == 2) {
        x = 93.2;
    }
    else if (chip.value == 4) {
        x = 98.2;
    }
    token.setAttribute("cx",x);
    token.setAttribute("cy",y);
    token.setAttribute("r",1.75);
    token.setAttribute("fill",chip.color);
    token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",0.15);
    token.disabled = true;

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = chip.value;
    number.setAttribute("x",x-0.5);
    number.setAttribute("y",y+0.7);
    number.setAttribute("font-size",2.5);
    number.style.display = "inline";
    // console.log(chip.color);
    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }

    token.addEventListener("click", 
        function() {
            let trigger = localStorage.getItem("trigger");
            if(trigger == "true") {
            if (chip.value == 1) {
                player.redOnes--;
                updateRedText();
                if (player.redOnes == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
            }
            if (chip.value == 2) {
                player.redTwos--;
                updateRedText();
                if (player.redTwos == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
            }
            if (chip.value == 4) {
                player.redFours--;
                updateRedText();
                if (player.redFours == 0) {
                    token.style.display = "none";
                    number.style.display = "none";
                }
            }
            player.sideToPlayed(new Chip("red",chip.value));
            player.playChip();
            updateTable();
            let exceed = false;
            if (player.space >= placeArray.length-2) {
                player.space = placeArray.length-2;
                player.played[player.played.length-1].space = player.space;
                exceed = true;
            }
            placeChip(player.played[player.played.length-1]);
            if (exceed == true) {
                messageElement.textContent = "Max reached!";
                updateTable();
                // player.space = placeArray[placeArray.length-1];
                // player.played[player.played.length-1] = player.space;
        
                // drawButton.disabled = true;
                // reviveButton.disabled = true;
                setTimeout(turnOver,2000);
            }
        }
    }
    )

    redChips.appendChild(token);
    redChips.appendChild(number);
}
}


function updateRedText() {
    let player = playerArray[turnIndex];
    // let ones = 0;
    // let twos = 0;
    // let fours = 0;
    red1text.style.display = "none";
    red2text.style.display = "none";
    red4text.style.display = "none";
    // for (x of playerArray[turnIndex].side) {
    //     if (x.value == 1) {
    //         ones++;
    //         red1text.style.display = "inline";
    //     }
    //     else if (x.value == 2) {
    //         twos++;
    //         red2text.style.display = "inline";
    //     }
    //     else if (x.value == 4) {
    //         fours++;
    //         red4text.style.display = "inline";
    //     }
    // }
    red1text.textContent = player.redOnes;
    red2text.textContent = player.redTwos;
    red4text.textContent = player.redFours;
    if (player.redOnes >0) {
        red1text.style.display = "inline";
    }
    if (player.redTwos >0) {
        red2text.style.display = "inline";
    }
    if (player.redFours >0) {
        red4text.style.display = "inline";
    }
}

function activateRed1Ability() {
    let player = playerArray[turnIndex];
    turnIndicator.textContent = player.name + " place any additional red chips";
    // let buttons = document.querySelectorAll('svg #redChips button');
    // buttons.forEach(function(button){
    //     button.disabled = false;
    // })
    localStorage.setItem("trigger",true);
    console.log('hi');
    let doneRed = document.getElementById("doneRed");
    doneRed.innerHTML = "Done";
    doneRed.style.display = "inline";
    // doneRed.style.position ='absolute';
    // doneRed.style.top = '0%';
    // doneRed.style.left = '90%'
    console.log(doneRed);
    console.log(redChips);
    return new Promise(resolve => {
        console.log('resolving')
        doneRed.addEventListener("click", 
            function() {
                // localStorage.setItem("redOnes",redOnes);
                // localStorage.setItem("redTwos",redTwos);
                // localStorage.setItem("redFours",redFours);
                resolve();
            }
        )
        // redChips.appendChild(doneRed);
    })
}

function createChip(chip) {
    // let chips = document.getElementById("chips");
    // let board = document.getElementById("board");
    let token = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    token.setAttribute("r",30);
    token.setAttribute("fill",chip.color);
    // token.setAttribute("stroke","black");
    token.setAttribute("stroke-width",2);
    //console.log(chip);
    // let x;
    // let y;
    // if (chip.space < placeArray.length-1) {
    // x = parseInt(placeArray[chip.space].getAttribute("x"));
    // y = parseInt(placeArray[chip.space].getAttribute("y"));
    // }
    // else {
    //     x = parseInt(placeArray[playerArray.length-1].getAttribute("x"));
    //     y = parseInt(placeArray[playerArray.length-1].getAttribute("y"));
    // }
    // x = x+ 3.2;
    // y += 3.2;
    // token.setAttribute("cx",x);
    // token.setAttribute("cy",y);
    if (chip.color == "white") {
        token.setAttribute("fill", "url(#gradWhite)");
    }
    else if (chip.color == "orange") {
        token.setAttribute("fill", "url(#gradOrange)");
    }
    else if (chip.color == "black") {
        token.setAttribute("fill", "url(#gradBlack)");
    }
    else if (chip.color == "red") {
        token.setAttribute("fill", "url(#gradRed)");
    }
    else if (chip.color == "blue") {
        token.setAttribute("fill", "url(#gradBlue)");
    }
    else if (chip.color == "yellow") {
        token.setAttribute("fill", "url(#gradYellow)");
    }
    else if (chip.color == "green") {
        token.setAttribute("fill", "url(#gradGreen)");
    }
    else if (chip.color == "purple") {
        token.setAttribute("fill", "url(#gradPurple)");
    }

    // board.appendChild(token);

    let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    number.textContent = chip.value;
    number.setAttribute("font-size",40);
    // console.log(chip.color);
    if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
        number.setAttribute("fill","white");
    }
    else{
        number.setAttribute("fill","black");
    }
    number.style.fill = "white";
    number.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
    number.style.textShadow = "-1.5px -1.5px 0 black, 1.5px -1.5px 0 black, -1.5px 1.5px 0 black, 1.5px 1.5px 0 black";


    // board.appendChild(token);

    // let number = document.createElementNS("http://www.w3.org/2000/svg","text");
    // number.textContent = chip.value;

    // number.setAttribute("font-size",40);

    // if (chip.color == "black" || chip.color == "blue" || chip.color == "purple") {
    //     number.setAttribute("fill","white");
    // }
    // else{
    //     number.setAttribute("fill","black");
    // }

    return [token,number];
}
let blueButtons = document.getElementById("blueButtons");
let blueImages = document.getElementById("blue1images");

let card16Buttons = document.getElementById("card16buttons");
let card16Images = document.getElementById("card16images");
let card16popup = document.getElementById("card16popup")

function card16(player) {
    // let player = playerArray[turnIndex];
    // let val = player.played[player.played.length-1].value;
    return new Promise(resolve => {
        card16popup.style.display = "inline";
    let skip = document.createElement("button");
    skip.innerHTML = "Skip";
    skip.style.position ='absolute';
    skip.style.top = '50%';
    skip.style.left = '47%'
    // skip.setAttribute("x",500);
    skip.addEventListener("click",
        function() {
            while (card16Buttons.firstChild) {
                card16Buttons.removeChild(card16Buttons.firstChild);
            }
            while (card16Images.firstChild) {
                card16Images.removeChild(card16Images.firstChild);
            }
            card16popup.style.display = "none";
            drawButton.disabled = false;
            setTimeout(resolve,1000);
        }
    )
    card16Buttons.appendChild(skip);
    let j = 0;
    for (let i = 0; i < 5; i++) {
        if (player.bag.length > 0) {
        j++;
        player.draw();
        let chip = player.played[player.played.length-1];
        console.log(chip);
        let array = createChip(chip);
        console.log(array);
        let token = array[0];
        let number = array[1];
        // console.log()
        token.setAttribute("cx",70*i+31);
        token.setAttribute("cy",50);
        number.setAttribute("x",70*i+23);
        number.setAttribute("y",60);
        token.disabled = true;
        token.addEventListener("click", 
            function() {
                for (let i = 0; i <= j; i++) {
                    let returnChip = player.played.pop();
                    player.bag.push(returnChip);
                }
                player.removeFromBag(chip);
                player.played.push(chip);
                while (card16Images.firstChild) {
                    card16Images.removeChild(card16Images.firstChild);
                }
                while (card16Buttons.firstChild) {
                    card16Buttons.removeChild(card16Buttons.firstChild);
                }
                card16popup.style.display = "none";
                drawButton.disabled = false;
                player.playChip();
                if (player.space >= placeArray.length-2) {
                    player.space = placeArray.length-2;
                    player.played[player.played.length-1].space = player.space;
                    exceed = true;
                }
                placeChip(player.played[player.played.length-1]);
                setTimeout(resolve,1000);
            }
        )  
        // blueButtons.appendChild(token);
        // blueButtons.appendChild(number);
        card16Images.appendChild(token);
        card16Images.appendChild(number);
    }
    }
    card16Buttons.appendChild(card16Images);
    })
    
}


function blue1() {
    let player = playerArray[turnIndex];
    let val = player.played[player.played.length-1].value;
    bluePopup.style.display = "inline";
    let skip = document.createElement("button");
    skip.innerHTML = "Skip";
    skip.style.position ='absolute';
    skip.style.top = '50%';
    skip.style.left = '47%'
    // skip.setAttribute("x",500);
    skip.addEventListener("click",
        function() {
            for (let i = 0; i < val; i++) {
                let returnChip = player.played.pop();
                player.bag.push(returnChip);
            }
            while (blueButtons.firstChild) {
                blueButtons.removeChild(blueButtons.firstChild);
            }
            while (blueImages.firstChild) {
                blueImages.removeChild(blueImages.firstChild);
            }
            bluePopup.style.display = "none";
            drawButton.disabled = false;
        }
    )
    blueButtons.appendChild(skip);
    for (let i = 0; i < val; i++) {
        if (player.bag.length > 0) {
        player.draw();
        let chip = player.played[player.played.length-1];
        let array = createChip(chip);
        let token = array[0];
        let number = array[1];
        // console.log()
        token.setAttribute("cx",70*i+31);
        token.setAttribute("cy",50);
        number.setAttribute("x",70*i+23);
        number.setAttribute("y",60);
        token.disabled = true;
        token.addEventListener("click", 
            function() {
                for (let i = 0; i < val; i++) {
                    let returnChip = player.played.pop();
                    player.bag.push(returnChip);
                }
                player.removeFromBag(chip);
                player.played.push(chip);
                // if (sets[0] == 1 && player.played[player.played.length-1].color == "red") {
                //     let redChip = player.played.pop();
                //     player.side.push(redChip);
                //     placeRed(player.side[player.side.length-1]);
                //     updateRedText();
                // }
                // else{

                // }
                while (blueImages.firstChild) {
                    blueImages.removeChild(blueImages.firstChild);
                }
                while (blueButtons.firstChild) {
                    blueButtons.removeChild(blueButtons.firstChild);
                }
                bluePopup.style.display = "none";
                drawButton.disabled = false;
                drawFunction();
            }
        )  
        // blueButtons.appendChild(token);
        // blueButtons.appendChild(number);
        blueImages.appendChild(token);
        blueImages.appendChild(number);
    }
    }
    blueButtons.appendChild(blueImages);
}


async function drawFunction() {
    reviveButton.disabled = true;
    replace.disabled = true;
    let player = playerArray[turnIndex];
    // player.draw();
    player.activateRoundChipAbility();
    if (sets[0] == 1 && player.played[player.played.length-1].color == "red") {
        let redChip = player.played.pop();
        player.side.push(redChip);
        placeRed(player.side[player.side.length-1]);
        updateRedText();
    }
    else{
    player.playChip();
    let bust = false;
    let exceed = false;
    // console.log(player.space);
    // console.log(placeArray);
    
    if (player.space >= placeArray.length-2) {
        player.space = placeArray.length-2;
        player.played[player.played.length-1].space = player.space;
        exceed = true;
    }
    placeChip(player.played[player.played.length-1]);
    }
    // do the after 5 chips thing
    if (player.played[player.played.length-1].color == "white") {
        if (player.revive) {
            reviveButton.disabled = false;
        }
        player.white_sum += player.played[player.played.length-1].value;
        if (player.white_sum == player.played[player.played.length-1].value)
            replace.disabled = false;
    }

    if (player.played.length >=3) {
        endTurnButton.disabled = false;
    }
    if (card == 14 && player.played.length == 5 && !card17used[turnIndex]) {
        console.log("waiting");
        await card17();
    }
    bust = checkBust(player.white_sum,player.white_max);
    updateTable();
    if (bust) {
        bustedTextElement.textContent = "Busted!";
        player.busted = true;
        updateTable();
        drawButton.disabled = true;
        reviveButton.disabled = true;
        setTimeout(turnOver,2000);
    }

    if (exceed) {
        messageElement.textContent = "Max reached!";
        updateTable();
        // player.space = placeArray[placeArray.length-1];
        // player.played[player.played.length-1] = player.space;

        drawButton.disabled = true;
        reviveButton.disabled = true;
        setTimeout(turnOver,2000);
    }
}


endTurnButton.addEventListener('click',
function() {
    // messageElement.textContent = 'Turn over';
    // turnOver();
    popup.style.display = "inline";
});

reviveButton.addEventListener('click',
function() {
    let player = playerArray[turnIndex];
    player.revive = false;
    player.white_sum -= player.played[player.played.length-1].value;
    if (player.played.length >=2) {
        player.space = player.played[player.played.length-2].space;
    }
    else {
        player.space = player.piece+player.rats;
    }
    // player.space -= player.played[player.played.length-1].value;
    let recentChip = player.played.pop();
    recentChip.space = null;
    player.addToBag(recentChip);
    let board = document.getElementById("board");
    board.removeChild(board.lastChild);
    board.removeChild(board.lastChild);
    reviveButton.disabled = true;
    updateTable();
});

continueButton.addEventListener("click", 
    function() {
        continueButton.setAttribute("style","display:none");
        startOver.setAttribute("style","display:none");
        drawButton.setAttribute("style","display:none");
        endTurnButton.setAttribute("style","display:none");
        continueButton.setAttribute("style","display:none");
    }
)

startOver.addEventListener("click",
    function() {
        let player = playerArray[turnIndex];
        player.bag = [...player.bag,...player.played];
            player.played = [];
            player.space = player.piece + player.rats;
            player.coins = 0;
            player.white_sum = 0;
            player.busted = false;
            player.white_max = 8;
            updateTable();
        localStorage.setItem("playerArray",JSON.stringify(playerArray));
        window.location.href = "turn.html";
    }
)

if (card == 23) {
    replace.setAttribute("style","display:inline");
    replace.innerHTML = "Replace white";
    replace.addEventListener("click", 
    function() {
        let player = playerArray[turnIndex];
        if (player.played.length >=2) {
            player.space = player.played[player.played.length-2].space;
        }
        else {
            player.space = player.piece+player.rats;
        }
        // player.space -= player.played[player.played.length-1].value;
        let recentChip = player.played.pop();
        recentChip.space = null;
        player.addToBag(recentChip);
        player.white_sum -= recentChip.value
        let board = document.getElementById("board");
        board.removeChild(board.lastChild);
        board.removeChild(board.lastChild);
        replace.disabled = true;
        replace.setAttribute("style","display:none");
        updateTable();
    }
    )
}


console.log(playerArray);