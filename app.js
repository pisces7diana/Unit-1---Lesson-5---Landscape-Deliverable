// console.log("Hi!");

// Landscaper
// You are starting a landscaping business, but all you have are your teeth.
// Use teeth, get paid $1
// Use rusty scissors, then it cost $5, and you get paid $5
// Use push lawnmover, then it cost $25, and you get paid $50
// Use battery-powered lawnmover, then it cost $250, and you get paid $100
// Use a team, then it cost $500, and you get paid $250
// Send to the landscaper that they have won the game

const tools = [
    {name: "teeth", paid: 1, cost: 0},
    {name: "rusty scissors", paid: 5, cost: 5},
    {name: "push lawnmower", paid: 50, cost: 25},
    {name: "battery-powered lawnmover", paid: 100, cost: 250},
    {name: "team", paid: 250, cost: 500},
]

const landscaper = {
    money: 0,
    tool: 0,
    wonGame: false
}

const tool = tools[landscaper.tool]
function cuttingLawns(){
    alert(`You have cut the lawn with ${tool.name} and got ${tool.paid} dollars`);
    landscaper.money += tool.paid
}

function upGrade(){
    if (landscaper.tool + 1 < tools.length) {
        const newTool = tools[landscaper.tool +1];
        if (newTool.cost <= landscaper.money) {
            landscaper.money -= newTool.cost;
            landscaper.tool += 1;
        } else {
            alert("No more money left for an upgrade")
        }
    } else {
        alert("No more tools left for upgrade")
    }
}

function winsGame(){
    if(landscaper.tool === tools.length - 1 && landscaper.money >=100){
        alert("You win!")
        landscaper.wonGame = true
    }
}

alert("Welcome to the Landscaper's Game")

while(!landscaper.wonGame){
    const response = prompt(`You have ${landscaper.money} dollars, do you want to [k]eep tool or [u]pgrade?`)
    if (response === 'k'){
        cuttingLawns()
    }

    if (response === 'u'){
        upGrade()
    }

    if (response !== 'k' && response !== 'u'){
        alert("Please make a choice, type 'k' or 'u'")
    }

    winsGame()
}