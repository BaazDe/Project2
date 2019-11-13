const responseWarrior = document.querySelectorAll(".response-warrior");
const responseMage = document.querySelectorAll(".response-mage");
const responseRogue = document.querySelectorAll(".response-rogue");
const restartButton = document.getElementById("restartButton");
const inventoryBtnWarrior = document.querySelectorAll(".inventoryBtn-warrior");
const inventoryBtnMage = document.querySelectorAll(".inventoryBtn-mage");
const inventoryBtnRogue = document.querySelectorAll(".inventoryBtn-rogue");

const weaponsDisplayerWarrior = document.getElementById("weaponsDisplayer-warrior");
const weaponsDisplayerMage = document.getElementById("weaponsDisplayer-mage");
const weaponsDisplayerRogue = document.getElementById("weaponsDisplayer-rogue");
const itemsDisplayerWarrior = document.getElementById("itemsDisplayer-warrior");
const itemsDisplayerMage = document.getElementById("itemsDisplayer-mage");
const itemsDisplayerRogue = document.getElementById("itemsDisplayer-rogue");

console.log(restartButton.getAttribute('class'));

if (restartButton.getAttribute('class') === "restartGame-rogue") {
    restartButton.classList.add("color");
    responseRogue.forEach(function (element) {
        element.classList.add("color");
    });
    inventoryBtnRogue.forEach(function (element) {
        element.classList.add("color");
    });
} else if (restartButton.getAttribute('class') === "restartGame-mage") {
    restartButton.classList.add("color");
    responseMage.forEach(function (element) {
        element.classList.add("color");
    });
    inventoryBtnMage.forEach(function (element) {
        element.classList.add("color");
    });
} else if (restartButton.getAttribute('class') === "restartGame-warrior") {
    restartButton.classList.add("color");
    responseWarrior.forEach(function (element) {
        element.classList.add("color");
    });
    inventoryBtnWarrior.forEach(function (element) {
        element.classList.add("color");
    });
    weaponsDisplayerWarrior.classList.add("color");
}