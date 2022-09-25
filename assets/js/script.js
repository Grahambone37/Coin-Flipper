let totalClicks = 0

let oneTotal = 0
let twoTotal = 0
let threeTotal = 0
let fourTotal = 0
let fiveTotal = 0
let sixTotal = 0

let onePercentage = 0
let twoPercentage = 0
let threePercentage = 0
let fourPercentage = 0
let fivePercentage = 0
let sixPercentage = 0

let result = 0

document.addEventListener('DOMContentLoaded', function () {

    let ones = document.querySelector('#ones')
    let twos = document.querySelector('#twos')
    let threes = document.querySelector('#threes')
    let fours = document.querySelector('#fours')
    let fives = document.querySelector('#fives')
    let sixes = document.querySelector('#sixes')

    let onePercent = document.querySelector('#one-percentage')
    let twoPercent = document.querySelector('#two-percentage')
    let threePercent = document.querySelector('#three-percentage')
    let fourPercent = document.querySelector('#four-percentage')
    let fivePercent = document.querySelector('#five-percentage')
    let sixPercent = document.querySelector('#six-percentage')

    let diceImage = document.querySelector('#dice-image')
    let roll = document.querySelector('#roll')
    let statusMessage = document.querySelector('.message-container')

    roll.addEventListener('click', function(){
        totalClicks ++
        
        result = Math.ceil((Math.random()) * 6)

        if (result == 1) {
            oneTotal ++

            diceImage.src = "./assets/images/dice/dice1.png"
            statusMessage.textContent = "You Rolled A One!"

            ones.textContent = `${oneTotal}`
        } else if (result == 2) {
            twoTotal ++
            
            diceImage.src = "./assets/images/dice/dice2.png"
            statusMessage.textContent = "You Rolled A Two!"
            
            twos.textContent = `${twoTotal}`
        } else if (result == 3) {
            threeTotal ++
            
            diceImage.src = "./assets/images/dice/dice3.png"
            statusMessage.textContent = "You Rolled A Three!"
            
            threes.textContent = `${threeTotal}`
        } else if (result == 4) {
            fourTotal ++
            
            diceImage.src = "./assets/images/dice/dice4.png"
            statusMessage.textContent = "You Rolled A Four!"
            
            fours.textContent = `${fourTotal}`
        } else if (result == 5) {
            fiveTotal ++
            
            diceImage.src = "./assets/images/dice/dice5.png"
            statusMessage.textContent = "You Rolled A Five!"
            
            fives.textContent = `${fiveTotal}`
        } else if (result == 6) {
            sixTotal ++
            
            diceImage.src = "./assets/images/dice/dice6.png"
            statusMessage.textContent = "You Rolled A Six!"
            
            sixes.textContent = `${sixTotal}`
        }
        
        onePercentage = Math.round((oneTotal/totalClicks) * 100)
        onePercent.textContent = `${onePercentage}%`
        
        twoPercentage = Math.round((twoTotal/totalClicks) * 100)
        twoPercent.textContent = `${twoPercentage}%`
        
        threePercentage = Math.round((threeTotal/totalClicks) * 100)
        threePercent.textContent = `${threePercentage}%`
        
        fourPercentage = Math.round((fourTotal/totalClicks) * 100)
        fourPercent.textContent = `${fourPercentage}%`
        
        fivePercentage = Math.round((fiveTotal/totalClicks) * 100)
        fivePercent.textContent = `${fivePercentage}%`
        
        sixPercentage = Math.round((sixTotal/totalClicks) * 100)
        sixPercent.textContent = `${sixPercentage}%`
    })
    
    let clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', function(){
        
        totalClicks = 0
        
        oneTotal = 0
        twoTotal = 0
        threeTotal = 0
        fourTotal = 0
        fiveTotal = 0
        sixTotal = 0
        
        onePercentage = 0
        twoPercentage = 0
        threePercentage = 0
        fourPercentage = 0
        fivePercentage = 0
        sixPercentage = 0
        
        result = 0
        
        ones.textContent = `${oneTotal}`
        twos.textContent = `${twoTotal}`
        threes.textContent = `${threeTotal}`
        fours.textContent = `${fourTotal}`
        fives.textContent = `${fiveTotal}`
        sixes.textContent = `${sixTotal}`
        onePercent.textContent = `${onePercentage}%`
        twoPercent.textContent = `${twoPercentage}%`
        threePercent.textContent = `${threePercentage}%`
        fourPercent.textContent = `${fourPercentage}%`
        fivePercent.textContent = `${fivePercentage}%`
        sixPercent.textContent = `${sixPercentage}%`
        
        statusMessage.textContent = "Let's Get Rolling!"
    })
})