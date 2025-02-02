let setsString = localStorage.getItem("sets");
let sets = JSON.parse(setsString);
let under = document.getElementById("under");
//sets = [2,1,1,3,0];
// sets[4] = 3;
let cardsString = localStorage.getItem("cards");
let cards = JSON.parse(cardsString);
let round = localStorage.getItem("round");
let card = cards[round-1];
// card = 17;
let cardAbility = document.getElementById("cardAbility");
cardAbility.textContent = "Event card: ";
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
        cardAbility.textContent += "If you end on a scoring space with a sapphire, extra 2 vp";
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
}

displayCard(card);
let piece = document.getElementById("piece");
let revive = document.getElementById("revive");
let skip = document.getElementById("skip");


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
//console.log(purpleCost);

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
        redAbility.textContent = "•Red: Ability Put this token aside. After you have stopped drawing, choose to play or at the end of a future turn";
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
    redAbility.textContent += "(" + redCost[0] + "," + redCost[1] +","  + redCost[2] + ")";
    blueAbility.textContent += "(" + blueCost[0] + "," + blueCost[1] +","  + blueCost[2] + ")";
    greenAbility.textContent += "(" + greenCost[0] + "," + greenCost[1] +","  + greenCost[2] + ")";
    yellowAbility.textContent += "(" + yellowCost[0] + "," + yellowCost[1] +","  + yellowCost[2] + ")";
    
    blackAbility.textContent += "(" + blackCost + ")";
    orangeAbility.textContent += "(" + orangeCost + ")";
    purpleAbility.textContent += "(" + purpleCost + ")";



}

displayAbilities();


function Player(name) {
    this.name = name;
    this.bag = [new Chip("white",1),new Chip("white",1),new Chip("white",1),new Chip("white",1),new Chip("white",2),new Chip("white",2),new Chip("white",3),new Chip("green",1),new Chip("orange",1)]; // need to add to this
    this.played = [];
    this.space = 0;
    this.vp = 0;
    this.coins = 0;
    this.rats = 0;
    this.piece = 0;
    this.white_sum = 0;
    this.white_max = 8;
    this.revive = true;
    this.sapphires = 1;
    this.busted = false;
    this.getCoins = true;
    this.getVP = true;
    this.boughtChipColor = "none";
    this.exempt = false;

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
    this.activateGreenAbility = 
    function() {
        //return new Promise (resolve => {
        //    console.log("hi");
        if (sets[3] == 0) {
            let chips = [];
            if (this.played.length >=2) {
                chips = [this.played[this.played.length-1],this.played[this.played.length-2]];
            }
            let count = 0;
            for (x of chips) {
                if (x.color == "green") {
                    this.sapphires++;
                    count++;
                }
            }
            if (count > 0) {
                under.textContent += this.name + " gained " + count + " sapphire";
            }
            //setTimeout(resolve,1000);
            // for each last, gain sapphire
        }
        else if (sets[3] == 1) {

            let chips = [this.played[this.played.length-1],this.played[this.played.length-2]];
            for (x of chips) {
                if (x.color == "green") {
                    if (x.value == 1) {
                        // console.log("orange worked");
                        this.addToBag(new Chip("orange",1));
                        under.textContent = this.name + " added orange-1 token to bag";
                    }
                    else if (x.value == 2) {
                        // console.log("2 worked");
                        // issue is that this async below is getting run through,
                        // but if it isnt, then there is no resolve
                        async function greenOneTwoAgain() {
                            let player = this;
                            console.log(player);
                            console.log(this.vp);
                            await greenOneTwo(player);
                            setTimeout(resolve,1000);
                        }
                        greenOneTwoAgain();
                    }
                    else if (x.value == 4) {
                        console.log("4 worked");
                        greenOneFour(this);
                    }
                }
            }
            //setTimeout(resolve,1000);
            // for each last or 2nd last, gain bonus chips of choice (ass)
        }
        else if (sets[3] == 2) {
            let greenSum = 0;
            let whiteSum = 0;
            for (chip of this.played) {
                if (chip.color == "green") {
                    greenSum += chip.value;
                }
                else if (chip.color == "white") {
                    whiteSum += chip.value;
                }
            }
            if (whiteSum == 7) {
                this.space += greenSum;
                this.coins = coinArray[this.space+1]
                if (greenSum >0) {
                under.textContent += this.name + " advanced last token " + greenSum + " extra spaces ";
            }
            //setTimeout(resolve,1000);
        }

            //if white exactly 7, double green
            // add animation??
        }
        else if (sets[3] == 3) {
            //wrongggg
            let chips = [this.played[this.played.length-1],this.played[this.played.length-2]];
            for (x of chips) {
                if (x.color == "green") {

                }
            }
            //setTimeout(resolve,2000);
            // for each last or 2nd last, buy for 1 (ass)
        }
    }


    this.activatePurpleAbility = 
    function() {
        if (sets[4] == 0) {
            let purpleCount = 0;
            for (chip of this.played) {
                if (chip.color == "purple") {
                    purpleCount++;
                }
            }
            if (purpleCount == 1) {
                this.vp++;
            }
            else if (purpleCount == 2) {
                this.vp++;
                this.sapphires++;
            }
            else if (purpleCount >=3) {
                this.vp += 2;
                this.piece++;
            }
            // 1,2,3, bonuses 1 vp, vp+ap, 2vp drop
        }
        else if (sets[4] == 1) {
            //exchange for bonuses (ass)
        }
        else if (sets[4] == 2) {
            for (chip of this.played) {
                if (chip.color == "purple") {
                    if (chip.space >= 30) {
                        this.vp += 3;
                    }
                    else if (chip.space >= 20) {
                        this.vp += 2;
                    }
                    else if (chip.space >= 10) {
                        this.vp +=1;
                    }
                }
            }
            // gain vp based on purple space
        }
        else if (sets[4] == 3) {
            
            // WRONGG
            //trade token for better (ass)
        }
    }
}

function Chip(color,value) {
    this.color = color;
    this.value = value;
    this.space = null;
    // need to add things 
}

Player.prototype.removeFromBag =
function(chip) {
    let int;
    for (let i = 0; i < this.bag.length; i++) {
        if (this.bag[i].color == chip.color && this.bag[i].value == chip.value) {
            int = i;
            console.log(i);
        }
    }
    let whiteChip = this.bag.splice(int,1)[0];

}

Player.prototype.removeFromPlayed =
function(chip) {
    let int;
    for (let i = 0; i < this.bag.length; i++) {
        if (this.played[i].color == chip.color && this.played[i].value == chip.value) {
            int = i;
            console.log(i);
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
// const buttonOne = document.getElementById("button1");
// const buttonTwo = document.getElementById("button2");

function addUpgradeablePurple(player,selector,purpleSum) {
    // console.log("hello");
    for (x of player.played) {
        if (x.value !== 4) {
            if (x.color !== "white" && x.color !== "orange" && x.color !== "black" && x.color !== "purple") {
                if (purpleSum == 1) {
                    if (x.value != 2) {
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
                else {
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
}

function purple4(player) {
    under.textContent = player.name + " choose chip to upgrade";
    let purpleCount = 0;
            for (chip of player.played) {
                if (chip.color == "purple") {
                    purpleCount++;
                }
            }

    return new Promise(resolve => 
        {
            if (purpleCount == 0 || sets[4] != 3) {
                under.textContent = "";
                resolve();
            }
            else {
            const selector = document.getElementById("selector");
            selector.setAttribute("style","display:inline");
            let blankOption = document.createElement("option");
            blankOption.value = "";
            blankOption.text = "";
            selector.appendChild(blankOption);
            const done = document.getElementById("doneButton2");
            done.innerHTML = "Done";
            done.setAttribute("style","display:inline");
            addUpgradeablePurple(player,selector,purpleCount);
            
            done.addEventListener("click",
            function() {
                if (selector.value == "") {

                }
                else {
                    let value = parseInt(selector.value.slice(-1));
                    let color = selector.value.slice(0,-1);
                    let newVal;
                    if ((value == 1 && purpleCount < 3) || (value == 1 && purpleCount >= 3 && ((color == "red" && availArray[4] < 1) ||(color == "blue" && availArray[7] < 1) || (color == "yellow" && availArray[10] < 1) || (color == "green" && availArray[13] < 1)))) {
                        newVal = 2;
                    }
                    else {
                        newVal = 4;
                    }
                    player.addToBag(new Chip(color,newVal));
                    //player.bag = [...player.bag,...player.played];
                    player.removeFromBag(new Chip(color,value));
                    //player.played = [];
                }
                selector.setAttribute("style","display:none");
                done.setAttribute("style","display:none");
                while (selector.options.length > 0) {
                    selector.remove(0);
                }
                selector.replaceWith(selector.cloneNode(true));
                done.replaceWith(done.cloneNode(true));
                updateTable();
                under.textContent = "";
                setTimeout(resolve,1000);

        }
    )}}
    )}
function purple1ability(player) {
    under.textContent = player.name + " would you like to exchange purple chips?";
    let purpleCount = 0;
            for (chip of player.played) {
                if (chip.color == "purple") {
                    purpleCount++;
                }
            }
    return new Promise(resolve => {
        if (purpleCount == 0 || sets[4] !=1) {
            under.textContent = "";
            resolve();
        }
        else {
            const selector = document.getElementById("selector");
            selector.setAttribute("style", "display:inline");
            const doneButton = document.getElementById("doneButton");
            doneButton.setAttribute("style","display:inline");
            doneButton.innerHTML = "Done";
            let blankOption = document.createElement("option");
            blankOption.value = "";
            blankOption.text = "";
            selector.appendChild(blankOption);
            for (i = 1; i <4; i++) {
                if (i <= purpleCount) {
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
                    if (selector.value == 1) {
                        player.addToBag(new Chip("black",1));
                        player.vp++;
                        player.sapphires++;
                        player.removeFromPlayed(new Chip("purple",1));
                        
                    }
                    else if (selector.value == 2) {
                        player.addToBag(new Chip("green",1));
                        player.addToBag(new Chip("blue",2));
                        player.vp += 3;
                        player.piece++;
                        player.removeFromPlayed(new Chip("purple",1));
                    }
                    else if (selector.value == 3) {
                        player.addToBag(new Chip("yellow",4));
                        player.vp +=6;
                        player.sapphires++;
                        player.piece += 2;
                        player.removeFromPlayed(new Chip("purple",1));
                        player.removeFromPlayed(new Chip("purple",1));
                        player.removeFromPlayed(new Chip("purple",1));
                    }
                    // player.rats -= parseInt(selector.value);
                    // player.sapphires+= parseInt(selector.value);
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
        }})    
                            
        

}


function greenOneTwoPrelim(player) {
    return new Promise(resolve => {
        // const buttonOnePrime = document.getElementById("button1");
        // buttonOne.replaceWith(buttonOne.cloneNode(true));
        const buttonOne = document.getElementById("button1");
        buttonOne.innerHTML = "Blue-1"
        buttonOne.setAttribute("style","display:inline");
        buttonOne.addEventListener("click", () =>
            {
                player.addToBag(new Chip("blue",1));
                under.textContent = player.name + " added blue-1 token to bag";
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                console.log("hi");
                resolve();
                // setTimeout(() => resolve(),2000);
            },
            {once : true}
        );

        //buttonTwo.replaceWith(buttonTwo.cloneNode(true));
        const buttonTwo = document.getElementById("button2");
        buttonTwo.innerHTML = "Red-1"
        buttonTwo.setAttribute("style","display:inline");
        buttonTwo.addEventListener("click", 
            function() 
                {
                console.log("hi")
                player.addToBag(new Chip("red",1));
                under.textContent = player.name + " added red-1 token to bag";
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve(); 
                   // setTimeout(() => resolve(),2000);
            },
                {once : true}
             );

    });
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
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve(); 
                // setTimeout(() => resolve(),2000);
            },
            {once : true}
        );

    })
}

async function greenOneTwo(player) {
    under.textContent = player.name + ", choose which chip to obtain";
    // await greenOneTwo1(player);
    // console.log("button pressed");
    await greenOneTwoPrelim(player);
    //await Promise.race([greenOneTwo1(player),greenOneTwo2(player)]);
    console.log("pressed");
    // buttonOne.setAttribute("style","display:none");
    // buttonTwo.setAttribute("style","display:none");
}



function greenOneFourPrelim(player) {
    return new Promise(resolve => {
        //buttonOne.replaceWith(buttonOne.cloneNode(true));
        const buttonOne = document.getElementById("button1");
        buttonOne.innerHTML = "Yellow-1"
        buttonOne.setAttribute("style","display:inline");
        buttonOne.addEventListener("click", () =>
            {
                player.addToBag(new Chip("yellow",1));
                under.textContent = player.name + " added yellow-1 token to bag";
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve();
            },
            {once : true}
        );
        const buttonTwo = document.getElementById("button2");
        buttonTwo.innerHTML = "Purple-1"
        buttonTwo.setAttribute("style","display:inline");
        buttonTwo.addEventListener("click", () =>
            {
                player.addToBag(new Chip("purple",1));
                under.textContent = player.name + " added purple-1 token to bag";
                // setTimeout(() => resolve(),2000);
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve();
            },
            {once : true}
        );

    })
}

function greenOneFour2(player) {
    return new Promise(resolve => {
        //buttonTwo.replaceWith(buttonTwo.cloneNode(true));
        const buttonTwo = document.getElementById("button2");
        buttonTwo.innerHTML = "Purple-1"
        buttonTwo.setAttribute("style","display:inline");
        buttonTwo.addEventListener("click", () =>
            {
                player.addToBag(new Chip("purple",1));
                under.textContent = player.name + " added purple-1 token to bag";
                // setTimeout(() => resolve(),2000);
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve();
            },
            {once : true}
        );
        

    })
}

async function greenOneFour(player) {
    under.textContent = player.name + ", choose which chip to obtain";
    await greenOneFourPrelim(player);
    //await Promise.race([greenOneFour1(player),greenOneFour2(player)]);
    // buttonOne.setAttribute("style","display:none");
    // buttonTwo.setAttribute("style","display:none");
}

let roundText = document.getElementById("round");
roundText.textContent = "Round: " + round;

const coinArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,35];
const vpArray = [0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,12,13,13,13,14,14,15];
const sapphireArray = [0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0];

let waiting = false;

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
    player.redOnes = playerData.redOnes;
    player.redTwos = playerData.redTwos;
    player.redFours = playerData.redFours;
    player.side = playerData.side;
    player.purchase = playerData.purchase;

    return player;
}

let playerArrayString = localStorage.getItem("playerArray");
let playerArray = JSON.parse(playerArrayString);
playerArray = playerArray.map(becomePlayer);

let title = document.getElementById("turnIndicator");
let rollButton = document.getElementById("rollButton");
let vpButton = document.getElementById("vpButton");
let coinButton = document.getElementById("coinButton");


let table = document.getElementById("table");
let chipTable = document.getElementById("chipTable");

function initializeTable() {
    for (let i = 0; i < playerArray.length; i++) {
        let row = table.insertRow(); // Insert a new row
        row.style.color = "black";
        row.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
        let cell = [];
        for (let j = 0; j < 11; j++) {
          cell[j] = row.insertCell(); // Insert a new cell
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

initializeTable();
updateTableColor();
initializeChipTable();

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
    }
}

function updateTableColor() {
    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].busted) {
            document.getElementById("table").rows[i+1].style.backgroundColor = "red";
        }
        else{
            document.getElementById("table").rows[i+1].style.backgroundColor = "green";
        }
    }
}

function updateChipTable() {
    for (let i = 0; i < 15; i++) {
        document.getElementById("chipTable").rows[i+1].cells[2].textContent = availArray[i];
    }
}



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



function card17(player) {
    title.textContent = player.name + ", choose any 2-token";
    return new Promise(resolve => {
                    const selector = document.getElementById("selector");
                    const doneButton = document.getElementById("doneButton");
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
    
}

async function cardAbilityEnd(card) {
    if (card == 15) {
        let win = "";
        for (x of playerArray) {
            let whiteSum = 0;
            for (drawn of x.played) {
                if (drawn.color == "white") {
                    whiteSum += drawn.value;
                }
            }
            if (whiteSum == 7) {
                x.piece++;
                win += x.name + " ";
            }
        }
        if (win == "") {
            under.textContent = "No one took advantage of event";
        }
        else {
            under.textContent = win + "moved player piece forward";
        }
        // if exactly 7,move droplet forwards
    }
    else if (card == 16) {
        // if not exploded, draw up to 5, then add 1
    }
    else if (card == 17) {
        for (let i = 0; i < playerArray.length;i++) {
            let player;
            if (playerArray[i].busted) {
                if (i == playerArray.length-1) {
                    player = playerArray[0];
                }
                else {
                    player = playerArray[i+1];
                }
                await card17(player);
            }
        }
        // if exploded, player to left gains any 2-chip
    }
    else if (card == 18) {
        for (x of playerArray) {
            x.revive = true;
        }
        under.textContent = "All revives bought back";
        // all flasks get free refill
    }
    else if (card == 19) {
        let win = "";
        for (x of playerArray) {
            if (sapphireArray[x.space+1] == 1) {
                x.vp += 2;
                win += x.name + " ";
            }
        }
        if (win == "") {
            under.textContent = "No one landed on sapphire space";
        }
        else {
            under.textContent = win + "gained 2 extra victory points";
        }
        // if scoring space with ruby, extra 2 vp
    }
    else if (card == 20) {
        let win = " ";
        for (x of playerArray) {
            if (sapphireArray[x.space+1] == 1) {
                x.sapphires++;
            }
        }
        if (win == "") {
            under.textContent = "No one landed on sapphire space";
        }
        else {
            under.textContent = win + "gained a sapphire";
        }
        // if ruby, extra ruby
    }
    haveAllRollDice();
}

//greenOneTwo(playerArray[0]);

cardAbilityEnd(card);
// setTimeout(haveAllRollDice, 2000);
let square = document.getElementById("roll");
let rollText = document.getElementById("rollText");
let circle = document.getElementById("circle");

function rollDice(player) {
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

}


function resetPlayer(player) {
    player.space = player.piece+player.rats;
    player.rats = 0;
    player.coins = 0;
    player.bag.push(...player.played);
    player.bag = player.bag.map(resetChipSpace);
}

function promptRollDice(i) {
    title.textContent = playerArray[i].name + " gets to roll the die!";
    rollButton.setAttribute("style","display:inline");
    localStorage.setItem("currentPlayerIndex",i);
}


// compare player scores for nonexploders

function haveAllRollDice() {
let spaceArray = playerArray.map(playerArray => playerArray.space);
for (let i = 0; i < spaceArray.length; i++) {
    if (playerArray[i].busted) {
        spaceArray[i] = -1;
    }
}
let maxSpace = Math.max(...spaceArray);

if (maxSpace == -1) {
    title.textContent = "Everyone busted! No one rolls winners dice!";
    setTimeout(greenAction,1000); //IMPORTANT, MUST CHANGE
}
else{

// highest score(s) rolls dice
let winnersIndex = []; 
for (let i = 0; i < playerArray.length; i++) {
    if (spaceArray[i] == maxSpace) {
        winnersIndex.push(i);
        //promptRollDice(i);
    }
}
let counter = 0;
// for (let i = 0; i < winnersIndex.length; i++) {
//     promptRollDice(winnersIndex[i]);
// }

promptRollDice(winnersIndex[counter])

function clearDice() {
    square.setAttribute("style","display:none");
    circle.setAttribute("style","display:none");
    rollText.setAttribute("style","display:none");
}

rollButton.addEventListener("click",
    function() {
        //let i = localStorage.getItem("currentPlayerIndex");
        //i = parseInt(i);
        let player = playerArray[winnersIndex[counter]];
        rollDice(player);
        if (card == 21) {
            rollDice(player);
            // need to figure out how to add visualization again
        }
        
        updateTable();

        rollButton.setAttribute("style","display:none");
        setTimeout(clearDice,2000);
        if (counter == winnersIndex.length-1) {
            setTimeout(greenAction,2000);
        }
        else {
            counter++;
            promptRollDice(winnersIndex[counter])
        }
    }
)
}
}
//setTimeout(haveAllRollDice,2000);

console.log(playerArray);
function buyOneSapphirePrelim(player) {
    return new Promise (resolve =>{
        const buttonOne = document.getElementById("button1");
        buttonOne.innerHTML = "Buy"
        buttonOne.setAttribute("style","display:inline");
        buttonOne.addEventListener("click", () =>
            {
                player.piece++;
                player.sapphires--;
                under.textContent = player.name + " advanced player piece";
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve();
            },
            {once : true}
        );
        const buttonTwo = document.getElementById("button2");
        buttonTwo.innerHTML = "Don't buy"
        buttonTwo.setAttribute("style","display:inline");
        buttonTwo.addEventListener("click", () =>
            {
                buttonOne.setAttribute("style","display:none");
                buttonTwo.setAttribute("style","display:none");
                buttonOne.replaceWith(buttonOne.cloneNode(true));
                buttonTwo.replaceWith(buttonTwo.cloneNode(true));
                resolve();
            

    })
})};

async function buyOneSapphire(player) {
    under.textContent = player.name + ", would you like to spend 1 sapphire to advance droplet?";
    await buyOneSapphirePrelim(player);
}

async function waitGreen(playerArray) {
    console.log(playerArray);
    for (let i =0; i < playerArray.length; i++ ){
        let player = playerArray[i];
        //console.log(player.bag);
        if (sets[3] == 0 || sets[3]==2){
            await player.activateGreenAbility();
        }
        else {
            await player.activateGreenAbility();
            if (sets[3] == 1) {
                //console.log(player.played);
                let chips = [player.played[player.played.length-1],player.played[player.played.length-2]];
                for (x of chips) {
                    if (x.color == "green") {
                        if (x.value == 1) {
                            console.log("orange worked");
                            player.addToBag(new Chip("orange",1));
                            under.textContent = player.name + " added orange-1 token to bag";
                        }
                        else if (x.value == 2) {
                            console.log("2 worked");
                            console.log(player.bag);
                            // issue is that this async below is getting run through,
                            // but if it isnt, then there is no resolve
                            await greenOneTwo(player);
                            console.log(player.bag);
                        }
                        else if (x.value == 4) {
                            console.log("4 worked");
                            await greenOneFour(player);
                        }
                    }
                }
        }
        else if (sets[3] == 3) {

            let chips = [player.played[player.played.length-1],player.played[player.played.length-2]];
            for (x of chips) {
                if (x.color == "green") {
                    if (player.sapphires >0) {
                    await buyOneSapphire(player);
                    }
                }
            }
            //setTimeout(resolve,2000);
            // for each last or 2nd last, buy for 1 (ass)
        }

    }
    // console.log("hello");
    //console.log(player.bag);
    updateTable();
}
    console.log(playerArray);
    setTimeout(blackAction,2000);

};

//console.log(playerArray);

// green action
function greenAction() {
    title.textContent = "Green token action";
    under.textContent = "";
    // for (player of playerArray) {
    //     waitGreen(player);
    //     //player.activateGreenAbility();
    // }
    waitGreen(playerArray);
    //setTimeout(blackAction,2000);
}

//console.log(playerArray);
//black action
function blackAction() {
    title.textContent = "Black token action";
    under.textContent = "";
    let blackArray = [];
    if (playerArray.length >2) {
    for (let i = 0; i< playerArray.length;i++) {
        let blackSum = 0;
        for (chip of playerArray[i].played) {
            if (chip.color == "black") {
                blackSum++;
            }
        }
        blackArray[i+1] = blackSum;
    }
    blackArray[0] = blackArray[playerArray.length];
    blackArray[playerArray.length+1] = blackArray[1];
    console.log(blackArray);
    console.log(playerArray);
    for (let i = 0; i < playerArray.length;i++) {
        if (blackArray[i+1] >blackArray[i] && blackArray[i+1]> blackArray[i+2]) {
            playerArray[i].piece++;
            playerArray[i].sapphires++;
            under.textContent += playerArray[i].name + " advanced player piece and gained a sapphire";
        }
        else if (blackArray[i+1] >blackArray[i] || blackArray[i+1]> blackArray[i+2]) {
            playerArray[i].piece++;
            under.textContent += playerArray[i].name + " advanced player piece";
        }
    }
    }
    else if (playerArray.length == 2) {
        for (let i = 0; i< playerArray.length;i++) {
            let blackSum = 0;
            for (chip of playerArray[i].played) {
                if (chip.color == "black") {
                    blackSum++;
                }
            }
            blackArray[i] = blackSum;
        }
        if ((blackArray[0] > 0) || (blackArray[1] > 0)) {
        if (blackArray[0] > blackArray[1]) {
            playerArray[0].piece++;
            playerArray[0].sapphire++;
        }
        else if (blackArray[0] == blackArray[1]) {
            playerArray[0].piece++;
            playerArray[1].piece++;
        }
        else {
            playerArray[1].piece++;
            playerArray[1].sapphire++;
        }
    }
    }
    setTimeout(purpleAction,2000);
}
//purple action
async function purpleAction() {
    title.textContent = "Purple token action";
    under.textContent = "";
    for (let i = 0; i <playerArray.length; i++) {
        let player = playerArray[i];
        player.activatePurpleAbility();
        await purple1ability(player);
        await purple4(player);
        updateTable();
    }
    setTimeout(gainSapphires,2000);
}

// gain sapphires if on a sapphire space
function gainSapphires() {
    let playerList = "";
    for (let i = 0; i < playerArray.length; i++) {
        if (sapphireArray[playerArray[i].space+1] == 1){
            playerList += playerArray[i].name + " ";
            playerArray[i].sapphires++;
        }
    } 
    if (playerList == "") {
        title.textContent = "Nobody landed on a sapphire space!";
    }
    else {
        title.textContent = playerList + "gained one sapphire!";
    }
    if (round == 9) {
        for (player of playerArray) {
            if (player.busted) {
                let exempt = false;
            if (sets[1] == 1) {
                let blueCount = [];
                let j = 0;
                for (let i = player.played.length -1; i > player.played.length -6; i--) {
                    if (player.played[i].color == "blue") {
                        blueCount[j] = player.played[i].value;
                    }
                    else {
                        blueCount[j] = 0;
                    }
                    j++;
                }
                console.log(blueCount);
                for (let i = 0; i<blueCount.length;i++) {
                    if (blueCount[i] >= i && blueCount[i]>0) {
                        //console.log("This is working");
                        exempt = true;
                        
                    }
                }
                if (!exempt) {
                player.coins = 0;
                }
            }
            player.getCoins = false;
        }
    }
        setTimeout(addVP,2000);
    
    }   
    else {
        setTimeout(chooseVPCoin,2000);
    }
    
}

// bot section



function crudeVpOrCoins(round) {
    // for vp, not coins
    if (round < 5) {
        return false
    }
    else {
        return true
    }
}

function continueOnToChoice(counter) {
    if (counter == busted.length-1) {
        buyChips();
    }
    else {
        counter++;
        localStorage.setItem("counter",counter)
        console.log(busted[counter])
        promptChoice(busted[counter],counter)
    }
}

function promptChoice(player,counter) {
    title.textContent = player.name + ", choose VP or coins for this round";
    under.textContent = ""
    console.log(counter)
    // vpButton.setAttribute("style","display:inline");
    // coinButton.setAttribute("style","display:inline");
    if (player.type == "bot") {
        choice = crudeVpOrCoins(round)
        console.log(choice)
        vpButton.setAttribute("style","display:none");
        coinButton.setAttribute("style","display:none");
        if (choice) {
            player.getCoins = false;
            under.textContent = player.name + " chooses vp this round"
        }
        else {
            player.getVP = false;
            under.textContent = player.name + " chooses coins this round"
        }
        setTimeout(continueOnToChoice,2000,counter)
    }
    else{
        vpButton.setAttribute("style","display:inline");
        coinButton.setAttribute("style","display:inline");
    }
    //localStorage.setItem("currentPlayerIndex",i);
}

// decide on vp or coins if exploded
function chooseVPCoin() {
    busted = []
    for (let player of playerArray) {
        if (player.busted) {
            let exempt = false;
            if (sets[1] == 1) {
                let blueCount = [];
                let j = 0;
                let k = Math.max(player.played.length-6,0);
                for (let i = player.played.length -1; i >= k; i--) {
                    if (player.played[i].color == "blue") {
                        blueCount[j] = player.played[i].value;
                    }
                    else {
                        blueCount[j] = 0;
                    }
                    j++;
                }
                console.log(blueCount);
                for (let i = 0; i<blueCount.length;i++) {
                    if (blueCount[i] >= i && blueCount[i]>0) {
                        //console.log("This is working");
                        exempt = true;
                        
                    }
                    else{
                        //busted.push(player);
                    }
                }
            }
            console.log(exempt);
            if (!exempt) {
                busted.push(player);
            }
        }
    }
    console.log(busted);
    let counter = 0;
    localStorage.setItem("counter",counter)
// for (let i = 0; i < winnersIndex.length; i++) {
//     promptRollDice(winnersIndex[i]);
// }
    if (busted.length == 0) {
        buyChips();
    }
    else{
    promptChoice(busted[counter],counter)
}


vpButton.addEventListener("click",
    function() {
        let counter = localStorage.getItem("counter")
        let player = busted[counter];
        console.log(counter)
        console.log(player.name + " got vp")
        player.getCoins = false;
        vpButton.setAttribute("style","display:none");
        coinButton.setAttribute("style","display:none");
        if (counter == busted.length-1) {
            buyChips();
        }
        else {
            counter++;
            localStorage.setItem("counter",counter)
            promptChoice(busted[counter],counter)
        }
    }
)

coinButton.addEventListener("click",
    function() {
        let counter = localStorage.getItem("counter")
        let player = busted[counter];
        console.log(player.name + " got coins")
        player.getVP = false;
        vpButton.setAttribute("style","display:none");
        coinButton.setAttribute("style","display:none");
        if (counter == busted.length-1) {
            buyChips();
        }
        else {
            counter++;
            localStorage.setItem("counter",counter)
            promptChoice(busted[counter],counter)
        }
    }
)

}




let allCost = [...greenCost,...blueCost,...redCost];
let minCost = Math.min(allCost);

let orangeButton = document.getElementById("orangeButton");
let blackButton = document.getElementById("blackButton");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");
let purpleButton = document.getElementById("purpleButton");

let orange1 = document.getElementById("orange1");
let black1 = document.getElementById("black1");
let red1 = document.getElementById("red1");
let red2 = document.getElementById("red2");
let red4 = document.getElementById("red4");
let green1 = document.getElementById("green1");
let green2 = document.getElementById("green2");
let green4 = document.getElementById("green4");
let blue1 = document.getElementById("blue1");
let blue2 = document.getElementById("blue2");
let blue4 = document.getElementById("blue4");
let yellow1 = document.getElementById("yellow1");
let yellow2 = document.getElementById("yellow2");
let yellow4 = document.getElementById("yellow4");
let purple1 = document.getElementById("purple1");
let back = document.getElementById("back");

let cost1 = document.getElementById("cost1");
let cost2 = document.getElementById("cost2");
let cost4 = document.getElementById("cost4");



function clearBuying() {
    cost1.setAttribute("style","display:none");
    cost2.setAttribute("style","display:none");
    cost4.setAttribute("style","display:none");
    back.setAttribute("style","display:none");
    orange1.setAttribute("style","display:none");
    black1.setAttribute("style","display:none");
    red1.setAttribute("style","display:none");
    red2.setAttribute("style","display:none");
    red4.setAttribute("style","display:none");
    green1.setAttribute("style","display:none");
    green2.setAttribute("style","display:none");
    green4.setAttribute("style","display:none");
    blue1.setAttribute("style","display:none");
    blue2.setAttribute("style","display:none");
    blue4.setAttribute("style","display:none");
    yellow1.setAttribute("style","display:none");
    yellow2.setAttribute("style","display:none");
    yellow4.setAttribute("style","display:none");
    purple1.setAttribute("style","display:none");


    orangeButton.setAttribute("style","display:none");
    blackButton.setAttribute("style","display:none");
    redButton.setAttribute("style","display:none");
    greenButton.setAttribute("style","display:none");
    blueButton.setAttribute("style","display:none");
    yellowButton.setAttribute("style","display:none");
    purpleButton.setAttribute("style","display:none");
}

function promptBuying(buyers) {
    let counter = parseInt(localStorage.getItem("counter"));
    let player = buyers[counter];
    let coins = player.coins;

    if (player.type == "bot") {
        title.textContent = player.name + " purchased "
        for (let i = 0; i < player.purchase.length; i++) {
            player.addToBag(player.purchase[i])
            title.textContent += player.purchase[i].color + "-" + player.purchase[i].value + " "

        }
        setTimeout(nextBuyer, 2000, buyers, counter)
    }
    else {
    title.textContent = player.name + ", which color chip would you like to purchase?";
    under.textContent = player.coins + " coins available";

    cost1.setAttribute("style","display:none");
    cost2.setAttribute("style","display:none");
    cost4.setAttribute("style","display:none");
    back.setAttribute("style","display:none");
    orange1.setAttribute("style","display:none");
    black1.setAttribute("style","display:none");
    red1.setAttribute("style","display:none");
    red2.setAttribute("style","display:none");
    red4.setAttribute("style","display:none");
    green1.setAttribute("style","display:none");
    green2.setAttribute("style","display:none");
    green4.setAttribute("style","display:none");
    blue1.setAttribute("style","display:none");
    blue2.setAttribute("style","display:none");
    blue4.setAttribute("style","display:none");
    yellow1.setAttribute("style","display:none");
    yellow2.setAttribute("style","display:none");
    yellow4.setAttribute("style","display:none");
    purple1.setAttribute("style","display:none");


    orangeButton.setAttribute("style","display:inline");
    blackButton.setAttribute("style","display:inline");
    redButton.setAttribute("style","display:inline");
    greenButton.setAttribute("style","display:inline");
    blueButton.setAttribute("style","display:inline");
    yellowButton.setAttribute("style","display:inline");
    purpleButton.setAttribute("style","display:inline");
    
    orangeButton.disabled = false;
    blackButton.disabled = false;
    redButton.disabled = false;
    greenButton.disabled = false;
    blueButton.disabled = false;
    yellowButton.disabled = false;
    purpleButton.disabled = false;

    cost1.setAttribute("style", "display:none");
    cost2.setAttribute("style","display:none");
    cost4.setAttribute("style","display:none");

    if (round == 1) {
        purpleButton.disabled = true;
        yellowButton.disabled = true;
    }
    if (round == 2 || player.boughtChipColor == "purple" || availArray[14] < 1) {
        purpleButton.disabled = true;
    }

    if (coins < blackCost || player.boughtChipColor == "black" || availArray[1] < 1) {
        blackButton.disabled = true;
    }
    if (coins < orangeCost || player.boughtChipColor == "orange" || availArray[0] < 1) {
        orangeButton.disabled = true;
    }
    if (coins < Math.min(...redCost) || player.boughtChipColor == "red" || (availArray[2] < 1 && coins < redCost[1]) || (availArray[2] < 1 && availArray[3] < 1 && coins < redCost[2]) || (availArray[2] < 1 && availArray[3] <1 && availArray[4]<1)){
        redButton.disabled = true;
    }
    if (coins < Math.min(...greenCost) || player.boughtChipColor == "green" || (availArray[11] < 1 && coins < greenCost[1]) || (availArray[11] < 1 && availArray[12] < 1 && coins < greenCost[2]) || (availArray[11] < 1 && availArray[12] <1 && availArray[12]<1)){
        greenButton.disabled = true;
    }
    if (coins < Math.min(...blueCost) || player.boughtChipColor == "blue" || (availArray[5] < 1 && coins < blueCost[1]) || (availArray[5] < 1 && availArray[6] < 1 && coins < blueCost[2]) || (availArray[5] < 1 && availArray[6] <1 && availArray[7]<1)){
        blueButton.disabled = true;
    }
    if (coins < Math.min(...yellowCost) || player.boughtChipColor == "yellow" || (availArray[8] < 1 && coins < yellowCost[1]) || (availArray[8] < 1 && availArray[9] < 1 && coins < yellowCost[2]) || (availArray[8] < 1 && availArray[9] <1 && availArray[10]<1)){
        yellowButton.disabled = true;
    }
    if (coins < purpleCost || availArray[13] < 1){
        purpleButton.disabled = true;
    }
    if (orangeButton.disabled && blackButton.disabled && redButton.disabled && blueButton.disabled && greenButton.disabled && purpleButton.disabled && yellowButton.disabled) {
        nextBuyer(buyers,counter);
    }
    }
}

function nextBuyer(buyers,counter) {
    counter++;
    if (counter < buyers.length) {
        localStorage.setItem("counter", counter);
        promptBuying(buyers,counter);
    }
    else {
        clearBuying();
        addVP();
    }
}

let counter = 0;
localStorage.setItem("counter",counter);

// buy chips if not final round
function buyChips() {
    let buyers = [];
    for (player of playerArray) {
        if (player.getCoins) {
            buyers.push(player);
        }
    }

    if (buyers.length == 0) {
        clearBuying();
        addVP();
    }
    else{
        promptBuying(buyers, counter);
}


orangeButton.addEventListener("click",
    function() {
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        back.setAttribute("style","display:inline");
        orange1.setAttribute("style","display:inline");
        cost2.setAttribute("style","display:inline");
        cost2.textContent = orangeCost + " coins";
    }
)

blackButton.addEventListener("click",
    function() {
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        back.setAttribute("style","display:inline");
        black1.setAttribute("style","display:inline");
        cost2.setAttribute("style","display:inline");
        cost2.textContent = blackCost + " coins";
    }
)
redButton.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let coins = buyers[counter].coins;
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        red1.setAttribute("style","display:inline");
        red2.setAttribute("style","display:inline");
        red4.setAttribute("style","display:inline");
        back.setAttribute("style","display:inline");
        cost1.setAttribute("style","display:inline");
        cost1.textContent = redCost[0] + " coins";
        cost2.setAttribute("style","display:inline");
        cost2.textContent = redCost[1] + " coins";
        cost4.setAttribute("style","display:inline");
        cost4.textContent = redCost[2] + " coins";
        if (coins < redCost[2] || availArray[4] < 1) {
            red4.disabled = true;
        }
        else {
            red4.disabled = false;
        }
        if (coins < redCost[1] || availArray[3] < 1) {
            red2.disabled = true;
        }
        else{
            red2.disabled = false;
        }
        if (availArray[2] < 1) {
            red1.disabled = true;
        }  
        else {
            red1.disabled = false;
        }
    }
)

greenButton.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let coins = buyers[counter].coins;
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        green1.setAttribute("style","display:inline");
        green2.setAttribute("style","display:inline");
        green4.setAttribute("style","display:inline");
        back.setAttribute("style","display:inline");
        cost1.setAttribute("style","display:inline");
        cost1.textContent = greenCost[0] + " coins";
        cost2.setAttribute("style","display:inline");
        cost2.textContent = greenCost[1] + " coins";
        cost4.setAttribute("style","display:inline");
        cost4.textContent = greenCost[2] + " coins";
        if (coins < greenCost[2] || availArray[13] < 1) {
            green4.disabled = true;
        }
        else {
            green4.disabled = false;
        }
        if (coins < greenCost[1] || availArray[12] < 1) {
            green2.disabled = true;
        }
        else{
            green2.disabled = false;
        }
        if (availArray[11] < 1) {
            green1.disabled = true;
        }  
        else {
            green1.disabled = false;
        }
    }
)
blueButton.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let coins = buyers[counter].coins;
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        blue1.setAttribute("style","display:inline");
        blue2.setAttribute("style","display:inline");
        blue4.setAttribute("style","display:inline");
        cost1.setAttribute("style","display:inline");
        back.setAttribute("style","display:inline");
        cost1.textContent = blueCost[0] + " coins";
        cost2.setAttribute("style","display:inline");
        cost2.textContent = blueCost[1] + " coins";
        cost4.setAttribute("style","display:inline");
        cost4.textContent = blueCost[2] + " coins";
        if (coins < blueCost[2] || availArray[7] < 1) {
            blue4.disabled = true;
        }
        else {
            blue4.disabled = false;
        }
        if (coins < blueCost[1] || availArray[6] < 1) {
            blue2.disabled = true;
        }
        else{
            blue2.disabled = false;
        }
        if (availArray[5] < 1) {
            blue1.disabled = true;
        }  
        else {
            blue1.disabled = false;
        }
    }
)
yellowButton.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let coins = buyers[counter].coins;
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");
        yellow1.setAttribute("style","display:inline");
        yellow2.setAttribute("style","display:inline");
        yellow4.setAttribute("style","display:inline");
        back.setAttribute("style","display:inline");
        cost1.setAttribute("style","display:inline");
        cost1.textContent = yellowCost[0] + " coins";
        cost2.setAttribute("style","display:inline");
        cost2.textContent = yellowCost[1] + " coins";
        cost4.setAttribute("style","display:inline");
        cost4.textContent = yellowCost[2] + " coins";
        if (coins < yellowCost[2] || availArray[10] < 1) {
            yellow4.disabled = true;
        }
        else {
            yellow4.disabled = false;
        }
        if (coins < yellowCost[1] || availArray[9] < 1) {
            yellow2.disabled = true;
        }
        else{
            yellow2.disabled = false;
        }
        if (availArray[8] < 1) {
            yellow1.disabled = true;
        }
        else {
            yellow1.disabled = false;
        }
    }
)
purpleButton.addEventListener("click",
    function() {
        orangeButton.setAttribute("style", "display:none");
        blackButton.setAttribute("style","display:none");
        redButton.setAttribute("style","display:none");
        greenButton.setAttribute("style","display:none");
        blueButton.setAttribute("style","display:none");
        yellowButton.setAttribute("style","display:none");
        purpleButton.setAttribute("style","display:none");

        purple1.setAttribute("style","display:inline");
        back.setAttribute("style","display:inline");
        cost2.setAttribute("style","display:inline");
        cost2.textContent = purpleCost + " coins";
    }
)

orange1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("orange",1));
        player.coins -= orangeCost;
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "orange";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
black1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        //console.log(counter);
        player.addToBag(new Chip("black",1));
        player.coins -= blackCost;
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "black";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
purple1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("purple",1));
        player.coins -= purpleCost;
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "purple";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
red1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("red",1));
        player.coins -= redCost[0];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "red";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
red2.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("red",2));
        player.coins -= redCost[1];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor ="red";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
red4.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("red",4));
        player.coins -= redCost[2];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "red";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
green1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("green",1));
        player.coins -= greenCost[0];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "green";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
green2.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("green",2));
        player.coins -= greenCost[1];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "green";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
green4.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("green",4));
        player.coins -= greenCost[2];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "green";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
blue1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("blue",1));
        player.coins -= blueCost[0];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "blue";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
blue2.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("blue",2));
        player.coins -= blueCost[1];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "blue";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
blue4.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("blue",4));
        player.coins -= blueCost[2];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "blue";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
yellow1.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("yellow",1));
        player.coins -= yellowCost[0];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "yellow";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
yellow2.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("yellow",2));
        player.coins -= yellowCost[1];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "yellow";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)
yellow4.addEventListener("click",
    function() {
        let counter = parseInt(localStorage.getItem("counter"));
        let player = buyers[counter];
        player.addToBag(new Chip("yellow",4));
        player.coins -= yellowCost[2];
        if (player.boughtChipColor == "none") {
            player.boughtChipColor = "yellow";
            promptBuying(buyers,counter);
        }
        else {
            nextBuyer(buyers,counter);
        }
    }
)

back.addEventListener("click",
    function() {
        promptBuying(buyers);
    }
)
}

// add vp
function addVP() {
    title.textContent = "VP added!";
    under.textContent = "";
    for (let i = 0; i<playerArray.length;i++) {
        let player = playerArray[i];
        if (player.getVP) {
            player.vp += vpArray[player.space+1];
            updateTable();
        }
    }
    setTimeout(paySapphires,2000);
}


//give option to each player to pay to increase droplet or refill revive



function promptPayment() {
    let counter = parseInt(localStorage.getItem("counter"));
    console.log(counter);
    let player = playerArray[counter];
    if (player.sapphires <2) {
        counter++;
        console.log(counter);
        if (counter < playerArray.length) {
            localStorage.setItem("counter",counter);
            promptPayment();
        }
        else {
            clearPayment();
            resetRound();
        }
    }
    else {
        console.log(player);
    title.textContent = player.name + ", would you like to spend 2 sapphires to advance piece or buy back revive";
    under.textContent = player.sapphires + " sapphires available";
    piece.setAttribute("style","display: inline");
    skip.setAttribute("style","display: inline");
    revive.setAttribute("style","display: inline");
    if (player.revive) {
        revive.disabled = true;
    }
    else {
        revive.disabled = false;
    }
}
}

piece.addEventListener("click",
    function() {
        let counter = localStorage.getItem("counter");
        let player = playerArray[counter];
        player.sapphires -= 2;
        player.piece += 1;
        promptPayment();
    }
)

revive.addEventListener("click",
    function() {
        let counter = localStorage.getItem("counter");
        let player = playerArray[counter];
        player.sapphires -= 2;
        player.revive = true;
        promptPayment();
    }
)

skip.addEventListener("click",
    function() {
        let counter = localStorage.getItem("counter");
        counter++;
        if (counter < playerArray.length) {
            localStorage.setItem("counter",counter);
            promptPayment();
        }
        else {
            clearPayment();
            if (round == 5) {
                addWhiteChip();
            }
            else {
                clearPayment();
                resetRound();
            }
        }
    }
)



function clearPayment() {
    piece.setAttribute("style","display:none");
    revive.setAttribute("style","display:none");
    skip.setAttribute("style","display:none");
}

function paySapphires() {
    localStorage.setItem("counter",0);
    promptPayment();
}
// if 6th turn, add white-1 chip
function addWhiteChip() {
    title.textContent = "White-1 token added to everyone's bag";
    for (player of playerArray) {
        player.addToBag(new Chip("white",1));
    }
    setTimeout(resetRound,2000);
}

// do the rat tails calculation (ugh)
function calcRats() {
    let ratTails = [ 1, 4, 7, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 51,
                54, 57, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98 ];
    ratArray = [];
    for (let i = 0; i < playerArray.length; i++) {
        for (let j = 0; j < ratTails.length; j++) {
            if (ratTails[j] > playerArray[i].vp) {
                ratArray[i] = j + 1;
                break;
            }
        }
    }
    let max = Math.max(...ratArray);
    ratArray = ratArray.map(ratArray => ratArray - max);
    ratArray = ratArray.map(ratArray => -1 * ratArray);

    for (let i = 0; i < playerArray.length; i++) {
        playerArray[i].rats = ratArray[i];
        if (ratArray[i] == -0) {
            playerArray[i].rats = 0;
        }
    }

    
}
console.log(round);
function determineWinner() {
    let i = 0;  
    for (player of playerArray) {
            if (player.getCoins) {
                player.vp += Math.floor(player.coins/5);
                console.log(player.vp);
            }
            player.vp += Math.floor(player.sapphires/2);
            vpArray[i] == player.vp;
            updateTable();
            i++;
        }
    
    let vp = [];
    let winners = "";
    for (let i = 0; i < playerArray.length; i++) {
        vp[i] = playerArray[i].vp;
    }
    let maxVP = Math.max(...vp);
    let winnerArray = [];
    for (player of playerArray) {
        if (player.vp == maxVP) {
            winnerArray.push(player);
        }
    }
    if (winnerArray.length >1) {
        let spaces = [];
        for (let i = 0; i < winnerArray.length; i++) {
            spaces[i] = winnerArray[i].space;
        }
        let farthest = Math.max(...spaces);
        for (player of winnerArray) {
            if (player.space == farthest) {
                winners += player.name+ " ";
            }
        }
    }
    else {
        winners = winnerArray[0].name + " ";
    }
    title.textContent = winners + "wins!";
}

// re-initialize everything if not final round (in here adjust playerArray order)
function resetRound() {
    if (round == 9) {
        // // determine winner
        // let i = 0;
        // let vpArray = [];
        // let winners = "";
        // for (player of playerArray) {
        //     if (player.getCoins) {
        //         player.vp += player.coins/5;
        //     }
        //     player.vp += player.sapphires/2;
        //     vpArray[i] == player.vp;
        //     updateTable(i);
        //     i++;
        // }

        // let maxVP = Math.max(...vpArray);
        // let winnersArray = [];
        // for (player of playerArray) {
        //     if (player.vp == maxVP) {
        //         winnersArray.push(player);
        //     }
        // }

        // if (winnersArray.length >1) {
        //     let spaces = [];
        //     for (player of winnersArray) {
        //         spaces.push(player.space);
        //     }
        //     let maxSpace = Math.max(...spaces);

        //     for (player of winnersArray) {
        //         if (player.space == maxSpace) {
        //             winners += player.name + " ";
        //         }
        //     }
        // }
        // winners += " wins!";
        // turnIndicator.textContent = winners;
        // under.textContent = "";
        determineWinner();
        console.log("game over");
    }
    else {
        calcRats();
        for (player of playerArray) {
            player.bag = [...player.bag,...player.played];
            player.played = [];
            player.space = player.piece + player.rats;
            player.coins = 0;
            player.white_sum = 0;
            player.busted = false;
            player.white_max = 8;
        }
        updateTable();
        let first = playerArray.shift();
        playerArray.push(first);
        localStorage.setItem("playerArray",JSON.stringify(playerArray));
        round++;
        localStorage.setItem("availArray",JSON.stringify(availArray));
        localStorage.setItem("round",round);
        window.location.href = "turn.html";
    }
}