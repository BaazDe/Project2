//DISPLAY INVENTORY RESPONSIVE
let displayed = false;


document.getElementById("bagIcon").addEventListener("click", bagScript);
function bagScript() {
    if (displayed === false){
        document.getElementById("bagScript").style.display= "block";
        displayed = true;
    }
    else {
        document.getElementById("bagScript").style.display = "none";
        displayed = false;
    }
}