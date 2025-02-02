function selectChipsToBuy(array) {
    // required only for secondary part
    array; // array of arrays which includes each possible combination for purchase
    let x;
    for (x of array) {
        let set = array[i]
    }

}

function scoreBag(bag) {
    // required only for secondary part
    // inputs bag and calculates the average value of victory points based on the play of the bot

}

function continueOrNot(bag, player) {
    let currentScore = spaceToScore(player.space)
    let probability = 1/bag.length
    let expectedScore = 0;
    for (chip of bag) {
        score = scoreChip(chip, sets, whiteSum,whiteMax)
        expectedScore += probability * score
    }

    if (expectedScore >= currentScore) {
        return true
    }
    else {
        return false
    }
}

// this.space += this.played[this.played.length-1].value;
// this.played[this.played.length-1].space = this.space;

function scoreChip(chip, sets, whiteSum, whiteMax, player) {
    player.played.push(chip)
    player.activateRoundChipAbility();
    player.playChip()

    let busted = false
    if ((chip.color == "white") && (whiteSum + chip.value >= whiteMax)) {
        busted = true
    }

    let tempSpace = player.space


    player.played.pop()
    player.playChip()

    score = spaceToScore(tempSpace, busted)
    return score
}

function spaceToScore(space, busted) {
    let coins = coinArray[space+1];
    let vp = vpArray[space+1];
    let saph = sapphireArray[space+1];
    
    let total
    if (busted) {
        let total1 = 0.2*coins+0.5*saph
        let total2 = vp + 0.5*saph
        total = Math.max(total1,total2)
    }

    total = 0.2*coins + vp + 0.5*saph
    return total
}



function sortedChipArray(costArray) {
    let arrayOrder = [Chip("orange",1), Chip("black",1), Chip("red",1),Chip("red",2),Chip("red",4), Chip("blue",1),Chip("blue",2),Chip("blue",4), Chip("yellow",1),Chip("yellow",2),Chip("yellow",4), Chip("green",1),Chip("green",2),Chip("green",4), Chip("purple",1)]
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

function allPossibleChipPurchases(budget, sortedBuyArray, sortedCostArray) {
    let possiblePurchases = []
    for (let i = 0; i < sortedCostArray.length-1; i++) {
        if(sortedCostArray[i] <= budget) {
            if (budget-sortedCostArray[i] >= 3) {
                for (let j = i+1; j < sortedCostArray.length; j++) {
                    if ((sortedBuyArray[i].color != sortedBuyArray[j].color) && (sortedCostArray[i] + sortedCostArray[j] <= budget)) {
                        possiblePurchases.push([sortedCostArray[i],sortedCostArray[j]])
                    }
                }
            }
            else {
                possiblePurchases.push([sortedCostArray[i]])
            }
        }
    }
}

function simulateRound(bag) {
    // needs to happen on Turn.js page
    // send purchase info to endTurn page

    // ensure that the simulated round starts like a normal round and merely does the bot gameplay using the bag as one of the possible bags
    
}