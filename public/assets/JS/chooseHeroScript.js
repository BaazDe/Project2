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
    cardWarrior.addEventListener("click", displayHero);

    function displayHero()
    {
        if (displayed === false) {
            //warrior display
            cardWarrior.classList.add("displayWarrior");
            statsWarrior.classList.add("displayWarrior");
            warriorBtn.classList.add("displayWarrior");
            //mage reset
            cardMage.classList.remove("displayMage");
            statsMage.classList.remove("displayMage");
            mageBtn.classList.remove("displayMage");
            //rogue reset
            cardRogue.classList.remove("displayRogue");
            statsRogue.classList.remove("displayRogue");
            rogueBtn.classList.remove("displayRogue");
            displayed = true;
        } else {
            //warrior reset
            cardWarrior.classList.remove("displayWarrior");
            statsWarrior.classList.remove("displayWarrior");
            warriorBtn.classList.remove("displayWarrior");
            displayed = false;
        }
    }


    // mage
    let displayed2 = false;
    cardMage.addEventListener("click", displayMage);

    function displayMage()
    {
        if (displayed2 === false) {
            //mage display
            cardMage.classList.add("displayMage");
            statsMage.classList.add("displayMage");
            mageBtn.classList.add("displayMage");
            //rogue reset
            cardRogue.classList.remove("displayRogue");
            statsRogue.classList.remove("displayRogue");
            rogueBtn.classList.remove("displayRogue");
            //warrior reset
            cardWarrior.classList.remove("displayWarrior");
            statsWarrior.classList.remove("displayWarrior");
            warriorBtn.classList.remove("displayWarrior");
            displayed2 = true;
        } else {
            //mage reset
            cardMage.classList.remove("displayMage");
            statsMage.classList.remove("displayMage");
            mageBtn.classList.remove("displayMage");
            displayed2 = false;
        }
    }


    // rogue
    let displayed3 = false;
    cardRogue.addEventListener("click", displayRogue);

    function displayRogue()
    {
        if (displayed3 === false) {
            //rogue display
            cardRogue.classList.add("displayRogue");
            statsRogue.classList.add("displayRogue");
            rogueBtn.classList.add("displayRogue");
            //warrior reset
            cardWarrior.classList.remove("displayWarrior");
            statsWarrior.classList.remove("displayWarrior");
            warriorBtn.classList.remove("displayWarrior");
            //mage reset
            cardMage.classList.remove("displayMage");
            statsMage.classList.remove("displayMage");
            mageBtn.classList.remove("displayMage");
            displayed3 = true;
        } else {
            //rogue reset
            cardRogue.classList.remove("displayRogue");
            statsRogue.classList.remove("displayRogue");
            rogueBtn.classList.remove("displayRogue");
            displayed3 = false;
        }
    }
}

