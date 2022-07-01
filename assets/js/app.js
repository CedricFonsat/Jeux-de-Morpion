let playerO = "🕸"; // style donné au pions O
let playerX = "🪰"; // style donné au pions X
let roundScript = document.querySelector("h2");
let ifPlayerOne = true;
let gameOver = false;
let isEmptyCell = false;
let round = 0;
let isOn = false;
let game = document.querySelectorAll(".grid-game");
let btnChangeGame = document.querySelector("#changeGame");
let btnPowerOrMorpy = false
let cVsJ = false
let victoryTab = [
  // tableau de vitoire pour morpion 3/3
  //Horizontale
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Verticale
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonale
  [0, 4, 8],
  [2, 4, 6],
];
roundScript.innerText = "Tour du joueur X";
btnChangeGame.innerText = "VS MORPY";
loadPage()
morpion()
/***************************** Game / vs joueur vs autopilot */
function changerGame() {
  isOn = !isOn;
  cpuVsJoueur()
}
/***************************** Fonction pour le jeux */
function morpyGame(element) {
  roundPlayers(element);
}
/***************************** Condition changement de texte : aleatoire / joueur */
function cpuVsJoueur() {
  if (cVsJ == false) {
    btnChangeGame.innerText = 'VS JOUEUR'
    cVsJ = true
}else{
  btnChangeGame.innerText = 'VS MORPY'
    cVsJ = false
}
}
/***************************** Condition de victoire */
function victoryCondition() {
  let count = 0;
  for (let i = 0; i < victoryTab.length; i++) {
    let case1 =
      document.querySelectorAll(".grid-game")[victoryTab[i][0]].innerText;
    let case2 =
      document.querySelectorAll(".grid-game")[victoryTab[i][1]].innerText;
    let case3 =
      document.querySelectorAll(".grid-game")[victoryTab[i][2]].innerText;
    if (case1 == "" || case2 == "" || case3 == "") {
      continue;
    }
    if (case1 == case2 && case2 == case3) {
      if (case1 == playerX) {
        roundScript.innerText = "Le joueur X à gagné";
        gameOver = true;
        break; // arret du jeux en cas du jeux X
      } else {
        roundScript.innerText = "Le joueur O à gagné";
        gameOver = true;
        break; // arret du jeux en cas du jeux O
      }
    }
    if (gameOver) {
      return; // arret du jeux en cas de condition superieure requise
    }
  }
  for (let i = 0; i < document.querySelectorAll(".grid-game").length; i++) {
    if (document.querySelectorAll(".grid-game")[i].innerText != "") {
      count++;
    }
  }
  if (count == document.querySelectorAll(".grid-game").length) {
    roundScript.innerText = "Egalité"; // condition en cas d'egalité
  }
}
/***************************** Tour de joueur et afichage des pions */
function roundPlayers(element) {
  if (checkCellIsEmpty(element) && !gameOver) {
    if (ifPlayerOne === true) {
      element.innerText = playerX;
      roundScript.innerText = "Tour du joueur O";
      round++;
      if (isOn) {
        autoPilot();
        ifPlayerOne = !ifPlayerOne;
        round++;
      }
    } else {
      element.innerText = playerO;
      roundScript.innerText = "Tour du joueur X";
      round++;
    }
  }
  ifPlayerOne = !ifPlayerOne;
  victoryCondition();
  if (round === 9 && gameOver == false) {
    roundScript.innerText = "Match nul";
    gameOver = true;
  }
}
/***************************** Voir si les cellules sont vide */
function checkCellIsEmpty(element) {
  if (element.innerText == "") {
    isEmptyCell = true;
  } else {
    isEmptyCell = false;
  }
  return isEmptyCell;
}
/***************************** Reinitialisation du jeux */
function restart() {
  let caseGame = document.querySelectorAll(".grid-game");
  for (let k = 0; k < caseGame.length; k++) {
    caseGame[k].innerText = "";
  }
  roundScript.innerText = "Tour du joueur X";
  playerX = "🪰";
  gameOver = false;
  round = 0;
  ifPlayerOne = true;
}
/***************************** Aleatoire pour autopilote */
function aleatoire(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
/***************************** Mis en place de l'autopilote aleatoire */
function autoPilot() {
  for ( let index = 0;index < document.querySelectorAll(".grid-game").length; index++) {
    let random = aleatoire(0,document.querySelectorAll(".grid-game").length - 1);
    if (document.querySelectorAll(".grid-game")[random].innerText == "") {
      document.querySelectorAll(".grid-game")[random].innerText = playerO;
      break;
    }
  }
}
/***************************************************************************** Puissance 4 - en cour.... */
function fourPower() {
  document.querySelector("#game").innerHTML = "";
  for (let i = 0; i < 42; i++) {
    let tableFourPower = document.createElement("div");
    tableFourPower.style.width = "75px";
    tableFourPower.style.height = "75px";
    tableFourPower.style.fontSize = "75px";
    tableFourPower.classList.add("grid-game");
    tableFourPower.addEventListener("click", function () {
      morpyGame(tableFourPower);
    });
    document.querySelector("#game").appendChild(tableFourPower);
  }
  designPowerFour();
}
/********************************* Style pour le puissance 4 */
function designPowerFour() {
  let game = document.querySelector("#game");
  game.style.gridTemplateColumns = "auto auto auto auto auto auto auto";
  game.style.width = "700px";
  game.style.height = "600px";
  document.querySelector("main").style.background =
    'url("assets/images/backgroundHelp.jpg")';
   for (let i = 0; i < document.querySelectorAll(".grid-game").length; i++) {
    document.querySelectorAll(".grid-game")[i].style.border = "15px solid #660804";
   }
   btnChangeGame.style.background = 'url("assets/images/blood.jpeg")';
   document.querySelector("#puissance-four").style.background =
   'url("assets/images/blood.jpeg")';
   document.querySelector("#deadmanji").src =
   "assets/images/bloodmanji.png";
   document.querySelector("#replay").style.backgroundColor = "#5d0c09";
   document.querySelector("#replay").style.color = "white";
   document.querySelector("#game").style.maginLeft = "0px";
   document.querySelector("#game").style.marginRight = "0px";

}
/*********************************** Le bouton switch puissance 4 et Morpy - en cours... */
function btnIfPowerFourOrNo(){
    if (btnPowerOrMorpy == false) {
        document.querySelector("#puissance-four").innerText = 'MORPY'
        btnPowerOrMorpy = true
        fourPower();
    }else{
        document.querySelector("#puissance-four").innerText = 'PUISSANCE 4'
        btnPowerOrMorpy = false
        morpion()
    }
}
/********************************** Morpion creer avec createElement */
function morpion() {
  document.querySelector("#game").innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let morpionGrid = document.createElement("div")
    morpionGrid.style.width = "100px";
    morpionGrid.style.height = "100px";
    morpionGrid.style.fontSize = "100px";
    morpionGrid.classList.add("grid-game");
    morpionGrid.addEventListener("click", function () {
      morpyGame(morpionGrid);
    });
    document.querySelector("#game").appendChild(morpionGrid);
  }
  designMorpion();
}
/********************************* Style pour le morpion */
function designMorpion() {
  let game = document.querySelector("#game");
  game.style.gridTemplateColumns = "auto auto auto";
  game.style.width = "300px";
  game.style.height = "300px";
  document.querySelector("main").style.background =
  'url("assets/images/background.jpg")';
  document.querySelector("#deadmanji").src =
  "assets/images/jumanji.png";
  document.querySelector("#replay").style.backgroundColor = "white";
  document.querySelector("#replay").style.color = "black";
  btnChangeGame.style.background = 'linear-gradient(90deg,#88754f ,#e5d1b9)';
  document.querySelector("#puissance-four").style.background = 'linear-gradient(90deg,#88754f ,#e5d1b9)';
}
/********************************* Page pour commencer le jeux */
function loadPage() {
  let load = document.createElement("div");
  document.querySelector("main").appendChild(load);
  load.id = "load";
  load.style.width = "100%";
  load.style.height = "100vh";
  load.style.background = 'url("assets/images/background.jpg")';
  load.style.position = "absolute";
  load.style.zIndex = "998";
  load.style.top = "0";
  load.style.display = "flex";
  load.style.flexDirection = "column";
  load.style.justifyContent = "center";
  load.style.alignItems = "center";
  loadPageText();
  loadPageBtn();
}
function loadPageText() {
  let loadImage = document.createElement("img");
  document.querySelector("#load").appendChild(loadImage);
  loadImage.src = "assets/images/morpygame.png";
  loadImage.style.width = "1000px"
  loadImage.style.zIndex = "999";
}
function loadPageBtn(){
  let loadBtn = document.createElement("button");
  document.querySelector("#load").appendChild(loadBtn);
  loadBtn.id = "loadBtn";
  loadBtn.innerText = "PLAY";
  loadBtn.style.width = "200px";
  loadBtn.style.height = "60px";
  loadBtn.style.background = "linear-gradient(90deg,#88754f ,#e5d1b9)";
  loadBtn.style.border = "none";
  loadBtn.style.borderRadius = "30px";
  loadBtn.style.fontFamily = "game";
  loadBtn.style.fontSize = "2em";
  loadBtn.style.color = "white";
  loadBtn.style.letterSpacing = "6px";
  loadBtn.style.marginTop = "50px";
  loadBtn.style.cursor = "pointer";
  document.querySelector("#loadBtn").addEventListener("click", function () {
    fadeLoad();
    load.style.top = "-100vh";
  });
}
function fadeLoad() {
  load.classList.add("animate");
}


