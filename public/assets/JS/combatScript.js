const weaponsDisplayer = document.getElementById("weaponsDisplayer");
const itemsDisplayer = document.getElementById("itemsDisplayer");
const displayWeapons = document.getElementById("displayedWeapons");
const displayItems = document.getElementById("displayedItems");

// Displays the weapon list
document.getElementById("weaponsDisplayer").addEventListener("click", displayedWeapons);
function displayedWeapons()
{
        displayWeapons.classList.toggle("script");
        itemsDisplayer.classList.toggle("displayN");
}

//Displays the item list
document.getElementById("itemsDisplayer").addEventListener("click", displayedItems);
function displayedItems()
{
        displayItems.classList.toggle("displayB");
        weaponsDisplayer.classList.toggle("displayN");
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

