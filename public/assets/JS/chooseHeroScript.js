let width = window.screen.width;
console.log(width);
if(width <= 640){
    //warrior
    let displayed = false;
    document.getElementById("card-warrior").addEventListener("click", displayHero);

    function displayHero() {
        if (displayed === false)
        {
            //warrior display
            document.getElementById("card-warrior").style.height= "60%";
            document.getElementById("stats-warrior").style.display= "flex";
            document.getElementById("warrior-btn").style.display= "block";
            //mage reset
            document.getElementById("stats-mage").style.display= "none";
            document.getElementById("mage-btn").style.display= "none";
            document.getElementById("card-mage").style.height= "calc(100%/7)";
            //rogue reset
            document.getElementById("stats-rogue").style.display= "none";
            document.getElementById("rogue-btn").style.display= "none";
            document.getElementById("card-rogue").style.height= "calc(100%/7)";
            displayed = true;
        } else {
            //warrior reset
            document.getElementById("stats-warrior").style.display= "none";
            document.getElementById("warrior-btn").style.display= "none";
            document.getElementById("card-warrior").style.height= "calc(100%/7)";
            displayed = false;
        }
    }
    // mage
    let displayed2 = false;
    document.getElementById("card-mage").addEventListener("click", displayMage);

    function displayMage() {
        if (displayed2 === false)
        {
            //mage display
            document.getElementById("card-mage").style.height= "60%";
            document.getElementById("stats-mage").style.display= "flex";
            document.getElementById("mage-btn").style.display= "block";
            //rogue reset
            document.getElementById("stats-rogue").style.display= "none";
            document.getElementById("rogue-btn").style.display= "none";
            document.getElementById("card-rogue").style.height= "calc(100%/7)";
            //warrior reset
            document.getElementById("stats-warrior").style.display= "none";
            document.getElementById("warrior-btn").style.display= "none";
            document.getElementById("card-warrior").style.height= "calc(100%/7)";
            displayed2 = true;
        } else {
            document.getElementById("stats-mage").style.display= "none";
            document.getElementById("mage-btn").style.display= "none";
            document.getElementById("card-mage").style.height= "calc(100%/7)";
            displayed2 = false;
        }
    }
    // rogue
    let displayed3 = false;
    document.getElementById("card-rogue").addEventListener("click", displayRogue);

    function displayRogue() {
        if (displayed3 === false)
        {
            //rogue display
            document.getElementById("card-rogue").style.height= "60%";
            document.getElementById("stats-rogue").style.display= "flex";
            document.getElementById("rogue-btn").style.display= "block";
            //warrior reset
            document.getElementById("stats-warrior").style.display= "none";
            document.getElementById("warrior-btn").style.display= "none";
            document.getElementById("card-warrior").style.height= "calc(100%/7)";
            //mage reset
            document.getElementById("stats-mage").style.display= "none";
            document.getElementById("mage-btn").style.display= "none";
            document.getElementById("card-mage").style.height= "calc(100%/7)";
            displayed3 = true;
        } else {
            //rogue reset
            document.getElementById("stats-rogue").style.display= "none";
            document.getElementById("rogue-btn").style.display= "none";
            document.getElementById("card-rogue").style.height= "calc(100%/7)";
            displayed3 = false;
        }
    }
}
