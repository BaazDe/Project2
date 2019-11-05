//DISPLAY INVENTORY RESPONSIVE
const bagIcon = document.getElementById("bagIcon");
const main = document.getElementById("main");
const history = document.getElementById("history");
const responses = document.getElementById("responses");

let displayed = false;


bagIcon.addEventListener("click", bagScript);
function bagScript(){
    if (displayed === false){
        document.getElementById("bagScript").style.display= "block";
        document.getElementById("bagScript").style.transitionDuration= "1s";
        main.style.background= "rgba(0, 0, 0, 0.5)";
        main.animate({opacity: [5000, 0]});
        main.style.transitionDuration= "1s";
        history.style.filter= "blur(5px)";
        history.style.transitionDuration= "1s";
        responses.style.filter= "blur(5px)";
        responses.style.transitionDuration= "1s";
        displayed = true;
    }
    else {
        document.getElementById("bagScript").style.display = "none";
        main.style.background= "none";
        main.style.filter= "none";
        history.style.filter= "none";
        responses.style.filter= "none";
        displayed = false;
    }
}