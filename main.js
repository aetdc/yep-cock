var gameData = {
    cock: 0,
    cockPerClick: 1,
    cockPerClickCost: 10
};
if (localStorage.getItem("cockYepperSave") != null) {
    gameData = JSON.parse(localStorage.getItem("cockYepperSave"));
}
  
function yepCock() {
    gameData.cock += gameData.cockPerClick
    document.getElementById("cocksYepped").innerHTML = gameData.cock + " COCKS YEPPED"}

function updateValues() {
    document.getElementById("cocksYepped").innerHTML = gameData.cock + " COCKS YEPPED"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade YEPPER (Currently Level " + gameData.cockPerClick + ") Cost: " + gameData.cockPerClickCost + " COCKS"
}

function buyCockPerClick() {
    if (gameData.cock >= gameData.cockPerClickCost) {
        gameData.cock -= gameData.cockPerClickCost
        gameData.cockPerClick += 1
        gameData.cockPerClickCost *= 2
        updateValues();
    }
}

updateValues(); // Update values immediately as page loads instead of on first tick of "mainGameLoop"
var mainGameLoop = window.setInterval(function() {
    yepCock()
    updateValues()
    localStorage.setItem("cockYepperSave", JSON.stringify(gameData))
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("cockYepperSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("cockYepperSave"))
if (savegame !== null) {
    gameData = savegame
}
