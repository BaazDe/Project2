const displayWeapons = document.getElementById("displayedWeapons");
const itemsDisplayer = document.getElementById("itemsDisplayer");
const displayItems = document.getElementById("displayedItems");
const weaponsDisplayer = document.getElementById("weaponsDisplayer");

// Displays the weapon list
let displayed = false;
let displayed2 = false;
document.getElementById("weaponsDisplayer").addEventListener("click", displayedWeapons);

function displayedWeapons()
{
    if (displayed === false) {
        displayed = true;
        displayWeapons.classList.add("script");
        itemsDisplayer.classList.add("displayN");
    } else {
        displayed = false;
        displayWeapons.classList.remove("script");
        itemsDisplayer.classList.remove("displayN");
        itemsDisplayer.classList.add("displayB");
    }
}

//Displays the item list
document.getElementById("itemsDisplayer").addEventListener("click", displayedItems);

function displayedItems()
{
    if (displayed === false) {
        displayed = true;
        displayItems.classList.add("displayB");
        weaponsDisplayer.classList.add("displayN");
    } else {
        displayed = false;
        displayItems.classList.remove("displayB");
        weaponsDisplayer.classList.remove("displayN");
        weaponsDisplayer.classList.add("displayB");
    }
}

// displays weapon stats
/*document.getElementById("axe").addEventListener("click", displayedStats);
function displayedStats() {
    if (displayed2 === false){
        document.getElementById("weaponStats").style.display= "flex";
        document.getElementById("displayedWeapons").style.display= "none";
        displayed2 = true;
    } else {
        document.getElementById("displayedWeapons").style.display= "none";
        document.getElementById("weaponStats").style.display= "none";
        displayed2 = false;
    }  */

