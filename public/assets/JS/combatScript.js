// Displays the weapon list
let displayed = false;
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
