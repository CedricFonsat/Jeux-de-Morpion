let test = [];



test[0].addEventListener("click",clicked(this));

function puissanceFour() {
    let gridBefore = document.querySelectorAll(".grid-game");
for (let j = 0; j < gridBefore.length; j++) {
    gridBefore[j].style.display = "none";
}
for (let i = 0; i < 42; i++) {
    test[i] = document.createElement("div");
    test[i].style.width = "75px";
test[i].style.height = "75px";
test[i].classList.add("grid-game");
//test[i].style.backgroundColor = "red";
test[i].style.border= "1px solid white";
document.querySelector("#game").appendChild(test[i]);

}
for (let i = 0; i < test.length; i++) {
    console.log(test[i]); 
}

let game = document.querySelector("#game");
game.style.gridTemplateColumns = "auto auto auto auto auto auto auto";
}

function clicked(element) {
    element.innerText = "C";
}



