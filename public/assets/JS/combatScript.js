// Displays the weapon list
let displayed = false;
let displayed2 = false;
document.getElementById("weaponsDisplayer").addEventListener("click", displayedWeapons);


function displayedWeapons() {
    if (displayed === false){
        document.getElementById("displayedWeapons").style.display= "block";
        document.getElementById("itemsDisplayer").style.display= "none";
        displayed = true;
    } else {
        document.getElementById("displayedWeapons").style.display= "none";
        document.getElementById("itemsDisplayer").style.display= "block";
        displayed = false;
    }
}

//Displays the item list
document.getElementById("itemsDisplayer").addEventListener("click", displayedItems);
function displayedItems() {
    if (displayed === false){
        document.getElementById("displayedItems").style.display= "block";
        document.getElementById("itemsDisplayer").style.display= "block";
        document.getElementById("weaponsDisplayer").style.display= "none";
        displayed = true;
    } else {
        document.getElementById("displayedItems").style.display= "block";
        document.getElementById("itemsDisplayer").style.display= "block";
        document.getElementById("weaponsDisplayer").style.display= "block";
        document.getElementById("displayedItems").style.display= "none";
        displayed = false;
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

