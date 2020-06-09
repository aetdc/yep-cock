var gameData = {
    cock: 0,
    cockPerClick: 1,
    cockPerClickCost: 10
  }
  
function yepCock() {
    gameData.cock += gameData.cockPerClick
    document.getElementById("cocksYepped").innerHTML = gameData.cock + " COCKS YEPPED"}

function buyCockPerClick() {
    if (gameData.cock >= gameData.cockPerClickCost) {
        gameData.cock -= gameData.cockPerClickCost
        gameData.cockPerClick += 1
        gameData.cockPerClickCost *= 2
        document.getElementById("cocksYepped").innerHTML = gameData.cock + " COCKS YEPPED"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade YEPPER (Currently Level " + gameData.cockPerClick + ") Cost: " + gameData.cockPerClickCost + " COCK(S)"
        }
      }

var mainGameLoop = window.setInterval(function() {
    yepCock()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("cockYepperSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("cockYepperSave"))
if (savegame !== null) {
    gameData = savegame
}