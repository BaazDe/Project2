let width = window.screen.width;
console.log(width);


const cardWarrior = document.getElementById("card-warrior");
const statsWarrior = document.getElementById("stats-warrior");
const warriorBtn = document.getElementById("warrior-btn");
const cardMage = document.getElementById("card-mage");
const statsMage = document.getElementById("stats-mage");
const mageBtn = document.getElementById("mage-btn");
const cardRogue = document.getElementById("card-rogue");
const statsRogue = document.getElementById("stats-rogue");
const rogueBtn = document.getElementById("rogue-btn");


if (width <= 640) {
    //warrior
    let displayed = false;
    document.getElementById("card-warrior").addEventListener("click", displayHero);

    function displayHero()
    {
        if (displayed === false) {
            //warrior display
            cardWarrior.classList.add("displayWarrior");
            statsWarrior.classList.add("displayWarrior");
            warriorBtn.classList.add("displayWarrior");
            //mage reset
            statsMage.classList.add("resetMage");
            mageBtn.classList.add("resetMage");
            cardMage.classList.add("resetMage");
            //rogue reset
            statsRogue.classList.add("resetRogue");
            rogueBtn.classList.add("resetRogue");
            cardRogue.classList.add("resetRogue");
            displayed = true;
        } else {
            //warrior reset
            statsWarrior.classList.add("resetWarrior");
            warriorBtn.classList.add("resetWarrior");
            cardWarrior.classList.add("resetWarrior");
            displayed = false;
        }
    }


    // mage
    let displayed2 = false;
    document.getElementById("card-mage").addEventListener("click", displayMage);

    function displayMage()
    {
        if (displayed2 === false) {
            //mage display
            cardMage.classList.add("displayMage");
            statsMage.classList.add("displayMage");
            mageBtn.classList.add("displayMage");
            //rogue reset
            statsRogue.classList.add("resetRogue");
            rogueBtn.classList.add("resetRogue");
            cardRogue.classList.add("resetRogue");
            //warrior reset
            statsWarrior.classList.add("resetWarrior");
            warriorBtn.classList.add("resetWarrior");
            cardWarrior.classList.add("resetWarrior");
            displayed2 = true;
        } else {
            //mage reset
            statsMage.classList.add("resetMage");
            mageBtn.classList.add("resetMage");
            cardMage.classList.add("resetMage");
            displayed2 = false;
        }
    }


    // rogue
    let displayed3 = false;
    document.getElementById("card-rogue").addEventListener("click", displayRogue);

    function displayRogue()
    {
        if (displayed3 === false) {
            //rogue display
            cardRogue.classList.add("displayRogue");
            statsRogue.classList.add("displayRogue");
            rogueBtn.classList.add("displayRogue");
            //warrior reset
            statsWarrior.classList.add("resetWarrior");
            warriorBtn.classList.add("resetWarrior");
            cardWarrior.classList.add("resetWarrior");
            //mage reset
            statsMage.classList.add("resetMage");
            mageBtn.classList.add("resetMage");
            cardMage.classList.add("resetMage");
            displayed3 = true;
        } else {
            //rogue reset
            statsRogue.classList.add("resetRogue");
            rogueBtn.classList.add("resetRogue");
            cardRogue.classList.add("resetRogue");
            displayed3 = false;
        }
    }
}
