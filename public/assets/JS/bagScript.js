//DISPLAY INVENTORY RESPONSIVE
const bagIcon = document.getElementById("bagIcon");
const main = document.getElementById("main");
const history = document.getElementById("history");
const responses = document.getElementById("responses");
const enigma = document.getElementById("enigma");

let displayed = false;


bagIcon.addEventListener("click", bagScript);
function bagScript(){
    if (displayed === false){
        document.getElementById("bagScript").classList.add("script");
        history.classList.add("script");
        responses.classList.add("script");
        main.classList.add("script");
        enigma.classList.add("script");
        displayed = true;
    } else {
        document.getElementById("bagScript").classList.remove("script");
        main.classList.remove("script");
        history.classList.remove("script");
        responses.classList.remove("script");
        displayed = false;
    }
}