const responseWarrior = document.querySelector(".response-warrior");
const responseMage = document.querySelector(".response-mage");
const responseRogue = document.querySelector(".response-rogue");
const restartGameWarrior = document.querySelector(".restartGame-warrior");
const restartGameMage = document.querySelector(".restartGame-mage");
const restartGameRogue = document.querySelector(".restartGame-rogue");
const inventoryBtnWarrior = document.querySelector(".inventoryBtn-warrior");
const enigmaWarrior = document.getElementById("enigma-warrior");
const enigmaMage = document.getElementById("enigma-mage");
const enigmaRogue = document.getElementById("enigma-rogue");
const inventoryBtnMage = document.querySelector(".inventoryBtn-mage");
const inventoryBtnRogue = document.querySelector(".inventoryBtn-rogue");

if (responseMage || enigmaMage !== null) {
    responseMage.classList.add("color");
    restartGameMage.classList.add("color");
    inventoryBtnMage.classList.add("color");
}

if (responseWarrior || enigmaWarrior !== null) {
    responseWarrior.classList.add("color");
    restartGameWarrior.classList.add("color");
    inventoryBtnWarrior.classList.add("color");
}

if (responseRogue || enigmaRogue !== null) {
    responseRogue.classList.add("color");
    restartGameRogue.classList.add("color");
    inventoryBtnRogue.classList.add("color");
}